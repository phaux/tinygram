# Tg Bot Client

[![deno doc](https://doc.deno.land/badge.svg)](https://deno.land/x/tg-bot-client/mod.ts?s=initTgBot)
[![npm](https://img.shields.io/npm/v/tg-bot-client)](https://www.npmjs.com/package/tg-bot-client)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/tg-bot-client)](https://bundlephobia.com/package/tg-bot-client)
[![changelog](https://img.shields.io/badge/changelog-grey)](./CHANGELOG.md)

Tiny Telegram Bot API client library with TypeScript types.

Automatically generated from [telegram-bot-api-spec](https://github.com/PaulSonOfLars/telegram-bot-api-spec).

## Usage

Import in Node.js:

```js
import { initTgBot } from "tg-bot-client";
```

Import in Deno:

```js
import { initTgBot } from "https://deno.land/x/tg-bot-client/mod.ts";
```

Initialize the bot:

```js
const botToken = "YOUR_BOT_TOKEN";
const tgBot = initTgBot({ botToken });
```

Call the API:

```js
const botUser = await tgBot.getMe();
console.log(botUser.username);
```

Get updates:

```js
for await (const update of tgBot.listUpdates({ timeout: 10 })) {
  console.log(update);
}
```

Download a file:

```js
const botUser = await tgBot.getMe();
const botPhoto = await tgBot.getUserProfilePhotos({ user_id: botUser.id });
const botPhotoFileId = botPhoto.photos[0]?.[0]?.file_id;
const botPhotoFile = await tgBot.getFile({ file_id: botPhotoFileId });
const botPhotoBlob = await tgBot.getFileData(botPhotoFile.file_path);

// Save to file
await writeFile("bot.jpg", botPhotoBlob.stream());
// Set as img src
img.src = URL.createObjectURL(botPhotoBlob);
```

Example - Echo bot:

```js
for await (const update of tgBot.listUpdates({ timeout: 10 })) {
  if (update.message) {
    const message = update.message;
    if (message.chat.type === "private" && message.text) {
      console.log(`Received message from ${message.from.first_name}: ${message.text}`);
      await tgBot.sendMessage({ chat_id: message.chat.id, text: message.text });
    }
  }
}
```

Auto-abort all requests after a timeout:

```js
const tgBot = initTgBot({
  botToken: "YOUR_BOT_TOKEN",
  fetch: (url, init) => fetch(url, { ...init, signal: AbortSignal.timeout(10_000) }),
});
```

Auto-retry rate-limited requests:

```js
const tgBot = initTgBot({
  botToken: "YOUR_BOT_TOKEN",
  fetch: async (url, init) => {
    let attempts = 0;
    while (true) {
      attempts++;
      const response = await fetch(url, init);
      if (attempts < 3 && response.status === 429) {
        const error = await response.json();
        await new Promise((resolve) => setTimeout(resolve, error.parameters.retry_after * 1000));
        continue;
      }
      return response;
    }
  },
});
```

## FAQ

### fetch is not a function

If you're using Node.js without [fetch](https://nodejs.org/dist/latest/docs/api/globals.html#fetch) support, you need to polyfill it or pass a custom fetch as an argument.

```js
import fetch from "node-fetch";

const tgBot = initTgBot({ token: "YOUR_BOT_TOKEN", fetch });
```

If you're sending files, you need [FormData](https://nodejs.org/dist/latest/docs/api/globals.html#class-formdata) too.

```js
import fetch, { FormData } from "node-fetch";

const tgBot = initTgBot({ token: "YOUR_BOT_TOKEN", fetch, FormData });
```

### Must use import to load ES Module

The library is only available as a module.
If you're using CommonJS, you must import it using [dynamic import](https://nodejs.org/dist/latest/docs/api/esm.html#import-expressions):

```js
const { initTgBot } = await import("tg-bot-client");
```

### Proxy is not defined

This library requires [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) support, because the bot instance is actually a proxy.
