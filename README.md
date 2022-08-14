# Tg Bot Client

Tiny Telegram bot API client library ([100 LOC](https://bundlephobia.com/package/tg-bot-client)) with TypeScript types.
Automatically generated from [telegram-bot-api-spec](https://github.com/PaulSonOfLars/telegram-bot-api-spec).

## Usage

Initialize bot instance with `initTgBot` function and call the [bot methods](https://core.telegram.org/bots/api#available-methods) like regular methods.

```js
import { initTgBot } from "tg-bot-client";

const bot = initTgBot({ token: "YOUR_BOT_TOKEN" });

const me = await bot.getMe();
console.log(me.username);

const chat = await bot.getChat({ chat_id: "@durov" });
console.log(chat.title);
```

You can also initialize the bot everytime you call a method (it doesn't matter).

```js
import { initTgBot } from "tg-bot-client";

const token = "YOUR_BOT_TOKEN";

const me = await initTgBot({ token }).getMe();
console.log(me.username);

const chat = await initTgBot({ token }).getChat({ chat_id: "@durov" });
console.log(chat.title);
```

TypeScript types are available too.

```ts
import { initTgBot } from "tg-bot-client";
import type { TgBot, TgChat, TgGetChatParams, TgUser } from "tg-bot-client";

const bot: TgBot = initTgBot({ token: "YOUR_BOT_TOKEN" });

const me: TgUser = await bot.getMe();
console.log(me.username);

const params: TgGetChatParams = { chatId: "@durov" };
const chat: TgChat = await bot.getChat(params);
console.log(chat.title);
```

To get updates, use the [`getUpdates`](https://core.telegram.org/bots/api#getupdates) method in a loop.

```js
import { initTgBot } from "tg-bot-client";

const bot = initTgBot({ token: "YOUR_BOT_TOKEN" });

// Get all updates in a loop
let offset = 0;
while (true) {
  const updates = await bot.getUpdates({ offset, timeout: 30 });

  for (const update of updates) {
    // Update offset
    offset = Math.max(offset, update.update_id + 1);

    // Handle update here
  }
}
```

To download a file from the Telegram server you can use a special `downloadFile` method.

```js
import { writeFile } from "fs/promises";
import { initTgBot } from "tg-bot-client";

const bot = initTgBot({ token: "YOUR_BOT_TOKEN" });

// Get bot photo
const botUser = await bot.getMe();
const botPhoto = await bot.getUserProfilePhotos({ user_id: botUser.id });
const botPhotoFileId = botPhoto.photos[0]?.[0]?.file_id;
const botPhotoFile = await bot.getFile({ file_id: botPhotoFileId });
const botPhotoBlob = await bot.downloadFile(botPhotoFile.file_path);

// Save bot photo locally
await writeFile("bot.jpg", botPhotoBlob.stream());
```

## Examples

### Echo bot

```js
import { initTgBot } from "tg-bot-client";

const bot = initTgBot({ token: process.env.TG_BOT_TOKEN });

// Get all updates in a loop
let offset = 0;
while (true) {
  const updates = await bot.getUpdates({ offset, timeout: 30 });

  for (const update of updates) {
    // Update offset
    offset = Math.max(offset, update.update_id + 1);

    // Handle update about new message
    if (update.message) {
      const message = update.message;

      // Handle new private message
      if (message.chat.type === "private") {
        const username = message.from?.first_name ?? message.from?.username;
        console.log(`Received message from ${username}: ${message.text}`);

        // Only reply if message contains text
        if (message.text) {
          // Send reply
          await bot.sendMessage({
            chat_id: message.chat.id,
            text: message.text,
          });
        }
      }
    }
  }
}
```

## FAQ

### fetch is not a function

If you're using Node.js without [fetch](https://nodejs.org/dist/latest/docs/api/globals.html#fetch) support, you need to polyfill it or pass a custom fetch as an argument.

```js
import fetch from "node-fetch";

const bot = initTgBot({ token: "YOUR_BOT_TOKEN", fetch });
```

If you're sending files, you need [FormData](https://nodejs.org/dist/latest/docs/api/globals.html#class-formdata) too.

```js
import fetch, { FormData } from "node-fetch";

const bot = initTgBot({ token: "YOUR_BOT_TOKEN", fetch, FormData });
```

### Must use import to load ES Module

The library is only available as a module. If you're using CommonJS, you must import it using [dynamic import](https://nodejs.org/dist/latest/docs/api/esm.html#import-expressions):

```js
const { initTgBot } = await import("tg-bot-client");
```

### Proxy is not defined

This library requires [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) support, because the bot instance is actually a proxy.

## Developing

Run `npm run generate` to fetch current JSON API spec from [telegram-bot-api-spec](https://github.com/PaulSonOfLars/telegram-bot-api-spec) and generate TypeScript sources in `src/`.

Then run `npm run prepare` to build the sources and output JS module and typings to `dist/`.

Run `npm test` to typecheck the generator script.
