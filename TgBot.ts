import type { TgApi, TgGetUpdatesParams, TgUpdate } from "./TgApi.ts";
import { getTgFileData } from "./getTgFileData.ts";
import { listTgUpdates } from "./listTgUpdates.ts";
import { callTgApi } from "./callTgApi.ts";
import type { TgApiOptions } from "./TgApiOptions.ts";
import type { TgBotConfig } from "./TgBotConfig.ts";

/**
 * Wraps {@link callTgApi} and other functions into a single easy-to-use class.
 *
 * @example Getting bot's information.
 *
 * ```ts
 * import { TgBot } from "./mod.ts";
 *
 * const bot = new TgBot({ botToken: "YOUR_TOKEN" });
 *
 * const botUser = await bot.callApi("getMe", {});
 * console.log(botUser.is_bot); // true
 * ```
 */
export class TgBot {
  constructor(public config: TgBotConfig) {}

  /**
   * Calls a method from the {@link TgApi}.
   *
   * Calls {@link callTgApi} internally.
   *
   * @throws {TgError} if the response is not OK.
   *
   * @example Setting bot's name.
   *
   * ```ts
   * import { TgBot } from "./mod.ts";
   *
   * const bot = new TgBot({ botToken: "YOUR_TOKEN" });
   *
   * await bot.callApi("setMyName", { name: "My Bot" });
   *
   * const botUser = await bot.callApi("getMe", {});
   * console.log(botUser.first_name); // "My Bot"
   * ```
   */
  callApi<M extends keyof TgApi>(
    method: M,
    options: Omit<Parameters<TgApi[M]>[0], keyof TgApiOptions> & TgApiOptions,
  ): Promise<Awaited<ReturnType<TgApi[M]>>> {
    const { signal, ...params } = options;
    return callTgApi(this.config, method, params, { signal });
  }

  /**
   * Returns an iterator over updates from the Telegram Bot API.
   *
   * Calls {@link listTgUpdates} internally.
   *
   * Exits normally when the passed signal is aborted.
   *
   * If a request fails with {@link TgError.code} == 429 (Too Many Requests) or {@link DOMException.name} == "TimeoutError",
   * it will be retried automatically.
   *
   * @throws {TgError} if the response is not OK.
   *
   * @example Logging all incoming messages.
   *
   * ```ts
   * import { TgBot } from "./mod.ts";
   *
   * const bot = new TgBot({ botToken: "YOUR_TOKEN" });
   *
   * for await (const update of bot.listUpdates({})) {
   *   if (update.message) {
   *     console.log(update.message.text);
   *   }
   * }
   * ```
   */
  async *listUpdates(
    options: TgGetUpdatesParams & TgApiOptions,
  ): AsyncGenerator<TgUpdate, void, undefined> {
    const { signal, ...params } = options;
    yield* listTgUpdates(this.config, params, { signal });
  }

  /**
   * Fetches the contents of a file that you get from {@link TgApi.getFile}.
   *
   * Calls {@link getTgFileData} internally.
   *
   * @throws {TgError} if the response is not OK.
   *
   * @example Downloading bot's profile photo.
   *
   * ```ts
   * import { TgBot } from "./mod.ts";
   *
   * const bot = new TgBot({ botToken: "YOUR_TOKEN" });
   *
   * const botUser = await bot.callApi("getMe", {});
   *
   * const botPhoto = await bot.callApi("getUserProfilePhotos", { user_id: botUser.id });
   * const botPhotoFileId = botPhoto.photos[0]?.[0]?.file_id;
   * if (botPhotoFileId == null) throw new Error("No profile photo");
   *
   * const botPhotoFile = await bot.callApi("getFile", { file_id: botPhotoFileId });
   * if (botPhotoFile.file_path == null) throw new Error("Photo file unavailable");
   *
   * const botPhotoBlob = await bot.getFileData(botPhotoFile.file_path);
   * console.log(botPhotoBlob.size);
   * ```
   */
  getFileData(filePath: string, options?: TgApiOptions): Promise<Blob> {
    return getTgFileData(this.config, filePath, options);
  }
}
