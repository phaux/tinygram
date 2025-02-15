/**
 * Main Telegram Bot API client module.
 *
 * To begin, initialize your bot with {@link initTgBot}.
 *
 * @example Reply to private commands.
 *
 * ```ts
 * const bot = initTgBot({ botToken: "YOUR_TOKEN" });
 *
 * for await (const update of bot.listUpdates()) {
 *   if (update.message) {
 *     const { chat, text, message_id, from } = update.message;
 *
 *     if (chat.type === "private" && text?.startsWith("/start")) {
 *       await bot.sendMessage({
 *         chat_id: chat.id,
 *         reply_parameters: { message_id },
 *         text: `Hello, ${from?.first_name}!`
 *       });
 *     }
 *   }
 * }
 * ```
 *
 * @example Say hello when added to a group.
 *
 * ```ts
 * const bot = initTgBot({ botToken: "YOUR_TOKEN" });
 *
 * for await (const update of bot.listUpdates()) {
 *   if (update.my_chat_member) {
 *     const { chat, new_chat_member } = update.my_chat_member;
 *     if (
 *       (chat.type === "group" || chat.type === "supergroup") &&
 *       (new_chat_member.status === "member" || new_chat_member.status === "administrator")
 *     ) {
 *       await bot.sendMessage({ chat_id: chat.id, text: "Hello, everyone!" });
 *     }
 *   }
 * }
 * ```
 *
 * @example Download and show/save bot's profile photo.
 *
 * ```ts
 * /// <reference lib="dom" />
 * import { writeFile } from "node:fs/promises"
 *
 * const bot = initTgBot({ botToken: "YOUR_TOKEN" });
 *
 * // Download bot's profile photo
 * const botUser = await bot.getMe();
 *
 * const botPhoto = await bot.getUserProfilePhotos({ user_id: botUser.id });
 * const botPhotoFileId = botPhoto.photos[0]?.[0]?.file_id;
 * if (botPhotoFileId == null) throw new Error("No profile photo");
 *
 * const botPhotoFile = await bot.getFile({ file_id: botPhotoFileId });
 * if (botPhotoFile.file_path == null) throw new Error("Photo file unavailable");
 *
 * const botPhotoBlob = await bot.getFileData(botPhotoFile.file_path);
 *
 * // Save to file
 * await writeFile("bot.jpg", botPhotoBlob.stream());
 *
 * // Set as img src
 * const img = document.createElement("img");
 * img.src = URL.createObjectURL(botPhotoBlob);
 * ```
 *
 * @module
 */

import { initTgBot } from "./initTgBot.ts";

export { TG_API_URL } from "./TG_API_URL.ts";
export * from "./TgApi.ts";
export { type TgApiOptions } from "./TgApiOptions.ts";
export { TgBot } from "./TgBot.ts";
export { type TgBotConfig } from "./TgBotConfig.ts";
export { TgError } from "./TgError.ts";
export { callTgApi } from "./callTgApi.ts";
export { getTgFileData } from "./getTgFileData.ts";
export { listTgUpdates } from "./listTgUpdates.ts";

export { initTgBot };
