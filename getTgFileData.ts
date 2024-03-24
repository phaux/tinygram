import { TgApiOptions } from "./TgApiOptions.ts";
import { TG_API_URL } from "./TG_API_URL.ts";
import { TgBotConfig } from "./TgBotConfig.ts";
import { TgError } from "./TgError.ts";

/**
 * Fetches the contents of a file that you get from {@link TgApi.getFile}.
 *
 * This is just a simple wrapper over {@link fetch}.
 *
 * @throws {TgError} if the response is not OK.
 */
export async function getTgFileData(
  config: TgBotConfig,
  filePath: string,
  options?: TgApiOptions,
) {
  const url = new URL(
    `./file/bot${config.botToken}/${filePath}`,
    config.apiUrl ?? TG_API_URL,
  );
  const localFetch = config.fetch ?? globalThis.fetch;
  const response = await localFetch(url.href, {
    method: "GET",
    signal: options?.signal,
  });
  if (!response.ok) throw new TgError(response.statusText, response.status);
  const blob = await response.blob();
  return blob;
}
