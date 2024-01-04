// deno-lint-ignore-file require-await
import {
  assert,
  assertEquals,
  assertInstanceOf,
  assertObjectMatch,
  unreachable,
} from "https://deno.land/std@0.201.0/assert/mod.ts";
import {
  callTgApi,
  getTgFileData,
  initTgBot,
  listTgUpdates,
  TgBot,
  TgBotOptions,
  TgError,
} from "./mod.ts";
import { TgChat, TgMessage, TgUpdate, TgUser } from "./api.ts";

const assertType = <T>(value: T) => value;

let lastReqUrl: string | undefined;
let lastReqInit: RequestInit | undefined;
let reqShouldFail = false;
let nextReqResult = {};

const fakeFetch: TgBotOptions["fetch"] = async (url, init) => {
  lastReqUrl = url;
  lastReqInit = init;
  if (reqShouldFail) {
    return {
      ok: false,
      status: 400,
      statusText: "Bad Request",
      json: async () => ({
        ok: false,
        error_code: 400,
        description: "test error",
      }),
      blob: async () => new Blob(),
    };
  } else {
    return {
      ok: true,
      status: 200,
      statusText: "OK",
      json: async () => ({
        ok: true,
        result: nextReqResult,
      }),
      blob: async () => new Blob(),
    };
  }
};

const botOptions = { botToken: "TOKEN", fetch: fakeFetch };

const tgBot = initTgBot(botOptions);

Deno.test("callTgApi", async () => {
  reqShouldFail = false;
  const result = await callTgApi(botOptions, "getMe")
    .then((result) => assertType<TgUser>(result));
  assertType<TgUser>(result);
  assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getMe");
});

Deno.test("callTgApi with simple parameters", async () => {
  reqShouldFail = false;
  const result = await callTgApi(botOptions, "getChat", { chat_id: 321 })
    .then((result) => assertType<TgChat>(result));
  assertType<TgChat>(result);
  assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getChat?chat_id=321");
});

Deno.test("callTgApi with tgBot options with complex parameters", async () => {
  reqShouldFail = false;
  const result = await callTgApi(tgBot.options, "sendMessage", {
    chat_id: 321,
    text: "Hello, world!",
    reply_markup: { remove_keyboard: true },
  }).then((result) => assertType<TgMessage>(result));
  assertType<TgMessage>(result);
  assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/sendMessage");
  assertObjectMatch(lastReqInit!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: 321,
      text: "Hello, world!",
      reply_markup: { remove_keyboard: true },
    }),
  });
});

Deno.test("tgBot method call", async () => {
  reqShouldFail = false;
  const result = await tgBot.getMe().then(assertType<TgUser>);
  assertType<TgUser>(result);
  assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getMe");
  assertObjectMatch(lastReqInit!, { method: "POST" });
});

Deno.test("tgBot method call with simple parameters", async () => {
  reqShouldFail = false;
  const result = await tgBot.getChat({ chat_id: 123 })
    .then(assertType<TgChat>);
  assertType<TgChat>(result);
  assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getChat?chat_id=123");
  assertObjectMatch(lastReqInit!, { method: "POST" });
});

Deno.test("tgBot method call with complex parameters", async () => {
  const data = {
    chat_id: 123,
    text: "Hello, world!",
    reply_markup: { remove_keyboard: true },
  };
  reqShouldFail = false;
  const result = await tgBot.sendMessage(data).then(assertType<TgMessage>);
  assertType<TgMessage>(result);
  assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/sendMessage");
  assertObjectMatch(lastReqInit!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
});

Deno.test("tgBot method call with file parameters", async () => {
  const data = {
    chat_id: 123,
    photo: new Blob(),
    reply_markup: { remove_keyboard: true },
  };
  reqShouldFail = false;
  const result = await tgBot.sendPhoto(data).then(assertType<TgMessage>);
  assertType<TgMessage>(result);
  assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/sendPhoto");
  assertObjectMatch(lastReqInit!, { method: "POST" });
  assertInstanceOf(lastReqInit?.body, FormData);
  const formData = lastReqInit.body;
  assertEquals(formData.get("chat_id"), "123");
  assertEquals(formData.get("reply_markup"), JSON.stringify(data.reply_markup));
  assertInstanceOf(formData.get("photo"), Blob);
});

Deno.test("tgBot.getFileData", async () => {
  reqShouldFail = false;
  const result = await tgBot.getFileData("file_path_123")
    .then(assertType<Blob>);
  assertType<Blob>(result);
  assertEquals(lastReqUrl, "https://api.telegram.org/file/botTOKEN/file_path_123");
  assertObjectMatch(lastReqInit!, { method: "GET" });
});

Deno.test("getTgFileData", async () => {
  reqShouldFail = false;
  const result = await getTgFileData(botOptions, "file_path_123")
    .then(assertType<Blob>);
  assertType<Blob>(result);
  assertEquals(lastReqUrl, "https://api.telegram.org/file/botTOKEN/file_path_123");
  assertObjectMatch(lastReqInit!, { method: "GET" });
});

Deno.test("getTgFileData with tgBot options", async () => {
  reqShouldFail = false;
  const tgBot = new TgBot(botOptions);
  const result = await getTgFileData(tgBot.options, "file_path_123")
    .then(assertType<Blob>);
  assertType<Blob>(result);
  assertEquals(lastReqUrl, "https://api.telegram.org/file/botTOKEN/file_path_123");
  assertObjectMatch(lastReqInit!, { method: "GET" });
});

Deno.test("listTgUpdates", async () => {
  reqShouldFail = false;
  nextReqResult = [{ update_id: 1 }] satisfies TgUpdate[];
  const updates = listTgUpdates(botOptions, {});
  {
    const update = await updates.next()
      .then(assertType<IteratorResult<TgUpdate, void>>);
    assert(!update.done);
    assertType<TgUpdate>(update.value);
    assertEquals(update.value.update_id, 1);
    assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getUpdates?offset=0");
  }
  {
    const update = await updates.next();
    assert(!update.done);
    assertType<TgUpdate>(update.value);
    assertEquals(update.value.update_id, 1);
    assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getUpdates?offset=2");
  }
  for await (const update of updates) {
    assertType<TgUpdate>(update);
    break;
  }
});

Deno.test("tgBot.listUpdates", async () => {
  reqShouldFail = false;
  nextReqResult = [{ update_id: 1 }] satisfies TgUpdate[];
  const updates = tgBot.listUpdates({});
  {
    const update = await updates.next()
      .then(assertType<IteratorResult<TgUpdate, void>>);
    assert(!update.done);
    assertType<TgUpdate>(update.value);
    assertEquals(update.value.update_id, 1);
    assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getUpdates?offset=0");
  }
  {
    const update = await updates.next();
    assert(!update.done);
    assertType<TgUpdate>(update.value);
    assertEquals(update.value.update_id, 1);
    assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getUpdates?offset=2");
  }
  for await (const update of updates) {
    assertType<TgUpdate>(update);
    break;
  }
});

Deno.test("callTgApi with error", async () => {
  try {
    reqShouldFail = true;
    await callTgApi(botOptions, "getMe");
    unreachable();
  } catch (error) {
    assertInstanceOf(error, TgError);
    assertObjectMatch(error, {
      message: "test error",
      code: 400,
    });
    assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getMe");
  }
});

Deno.test("tgBot method call with error", async () => {
  try {
    reqShouldFail = true;
    await tgBot.getChat({ chat_id: 123 });
    unreachable();
  } catch (error) {
    assertInstanceOf(error, TgError);
    assertObjectMatch(error, {
      message: "test error",
      code: 400,
    });
    assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getChat?chat_id=123");
  }
});
