import { TgGetUpdatesParams } from "./TgApi.ts";
import { callTgApi } from "./callTgApi.ts";
import { TgApiOptions } from "./TgApiOptions.ts";
import { TgBotConfig } from "./TgBotConfig.ts";
import { TgError } from "./TgError.ts";

/**
 * Returns an iterator over updates from the Telegram Bot API.
 *
 * This is just a simple wrapper over calling {@link TgApi.getUpdates} repeatedly.
 *
 * Exits normally when the passed signal is aborted.
 *
 * If a request fails with {@link TgError.code} == 429 (Too Many Requests) or {@link DOMException.name} == "TimeoutError",
 * it will be retried automatically.
 *
 * @throws {TgError} if the response is not OK.
 */
export async function* listTgUpdates(
  config: TgBotConfig,
  params: TgGetUpdatesParams,
  options?: TgApiOptions,
) {
  let offset = params.offset ?? 0;
  while (true) {
    try {
      const updates = await callTgApi(config, "getUpdates", { ...params, offset }, options);
      offset = Math.max(offset, ...updates.map((u) => u.update_id + 1));
      yield* updates;
    } catch (error) {
      if (options?.signal?.aborted) break;
      if (error instanceof DOMException && error.name == "TimeoutError") continue;
      if (error instanceof TgError && error.code == 429) {
        const wait = error.parameters?.retry_after ?? 1;
        await new Promise((resolve) => setTimeout(resolve, wait * 1000));
        continue;
      }
      throw error;
    }
  }
}
