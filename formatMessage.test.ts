import { assertEquals } from "@std/assert";
import { tgEntity, tgFmt } from "./formatMessage.ts";

Deno.test("can take a single argument", () => {
  assertEquals(
    tgFmt("test"),
    {
      text: "test",
    },
  );
});

Deno.test("can take multiple arguments", () => {
  assertEquals(
    tgFmt("test", " ", "test"),
    {
      text: "test test",
    },
  );
});

Deno.test("can take single array argument", () => {
  assertEquals(
    tgFmt(["a", "b", "c"]),
    {
      text: "abc",
    },
  );
});

Deno.test("can take array and rest arguments", () => {
  assertEquals(
    tgFmt(["a", "b", "c"], ":", ":"),
    {
      text: "a:b:c",
    },
  );
});

Deno.test("can take a single entity argument", () => {
  assertEquals(
    tgFmt(tgEntity("text_link", "test", { url: "https://example.com" })),
    {
      text: "test",
      entities: [{ type: "text_link", offset: 0, length: 4, url: "https://example.com" }],
    },
  );
});

Deno.test("can be called as a tagged template literal", () => {
  assertEquals(
    tgFmt`test`,
    {
      text: "test",
    },
  );
});

Deno.test("formats entity in the middle of template literal", () => {
  assertEquals(
    tgFmt`test ${tgEntity("bold", "test")} test`,
    {
      text: "test test test",
      entities: [{ type: "bold", offset: 5, length: 4 }],
    },
  );
});

Deno.test("formats entity at the start of template literal", () => {
  assertEquals(
    tgFmt`${tgEntity("italic", "test")} test`,
    {
      text: "test test",
      entities: [{ type: "italic", offset: 0, length: 4 }],
    },
  );
});

Deno.test("formats entity at the end of template literal", () => {
  assertEquals(
    tgFmt`test ${tgEntity("underline", "test")}`,
    {
      text: "test test",
      entities: [{ type: "underline", offset: 5, length: 4 }],
    },
  );
});

Deno.test("formats multiple entities in template literal", () => {
  assertEquals(
    tgFmt`<${tgEntity("spoiler", "a")},${tgEntity("strikethrough", "b")}>`,
    {
      text: "<a,b>",
      entities: [
        { type: "spoiler", offset: 1, length: 1 },
        { type: "strikethrough", offset: 3, length: 1 },
      ],
    },
  );
});

Deno.test("flattens arrays", () => {
  assertEquals(
    tgFmt`<${[tgEntity("spoiler", "a"), ",", tgEntity("strikethrough", "b")]}>`,
    {
      text: "<a,b>",
      entities: [
        { type: "spoiler", offset: 1, length: 1 },
        { type: "strikethrough", offset: 3, length: 1 },
      ],
    },
  );
});

Deno.test("treats null and undefined as empty string", () => {
  assertEquals(
    tgFmt`<${null},${undefined}>`,
    {
      text: "<,>",
    },
  );
});

Deno.test("returns correct indices with emojis", () => {
  assertEquals(
    tgFmt`🏳️‍🌈 ${tgEntity("code", "👍")}`,
    {
      text: "🏳️‍🌈 👍",
      entities: [{ type: "code", offset: 7, length: 2 }],
    },
  );
});
