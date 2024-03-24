import ts, { TypeNode } from "https://esm.sh/typescript@5.4.3";

const TG_API_DEF_URL =
  "https://raw.githubusercontent.com/PaulSonOfLars/telegram-bot-api-spec/main/api.json";

interface TgApiDef {
  version: string;
  release_date: string;
  methods: Record<string, TgApiMethodDef>;
  types: Record<string, TgApiTypeDef>;
}

interface TgApiMethodDef {
  name: string;
  href: string;
  description: string[];
  fields?: TgApiFieldDef[];
  returns: string[];
}

interface TgApiFieldDef {
  name: string;
  types: string[];
  required: boolean;
  description: string;
}

interface TgApiTypeDef {
  name: string;
  href: string;
  description: string[];
  fields?: TgApiFieldDef[];
  subtypes?: string[];
  subtype_of?: string[];
}

if (import.meta.main) {
  const tgApiDef = await fetch(Deno.args[0] ?? TG_API_DEF_URL)
    .then((resp) => resp.ok ? resp : Promise.reject(resp))
    .then((resp) => resp.json());
  const tgApiCode = generateTgApi(tgApiDef);
  console.log(tgApiCode);
}

/**
 * Generates TypeScript code for the Telegram Bot API types.
 */
export function generateTgApi(tgApiDef: TgApiDef) {
  const sourceFileNode = ts.factory.createSourceFile(
    [...generateApiNodes(tgApiDef)],
    ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
    ts.NodeFlags.None,
  );

  const printer = ts.createPrinter();
  let code = "// This file is auto-generated, do not edit it directly.\n\n";
  code += printer.printFile(sourceFileNode);
  return code;
}

/**
 * Generates all TS nodes for the API definition.
 */
function* generateApiNodes(tgApiDef: TgApiDef) {
  // version const
  yield ts.factory.createVariableStatement(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createVariableDeclarationList(
      [
        ts.factory.createVariableDeclaration(
          "TG_API_VERSION",
          undefined,
          undefined,
          ts.factory.createAsExpression(
            ts.factory.createStringLiteral(tgApiDef.version),
            ts.factory.createTypeReferenceNode("const", undefined),
          ),
        ),
      ],
      ts.NodeFlags.Const,
    ),
  );

  // API interface
  yield ts.factory.createInterfaceDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier("TgApi"),
    undefined,
    undefined,
    Object.values(tgApiDef.methods).map((method) => generateApiMethodNode(method)),
  );

  // type declarations for each API method's parameters
  for (const method of Object.values(tgApiDef.methods)) {
    if (method.fields) {
      yield generateApiMethodParamNode(method);
    }
  }

  // type declarations for each API type
  for (const type of Object.values(tgApiDef.types)) {
    yield generateApiTypeNode(type);
  }
}

/**
 * Generates a TS method signature for a single API method definition.
 */
function generateApiMethodNode(tgMethodDef: TgApiMethodDef) {
  const methodNode = ts.factory.createMethodSignature(
    [],
    ts.factory.createIdentifier(tgMethodDef.name),
    undefined,
    undefined,
    tgMethodDef.fields
      ? [
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          "params",
          undefined,
          ts.factory.createTypeReferenceNode(
            "Tg" + tgMethodDef.name.replace(/^./, (c) => c.toUpperCase()) + "Params",
          ),
          undefined,
        ),
      ]
      : [],
    ts.factory.createTypeReferenceNode("Promise", [
      ts.factory.createUnionTypeNode(tgMethodDef.returns.map((type) => generateTypeNode(type))),
    ]),
  );

  ts.addSyntheticLeadingComment(
    methodNode,
    ts.SyntaxKind.MultiLineCommentTrivia,
    createJsDocText(tgMethodDef.description.join("\n"), { see: tgMethodDef.href }),
    true,
  );

  return methodNode;
}

/**
 * Generates a TS type declaration for method's parameters for a single API method definition.
 */
function generateApiMethodParamNode(tgMethodDef: TgApiMethodDef) {
  return generateApiTypeNode({
    name: tgMethodDef.name.replace(/^./, (c) => c.toUpperCase()) + "Params",
    fields: tgMethodDef.fields,
    description: [`Parameters of {@link TgApi.${tgMethodDef.name}} method.`],
    href: tgMethodDef.href,
  });
}

/**
 * Generates a TS type declaration for a single API type definition.
 */
function generateApiTypeNode(tgTypeDef: TgApiTypeDef) {
  let typeNode;
  if (tgTypeDef.name === "InputFile") {
    typeNode = ts.factory.createTypeReferenceNode(
      ts.factory.createIdentifier("Blob"),
      undefined,
    );
  } else if (tgTypeDef.subtypes) {
    typeNode = ts.factory.createUnionTypeNode(
      tgTypeDef.subtypes.map((subtype) => generateTypeNode(subtype)),
    );
  } else if (tgTypeDef.fields) {
    typeNode = ts.factory.createTypeLiteralNode(
      tgTypeDef.fields.map((field) => generateTypeFieldNode(field, tgTypeDef.name)),
    );
  } else {
    typeNode = ts.factory.createTypeLiteralNode([]);
  }

  const typeDeclarationNode = ts.factory.createTypeAliasDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    `Tg${tgTypeDef.name}`,
    undefined,
    typeNode,
  );

  ts.addSyntheticLeadingComment(
    typeDeclarationNode,
    ts.SyntaxKind.MultiLineCommentTrivia,
    createJsDocText(tgTypeDef.description.join("\n"), { see: tgTypeDef.href }),
    true,
  );

  return typeDeclarationNode;
}

/**
 * Generates a TS property signature for a single API type field definition.
 *
 * `tgTypeDefName` is only used to replace some property types which are hardcoded.
 */
function generateTypeFieldNode(tgFieldDef: TgApiFieldDef, tgTypeDefName: string) {
  let typeNode;

  if (tgFieldDef.name === "allowed_updates") {
    // override: allowed_updates: Exclude<keyof TgUpdate, "update_id">[]
    typeNode = ts.factory.createArrayTypeNode(
      ts.factory.createTypeReferenceNode(
        ts.factory.createIdentifier("Exclude"),
        [
          ts.factory.createTypeOperatorNode(
            ts.SyntaxKind.KeyOfKeyword,
            ts.factory.createTypeReferenceNode("TgUpdate"),
          ),
          ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("update_id")),
        ],
      ),
    );
  } else if (tgFieldDef.name.endsWith("parse_mode")) {
    // override: parse_mode: undefined | "HTML" | "Markdown" | "MarkdownV2"
    typeNode = ts.factory.createUnionTypeNode([
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
      ...["HTML", "Markdown", "MarkdownV2"].map((mode) =>
        ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(mode))
      ),
    ]);
  } else if (tgFieldDef.types.join(",") === "String") {
    // for strings, try to parse the description to get a more specific type
    let match;
    if ((match = tgFieldDef.description.match(/\balways "([^"]+)"(\. |$)/iu))) {
      typeNode = ts.factory.createLiteralTypeNode(
        ts.factory.createStringLiteral(match[1]),
      );
    } else if (
      (match = tgFieldDef.description.match(/\bmust be (\w+)(\. |$)/iu))
    ) {
      typeNode = ts.factory.createLiteralTypeNode(
        ts.factory.createStringLiteral(match[1]),
      );
    } else if (
      (match = tgFieldDef.description.match(
        /\b(?:one of|can be|either)\s+(("[^"]+".*?)+(\. |$))/iu,
      ))
    ) {
      const variants = [...match[1].matchAll(/"([^"]+)"/gu)].map((match) => match[1]);

      typeNode = ts.factory.createUnionTypeNode(
        variants.map((variant) =>
          variant != null
            ? ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(variant))
            : ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
        ),
      );
    } else {
      // give up and use just string
      typeNode = ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    }
  } else {
    // use the type as is
    typeNode = ts.factory.createUnionTypeNode(
      tgFieldDef.types.map((type) => generateTypeNode(type)),
    );
  }

  if (
    typeNode.kind === ts.SyntaxKind.UnionType &&
    typeNode.types.length > 1 &&
    typeNode.types.every((type) => type.kind === ts.SyntaxKind.ArrayType)
  ) {
    // if the type is an union of arrays, change it to an array of unions
    typeNode = ts.factory.createArrayTypeNode(
      ts.factory.createUnionTypeNode(
        typeNode.types.map((type) => (type as ts.ArrayTypeNode).elementType),
      ),
    );
  }

  if (
    tgFieldDef.name === "user_administrator_rights" ||
    tgFieldDef.name === "bot_administrator_rights"
  ) {
    // override: these fields are actually Partial<T>
    typeNode = ts.factory.createTypeReferenceNode(
      ts.factory.createIdentifier("Partial"),
      [typeNode],
    );
  }

  if (tgTypeDefName.startsWith("InputMedia") && tgFieldDef.name === "media") {
    // override: media: T | Blob
    typeNode = ts.factory.createUnionTypeNode([
      typeNode,
      ts.factory.createTypeReferenceNode("Blob"),
    ]);
  }

  const propertyNode = ts.factory.createPropertySignature(
    undefined,
    ts.factory.createIdentifier(tgFieldDef.name),
    tgFieldDef.required ? undefined : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
    typeNode,
  );

  ts.addSyntheticLeadingComment(
    propertyNode,
    ts.SyntaxKind.MultiLineCommentTrivia,
    createJsDocText(tgFieldDef.description),
    true,
  );

  return propertyNode;
}

/**
 * Generate a TS type node from a API definition type name.
 */
function generateTypeNode(tgType: string): TypeNode {
  if (tgType.toLowerCase().startsWith("array of ")) {
    return ts.factory.createArrayTypeNode(
      generateTypeNode(tgType.substring("array of ".length)),
    );
  }
  switch (tgType.toLowerCase()) {
    case "boolean":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
    case "float":
    case "integer":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    case "string":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    default:
      return ts.factory.createTypeReferenceNode(`Tg${tgType}`);
  }
}

function createJsDocText(description: string, tags?: { see?: string }) {
  const lines = description.split("\n");
  if (tags?.see) {
    lines.push(`@see ${tags.see}`);
  }
  return "*\n" + lines.map((line) => ` * ${line}`).join("\n *\n") + "\n ";
}
