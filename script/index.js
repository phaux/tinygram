import { readFile, writeFile } from "fs/promises";
import fetch from "node-fetch";
import { join } from "path";
import ts from "typescript";
import { generate } from "./generate.js";

const [outputDir] = process.argv.slice(2);
if (outputDir == null) {
  throw new Error("Missing argument: output directory");
}

/** @type {import("./types.js").TgApi} */
const api = await fetch(
  "https://raw.githubusercontent.com/PaulSonOfLars/telegram-bot-api-spec/main/api.json"
).then((res) => /** @type {any} */ (res.json()));

const staticCode = await readFile(
  new URL("./static/index.ts", import.meta.url),
  "utf8"
);

const sourceFile = ts.createSourceFile(
  "index.ts",
  staticCode,
  ts.ScriptTarget.Latest,
  false,
  ts.ScriptKind.TS
);

/** @type {any} */ (sourceFile).statements = ts.factory.createNodeArray([
  ...sourceFile.statements,
  ...generate(api),
]);

const printer = ts.createPrinter();
let code = "// this file is auto-generated. do not edit it manually.\n\n";
code += printer.printFile(sourceFile);
await writeFile(join(outputDir, "index.ts"), code);
