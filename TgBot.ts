import { TgApi, TgGetUpdatesParams } from "./TgApi.ts";
import { getTgFileData } from "./getTgFileData.ts";
import { listTgUpdates } from "./listTgUpdates.ts";
import { callTgApi } from "./callTgApi.ts";
import { TgApiOptions } from "./TgApiOptions.ts";
import { TgBotConfig } from "./TgBotConfig.ts";

/**
 * Wraps {@link callTgApi} and other functions into a single easy-to-use class.
 */
export class TgBot {
  constructor(public config: TgBotConfig) {}

  /**
   * Calls a method from the {@link TgApi}.
   *
   * Calls {@link callTgApi} internally.
   *
   * @throws {TgError} if the response is not OK.
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
   */
  async *listUpdates(options: TgGetUpdatesParams & TgApiOptions) {
    const { signal, ...params } = options;
    yield* listTgUpdates(this.config, params, { signal });
  }

  /**
   * Fetches the contents of a file that you get from {@link TgApi.getFile}.
   *
   * Calls {@link getTgFileData} internally.
   *
   * @throws {TgError} if the response is not OK.
   */
  getFileData(filePath: string, options?: TgApiOptions): Promise<Blob> {
    return getTgFileData(this.config, filePath, options);
  }
}
