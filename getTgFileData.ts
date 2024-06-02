import type { TgApiOptions } from "./TgApiOptions.ts";
import { TG_API_URL } from "./TG_API_URL.ts";
import type { TgBotConfig } from "./TgBotConfig.ts";
import { TgError } from "./TgError.ts";

/**
 * Fetches the contents of a file that you get from {@link TgApi.getFile}.
 *
 * This is just a simple wrapper over {@link fetch}.
 *
 * @throws {TgError} if the response is not OK.
 *
 * @example Downloading bot's profile photo.
 *
 * ```ts
 * import { callTgApi, getTgFileData } from "./mod.ts";
 *
 * const botToken = "YOUR_TOKEN";
 *
 * const botUser = await callTgApi({ botToken }, "getMe", undefined);
 *
 * const botPhoto = await callTgApi(
 *   { botToken },
 *   "getUserProfilePhotos",
 *   { user_id: botUser.id }
 * );
 * const botPhotoFileId = botPhoto.photos[0]?.[0]?.file_id;
 * if (botPhotoFileId == null) throw new Error("No profile photo");
 *
 * const botPhotoFile = await callTgApi(
 *   { botToken },
 *   "getFile",
 *   { file_id: botPhotoFileId }
 * );
 * if (botPhotoFile.file_path == null) throw new Error("Photo file unavailable");
 *
 * const botPhotoBlob = await getTgFileData({ botToken }, botPhotoFile.file_path);
 * console.log(botPhotoBlob.size);
 * ```
 */
export async function getTgFileData(
  config: TgBotConfig,
  filePath: string,
  options?: TgApiOptions,
): Promise<Blob> {
  const url = new URL(
    `./file/bot${config.botToken}/${filePath}`,
    config.apiUrl ?? TG_API_URL,
  );
  const localFetch = config.fetch ?? globalThis.fetch;
  const response = await localFetch(url.href, {
    method: "GET",
    signal: options?.signal ?? null,
  });
  if (!response.ok) throw new TgError(response.statusText, response.status);
  const blob = await response.blob();
  return blob;
}
