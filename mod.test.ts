// deno-lint-ignore-file require-await
import { assert } from "https://deno.land/std@0.220.1/assert/assert.ts";
import { assertEquals } from "https://deno.land/std@0.220.1/assert/assert_equals.ts";
import { assertInstanceOf } from "https://deno.land/std@0.220.1/assert/assert_instance_of.ts";
import { assertObjectMatch } from "https://deno.land/std@0.220.1/assert/assert_object_match.ts";
import { unreachable } from "https://deno.land/std@0.220.1/assert/unreachable.ts";
import { beforeEach, describe, it } from "https://deno.land/std@0.220.1/testing/bdd.ts";
import { promiseState } from "https://deno.land/x/async@v2.1.0/state.ts";
import {
  callTgApi,
  getTgFileData,
  initTgBot,
  listTgUpdates,
  TgBot,
  TgBotConfig,
  TgChat,
  TgError,
  TgMessage,
  TgResponseParameters,
  TgUpdate,
  TgUser,
} from "./mod.ts";

const assertType = <T>(value: T) => value;

let lastReqUrl: string | undefined;
let lastReqInit: RequestInit | undefined;
let reqShouldFail = false;
let nextReqResult = {};
let nextReqErrorStatus = 400;
let nextReqErrorStatusText = "Bad Request";
let nextReqErrorParams: TgResponseParameters | undefined;
let reqDelay = 0;

beforeEach(() => {
  lastReqUrl = undefined;
  lastReqInit = undefined;
  reqShouldFail = false;
  nextReqResult = {};
  nextReqErrorStatus = 400;
  nextReqErrorStatusText = "Bad Request";
  nextReqErrorParams = undefined;
  reqDelay = 0;
});

const fakeFetch: TgBotConfig["fetch"] = async (url, init) => {
  lastReqUrl = url;
  lastReqInit = init;

  const signal = init.signal;
  if (signal?.aborted) throw signal.reason;
  let timeout: ReturnType<typeof setTimeout>;
  const timeoutPromise = new Promise((resolve) => timeout = setTimeout(resolve, reqDelay));
  let abortPromise;
  if (signal) {
    abortPromise = new Promise((_, reject) => {
      signal.addEventListener("abort", () => {
        clearTimeout(timeout);
        reject(signal.reason);
      });
    });
  }
  await Promise.race([timeoutPromise, abortPromise]);

  if (reqShouldFail) {
    return {
      ok: false,
      status: nextReqErrorStatus,
      statusText: nextReqErrorStatusText,
      json: async () => ({
        ok: false,
        error_code: nextReqErrorStatus,
        description: "test error",
        parameters: nextReqErrorParams,
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

const botConfig = { botToken: "TOKEN", fetch: fakeFetch };

const tgBot = initTgBot(botConfig);

describe("callTgApi", () => {
  it("works with no parameters", async () => {
    const result = await callTgApi(botConfig, "getMe", undefined)
      .then((result) => assertType<TgUser>(result));
    assertType<TgUser>(result);
    assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getMe");
  });

  it("works with simple parameters", async () => {
    const result = await callTgApi(botConfig, "getChat", { chat_id: 321 })
      .then((result) => assertType<TgChat>(result));
    assertType<TgChat>(result);
    assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getChat?chat_id=321");
  });

  it("works with tgBot options with complex parameters", async () => {
    const result = await callTgApi(tgBot.config, "sendMessage", {
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

  it("works with blob in parameters", async () => {
    const result = await callTgApi(botConfig, "sendPhoto", {
      chat_id: 123,
      photo: new Blob([new Uint8Array([1, 2, 3])]),
      caption: "Photo foo",
    }).then((result) => assertType<TgMessage>(result));
    assertType<TgMessage>(result);
    assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/sendPhoto");
    assertObjectMatch(lastReqInit!, { method: "POST" });
    assertInstanceOf(lastReqInit?.body, FormData);
    const formData = lastReqInit.body;
    assertEquals(formData.get("chat_id"), "123");
    assertEquals(formData.get("caption"), "Photo foo");
    const photo = formData.get("photo");
    assertInstanceOf(photo, Blob);
    const photoData = await photo.arrayBuffer();
    assertEquals(new Uint8Array(photoData), new Uint8Array([1, 2, 3]));
  });

  it("works with deeply nested blobs in parameters", async () => {
    const result = await callTgApi(botConfig, "sendMediaGroup", {
      chat_id: 123,
      media: [
        {
          type: "photo",
          media: new Blob([new Uint8Array([1, 2, 3])]),
          caption: "Example photo",
        },
        {
          type: "video",
          media: new Blob([new Uint8Array([4, 5, 6, 7, 8])]),
          caption: "Example video",
        },
      ],
    }).then((result) => assertType<TgMessage[]>(result));
    assertType<TgMessage[]>(result);
    assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/sendMediaGroup");
    assertObjectMatch(lastReqInit!, { method: "POST" });
    assertInstanceOf(lastReqInit?.body, FormData);
    const respFormData = lastReqInit.body;
    assertEquals(respFormData.get("chat_id"), "123");
    const respMediaJson = respFormData.get("media");
    assert(typeof respMediaJson == "string");
    const respMedia = JSON.parse(respMediaJson);
    assert(Array.isArray(respMedia));
    assertEquals(respMedia.length, 2);
    assertObjectMatch(respMedia[0], {
      type: "photo",
      caption: "Example photo",
    });
    assertObjectMatch(respMedia[1], {
      type: "video",
      caption: "Example video",
    });
    const media1 = respMedia[0].media;
    const media2 = respMedia[1].media;
    assert(media1.startsWith("attach://"));
    assert(media2.startsWith("attach://"));
    const media1Prop = media1.slice("attach://".length);
    const media2Prop = media2.slice("attach://".length);
    const attachment1 = respFormData.get(media1Prop);
    const attachment2 = respFormData.get(media2Prop);
    assertInstanceOf(attachment1, Blob);
    assertInstanceOf(attachment2, Blob);
    assertEquals(attachment1.size, 3);
    assertEquals(attachment2.size, 5);
    const attachment1Data = await attachment1.arrayBuffer();
    const attachment2Data = await attachment2.arrayBuffer();
    assertEquals(new Uint8Array(attachment1Data), new Uint8Array([1, 2, 3]));
    assertEquals(new Uint8Array(attachment2Data), new Uint8Array([4, 5, 6, 7, 8]));
  });

  it("throws on error", async () => {
    try {
      reqShouldFail = true;
      await callTgApi(botConfig, "getMe", undefined);
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

  it("rejects when cancelled with no parameters", async () => {
    reqDelay = 500;
    try {
      await callTgApi(botConfig, "getMe", undefined, { signal: AbortSignal.timeout(100) });
      unreachable();
    } catch (error) {
      assertInstanceOf(error, DOMException);
      assertEquals(error.name, "TimeoutError");
    }
  });

  it("rejects when cancelled with simple parameters", async () => {
    reqDelay = 500;
    try {
      await callTgApi(botConfig, "getChat", {
        chat_id: 123,
      }, { signal: AbortSignal.timeout(100) });
      unreachable();
    } catch (error) {
      assertInstanceOf(error, DOMException);
      assertEquals(error.name, "TimeoutError");
    }
  });

  it("rejects when cancelled by middleware", async () => {
    const botConfigWithTimeout: TgBotConfig = {
      ...botConfig,
      fetch: (url, init) =>
        fakeFetch(url, {
          ...init,
          signal: init.signal ?? AbortSignal.timeout(100),
        }),
    };
    reqDelay = 500;
    try {
      await callTgApi(botConfigWithTimeout, "getChat", {
        chat_id: 123,
      });
      unreachable();
    } catch (error) {
      assertInstanceOf(error, DOMException);
      assertEquals(error.name, "TimeoutError");
    }
  });
});

describe("TgBot", () => {
  describe("direct API method call", () => {
    it("works with no parameters", async () => {
      const result = await tgBot.getMe({}).then(assertType<TgUser>);
      assertType<TgUser>(result);
      assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getMe");
      assertObjectMatch(lastReqInit!, { method: "POST" });
    });

    it("works with simple parameters", async () => {
      const result = await tgBot.getChat({ chat_id: 123 })
        .then(assertType<TgChat>);
      assertType<TgChat>(result);
      assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getChat?chat_id=123");
      assertObjectMatch(lastReqInit!, { method: "POST" });
    });

    it("works with complex parameters", async () => {
      const data = {
        chat_id: 123,
        text: "Hello, world!",
        reply_markup: { remove_keyboard: true },
      };
      const result = await tgBot.sendMessage(data).then(assertType<TgMessage>);
      assertType<TgMessage>(result);
      assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/sendMessage");
      assertObjectMatch(lastReqInit!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    });

    it("works with file parameters", async () => {
      const data = {
        chat_id: 123,
        photo: new Blob(),
        reply_markup: { remove_keyboard: true },
      };
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

    it("throws on error", async () => {
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

    it("rejects when cancelled with no parameters", async () => {
      reqDelay = 500;
      try {
        await tgBot.getMe({ signal: AbortSignal.timeout(100) });
        unreachable();
      } catch (error) {
        assertInstanceOf(error, DOMException);
        assertEquals(error.name, "TimeoutError");
      }
    });

    it("rejects when cancelled with simple parameters", async () => {
      reqDelay = 500;
      try {
        await tgBot.getChat({ chat_id: 123, signal: AbortSignal.timeout(100) });
        unreachable();
      } catch (error) {
        assertInstanceOf(error, DOMException);
        assertEquals(error.name, "TimeoutError");
      }
    });

    it("rejects when cancelled by middleware", async () => {
      const tgBotWithTimeout = initTgBot({
        ...botConfig,
        fetch: (url, init) =>
          fakeFetch(url, {
            ...init,
            signal: init.signal ?? AbortSignal.timeout(100),
          }),
      });
      reqDelay = 500;
      try {
        await tgBotWithTimeout.getChat({ chat_id: 123 });
        unreachable();
      } catch (error) {
        assertInstanceOf(error, DOMException);
        assertEquals(error.name, "TimeoutError");
      }
    });
  });

  describe("callApi", () => {
    it("works with no parameters", async () => {
      const result = await tgBot.callApi("getMe", {})
        .then(assertType<TgUser>);
      assertType<TgUser>(result);
      assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getMe");
      assertObjectMatch(lastReqInit!, { method: "POST" });
    });

    it("works with simple parameters", async () => {
      const result = await tgBot.callApi("getChat", { chat_id: 123 })
        .then(assertType<TgChat>);
      assertType<TgChat>(result);
      assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getChat?chat_id=123");
      assertObjectMatch(lastReqInit!, { method: "POST" });
    });

    it("works with complex parameters", async () => {
      const data = {
        chat_id: 123,
        text: "Hello, world!",
        reply_markup: { remove_keyboard: true },
      };
      const result = await tgBot.callApi("sendMessage", data)
        .then(assertType<TgMessage>);
      assertType<TgMessage>(result);
      assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/sendMessage");
      assertObjectMatch(lastReqInit!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    });

    it("works with file parameters", async () => {
      const data = {
        chat_id: 123,
        photo: new Blob(),
        reply_markup: { remove_keyboard: true },
      };
      const result = await tgBot.callApi("sendPhoto", data)
        .then(assertType<TgMessage>);
      assertType<TgMessage>(result);
      assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/sendPhoto");
      assertObjectMatch(lastReqInit!, { method: "POST" });
      assertInstanceOf(lastReqInit?.body, FormData);
      const formData = lastReqInit.body;
      assertEquals(formData.get("chat_id"), "123");
      assertEquals(formData.get("reply_markup"), JSON.stringify(data.reply_markup));
      assertInstanceOf(formData.get("photo"), Blob);
    });

    it("throws on error", async () => {
      try {
        reqShouldFail = true;
        await tgBot.callApi("getChat", { chat_id: 123 });
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

    it("rejects when cancelled with no parameters", async () => {
      reqDelay = 500;
      try {
        await tgBot.callApi("getMe", { signal: AbortSignal.timeout(100) });
        unreachable();
      } catch (error) {
        assertInstanceOf(error, DOMException);
        assertEquals(error.name, "TimeoutError");
      }
    });

    it("rejects when cancelled with simple parameters", async () => {
      reqDelay = 500;
      try {
        await tgBot.callApi("getChat", { chat_id: 123, signal: AbortSignal.timeout(100) });
        unreachable();
      } catch (error) {
        assertInstanceOf(error, DOMException);
        assertEquals(error.name, "TimeoutError");
      }
    });
  });

  describe("getFileData", () => {
    it("works", async () => {
      const result = await tgBot.getFileData("file_path_123")
        .then(assertType<Blob>);
      assertType<Blob>(result);
      assertEquals(lastReqUrl, "https://api.telegram.org/file/botTOKEN/file_path_123");
      assertObjectMatch(lastReqInit!, { method: "GET" });
    });

    it("throws on error", async () => {
      try {
        reqShouldFail = true;
        await tgBot.getFileData("file_path_123");
        unreachable();
      } catch (error) {
        assertInstanceOf(error, TgError);
        assertObjectMatch(error, {
          message: "Bad Request",
          code: 400,
        });
        assertEquals(lastReqUrl, "https://api.telegram.org/file/botTOKEN/file_path_123");
      }
    });

    it("rejects when cancelled", async () => {
      reqDelay = 500;
      try {
        await tgBot.getFileData("file_path_123", { signal: AbortSignal.timeout(100) });
        unreachable();
      } catch (error) {
        assertInstanceOf(error, DOMException);
        assertEquals(error.name, "TimeoutError");
      }
    });
  });

  describe("listUpdates", () => {
    it("works", async () => {
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

    it("throws on error", async () => {
      try {
        reqShouldFail = true;
        for await (const _update of tgBot.listUpdates({})) {
          unreachable();
        }
      } catch (error) {
        assertInstanceOf(error, TgError);
        assertObjectMatch(error, {
          message: "test error",
          code: 400,
        });
        assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getUpdates?offset=0");
      }
    });

    it("returns when cancelled by parameter", async () => {
      nextReqResult = [{ update_id: 1 }] satisfies TgUpdate[];
      reqDelay = 500;
      try {
        for await (const _update of tgBot.listUpdates({ signal: AbortSignal.timeout(100) })) {
          unreachable();
        }
      } catch {
        unreachable();
      }
    });

    it("continues when cancelled by middleware", async () => {
      const tgBotWithTimeout = initTgBot({
        ...botConfig,
        fetch: (url, init) =>
          fakeFetch(url, {
            ...init,
            signal: init.signal ?? AbortSignal.timeout(100),
          }),
      });
      nextReqResult = [{ update_id: 1 }] satisfies TgUpdate[];
      reqDelay = 150;
      const updates = tgBotWithTimeout.listUpdates({});
      const firstUpdatePromise = updates.next();
      await new Promise((resolve) => setTimeout(resolve, 300));
      assertEquals(await promiseState(firstUpdatePromise), "pending");
      reqDelay = 0;
      await new Promise((resolve) => setTimeout(resolve, 200));
      assertEquals(await promiseState(firstUpdatePromise), "fulfilled");
      const firstUpdate = await firstUpdatePromise.then(assertType<IteratorResult<TgUpdate, void>>);
      assert(!firstUpdate.done);
      assertType<TgUpdate>(firstUpdate.value);
      assertEquals(firstUpdate.value.update_id, 1);
    });
  });
});

describe("getTgFileData", () => {
  it("works", async () => {
    const result = await getTgFileData(botConfig, "file_path_123")
      .then(assertType<Blob>);
    assertType<Blob>(result);
    assertEquals(lastReqUrl, "https://api.telegram.org/file/botTOKEN/file_path_123");
    assertObjectMatch(lastReqInit!, { method: "GET" });
  });

  it("works with tgBot options", async () => {
    const tgBot = new TgBot(botConfig);
    const result = await getTgFileData(tgBot.config, "file_path_123")
      .then(assertType<Blob>);
    assertType<Blob>(result);
    assertEquals(lastReqUrl, "https://api.telegram.org/file/botTOKEN/file_path_123");
    assertObjectMatch(lastReqInit!, { method: "GET" });
  });

  it("throws on error", async () => {
    try {
      reqShouldFail = true;
      await getTgFileData(botConfig, "file_path_123");
      unreachable();
    } catch (error) {
      assertInstanceOf(error, TgError);
      assertObjectMatch(error, {
        message: "Bad Request",
        code: 400,
      });
      assertEquals(lastReqUrl, "https://api.telegram.org/file/botTOKEN/file_path_123");
    }
  });

  it("rejects when cancelled", async () => {
    reqDelay = 500;
    try {
      await getTgFileData(botConfig, "file_path_123", { signal: AbortSignal.timeout(100) });
      unreachable();
    } catch (error) {
      assertInstanceOf(error, DOMException);
      assertEquals(error.name, "TimeoutError");
    }
  });
});

describe("listTgUpdates", () => {
  it("works", async () => {
    nextReqResult = [{ update_id: 1 }] satisfies TgUpdate[];
    const updates = listTgUpdates(botConfig, {});
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

  it("throws on error", async () => {
    try {
      reqShouldFail = true;
      for await (const _update of listTgUpdates(botConfig, {})) {
        unreachable();
      }
    } catch (error) {
      assertInstanceOf(error, TgError);
      assertObjectMatch(error, {
        message: "test error",
        code: 400,
      });
      assertEquals(lastReqUrl, "https://api.telegram.org/botTOKEN/getUpdates?offset=0");
    }
  });

  it("returns when cancelled by parameter", async () => {
    nextReqResult = [{ update_id: 1 }] satisfies TgUpdate[];
    reqDelay = 500;
    try {
      for await (
        const _update of listTgUpdates(botConfig, {}, { signal: AbortSignal.timeout(100) })
      ) {
        unreachable();
      }
    } catch {
      unreachable();
    }
  });

  it("continues when cancelled by middleware", async () => {
    const botConfigWithTimeout: TgBotConfig = {
      ...botConfig,
      fetch: (url, init) =>
        fakeFetch(url, {
          ...init,
          signal: init.signal ?? AbortSignal.timeout(100),
        }),
    };
    nextReqResult = [{ update_id: 1 }] satisfies TgUpdate[];
    reqDelay = 150;
    const updates = listTgUpdates(botConfigWithTimeout, {});
    const firstUpdatePromise = updates.next();
    await new Promise((resolve) => setTimeout(resolve, 300));
    assertEquals(await promiseState(firstUpdatePromise), "pending");
    reqDelay = 0;
    await new Promise((resolve) => setTimeout(resolve, 200));
    assertEquals(await promiseState(firstUpdatePromise), "fulfilled");
    const firstUpdate = await firstUpdatePromise.then(assertType<IteratorResult<TgUpdate, void>>);
    assert(!firstUpdate.done);
    assertType<TgUpdate>(firstUpdate.value);
    assertEquals(firstUpdate.value.update_id, 1);
  });

  it("continues when received 429 error", async () => {
    const updates = listTgUpdates(botConfig, {});
    reqShouldFail = true;
    nextReqErrorStatus = 429;
    nextReqErrorStatusText = "Too Many Requests";
    nextReqErrorParams = { retry_after: 1 };
    const firstUpdatePromise = updates.next();
    await new Promise((resolve) => setTimeout(resolve, 900));
    assertEquals(await promiseState(firstUpdatePromise), "pending");
    await new Promise((resolve) => setTimeout(resolve, 900));
    assertEquals(await promiseState(firstUpdatePromise), "pending");
    reqShouldFail = false;
    nextReqResult = [{ update_id: 1 }] satisfies TgUpdate[];
    await new Promise((resolve) => setTimeout(resolve, 900));
    assertEquals(await promiseState(firstUpdatePromise), "fulfilled");
    const firstUpdate = await firstUpdatePromise.then(assertType<IteratorResult<TgUpdate, void>>);
    assert(!firstUpdate.done);
    assertType<TgUpdate>(firstUpdate.value);
    assertEquals(firstUpdate.value.update_id, 1);
  });
});
