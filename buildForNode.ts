// deno-lint-ignore-file no-top-level-await -- this is a CLI script
import { build, emptyDir } from "@deno/dnt";
import denoJson from "./deno.json" with { type: "json" };

await emptyDir("./npm");

await build({
  entryPoints: Object.entries(denoJson.exports).map(([name, path]) => ({ name, path })),
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  package: {
    name: "tinygram",
    version: denoJson.version,
    description: "Tiny Telegram Bot API client library with TypeScript types.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/phaux/tinygram.git",
    },
  },
  scriptModule: false,
  test: false,
  typeCheck: false,
  postBuild() {
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
