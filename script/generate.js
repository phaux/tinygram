import ts from "typescript";

const apiName = "TgBot";

/** @param {string} typeName */
const apiTypeName = (typeName) =>
  `Tg${typeName.charAt(0).toUpperCase()}${typeName.slice(1)}`;

/**
 * @param {import("./types.js").TgApi} api
 * @return {Generator<import("typescript").Node>}
 */
export function* generate(api) {
  // const tgApiVersion
  yield ts.factory.createVariableStatement(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createVariableDeclarationList(
      [
        ts.factory.createVariableDeclaration(
          "tgApiVersion",
          undefined,
          undefined,
          ts.factory.createAsExpression(
            ts.factory.createStringLiteral(api.version),
            ts.factory.createTypeReferenceNode("const", undefined)
          )
        ),
      ],
      ts.NodeFlags.Const
    )
  );

  // interface TgBot
  yield ts.factory.createInterfaceDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier(apiName),
    undefined,
    undefined,
    Object.values(api.methods).flatMap((method) => [
      ...generateApiMethod(method),
    ])
  );

  // type Tg[Method]Params ...
  for (const method of Object.values(api.methods)) {
    yield* generateApiMethodParamType(method);
  }

  // type Tg[Type] ...
  for (const type of Object.values(api.types)) {
    yield* generateApiType(type);
  }
}

/**
 * @param {import("./types.js").TgMethod} method
 * @return {Generator<import("typescript").TypeElement>}
 */
function* generateApiMethod(method) {
  yield /** @type {any} */ (
    ts.factory.createJSDocComment(method.description.join("\n"), [
      ts.factory.createJSDocSeeTag(undefined, undefined, method.href),
    ])
  );

  yield ts.factory.createMethodSignature(
    [],
    ts.factory.createIdentifier(method.name),
    undefined,
    undefined,
    method.fields
      ? [
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            "params",
            undefined,
            ts.factory.createTypeReferenceNode(
              apiTypeName(`${method.name}Params`)
            ),
            undefined
          ),
        ]
      : [],
    ts.factory.createTypeReferenceNode("Promise", [
      ts.factory.createUnionTypeNode(
        method.returns.map((type) => generateType(type))
      ),
    ])
  );
}

/**
 * @param {import("./types.js").TgMethod} method
 * @return {Generator<import("typescript").Node>}
 */
function* generateApiMethodParamType(method) {
  if (method.fields) {
    yield* generateApiType({
      name: `${method.name}Params`,
      fields: method.fields,
      description: [`Parameters of {@link ${apiName}.${method.name}} method.`],
      href: method.href,
    });
  }
}

/**
 *
 * @param {import("./types.js").TgType} type
 * @return {Generator<import("typescript").Node>}
 */
function* generateApiType(type) {
  yield ts.factory.createJSDocComment(type.description.join("\n"), [
    ts.factory.createJSDocSeeTag(undefined, undefined, type.href),
  ]);

  let typeNode;
  if (type.name === "InputFile") {
    typeNode = ts.factory.createTypeReferenceNode(
      ts.factory.createIdentifier("Blob"),
      undefined
    );
  } else if (type.subtypes) {
    typeNode = ts.factory.createUnionTypeNode(
      type.subtypes.map((subtype) => generateType(subtype))
    );
  } else if (type.fields) {
    typeNode = ts.factory.createTypeLiteralNode(
      type.fields.flatMap((field) => [...generateApiTypeField(field)])
    );
  } else {
    typeNode = ts.factory.createTypeLiteralNode([]);
  }

  yield ts.factory.createTypeAliasDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    apiTypeName(type.name),
    undefined,
    typeNode
  );
}

/**
 * @param {import("./types.js").TgField} field
 */
function* generateApiTypeField(field) {
  yield /** @type {any} */ (
    ts.factory.createJSDocComment(
      ts.factory.createNodeArray([
        ts.factory.createJSDocText(field.description + "\n"),
      ])
    )
  );

  let typeNode;
  let match;
  if (field.types.join(",") === "String") {
    if ((match = field.description.match(/\balways "([^"]+)"(\. |$)/iu))) {
      typeNode = ts.factory.createLiteralTypeNode(
        ts.factory.createStringLiteral(match[1])
      );
    } else if ((match = field.description.match(/\bmust be (\w+)(\. |$)/iu))) {
      typeNode = ts.factory.createLiteralTypeNode(
        ts.factory.createStringLiteral(match[1])
      );
    } else if (
      (match = field.description.match(
        /\b(?:one of|can be|either)\s+(("[^"]+".*?)+(\. |$))/iu
      ))
    ) {
      const variants = [...match[1].matchAll(/"([^"]+)"/gu)].map(
        (match) => match[1]
      );

      typeNode = ts.factory.createUnionTypeNode(
        variants.map((variant) =>
          variant != null
            ? ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral(variant)
              )
            : ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
        )
      );
    } else {
      typeNode = ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    }
  } else {
    typeNode = ts.factory.createUnionTypeNode(
      field.types.map((type) => generateType(type))
    );
  }

  yield ts.factory.createPropertySignature(
    undefined,
    ts.factory.createIdentifier(field.name),
    field.required
      ? undefined
      : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
    typeNode
  );
}

/**
 * @param {string} type
 * @return {import("typescript").TypeNode}
 */
function generateType(type) {
  if (type.toLowerCase().startsWith("array of ")) {
    return ts.factory.createArrayTypeNode(
      generateType(type.substring("array of ".length))
    );
  }
  switch (type) {
    case "Boolean":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
    case "Float":
    case "Integer":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    case "String":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    default:
      return ts.factory.createTypeReferenceNode(apiTypeName(type));
  }
}
