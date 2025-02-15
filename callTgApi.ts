import { TG_API_URL } from "./TG_API_URL.ts";
import type { TgApiOptions } from "./TgApiOptions.ts";
import type { TgBotConfig } from "./TgBotConfig.ts";
import { TgError } from "./TgError.ts";
import type { TgApi } from "./TgApi.ts";

/**
 * Calls a Telegram Bot API method.
 *
 * This is just a simple wrapper over {@link fetch}.
 *
 * @throws {TgError} if the response is not OK.
 *
 * @example Setting bot's name.
 *
 * ```ts
 * const botToken = "YOUR_TOKEN";
 *
 * await callTgApi({ botToken }, "setMyName", { name: "My Bot" });
 *
 * const botUser = await callTgApi({ botToken }, "getMe", undefined);
 * console.log(botUser.first_name); // "My Bot"
 * ```
 */
export async function callTgApi<M extends keyof TgApi>(
  config: TgBotConfig,
  method: M,
  ...[params, options]: Parameters<TgApi<TgApiOptions>[M]>
): Promise<Awaited<ReturnType<TgApi[M]>>> {
  const baseUrl = new URL(
    `./bot${config.botToken}/${method}`,
    config.apiUrl ?? TG_API_URL,
  );
  const { url, ...init } = prepareTgRequest(config, baseUrl, params, options);
  const localFetch = config.fetch ?? globalThis.fetch;
  const response = await localFetch(url.href, { method: "POST", ...init });
  const data = await response.json().catch(() => null);
  if (data?.ok === true) return data.result;
  if (data?.ok === false) throw new TgError(data.description, data.error_code, data.parameters);
  if (!response.ok) throw new TgError(response.statusText, response.status);
  throw new TgError("Invalid response", response.status);
}

function prepareTgRequest(
  config: TgBotConfig,
  url: URL,
  params: Record<string, unknown> | null | undefined,
  options?: TgApiOptions,
) {
  const signal = options?.signal ?? null;
  // Params are empty?
  if (params == null || Object.keys(params).length === 0) {
    // Send an empty request.
    return { url, signal };
  }

  // Params are simple values?
  if (
    Object.values(params).every(
      (v) =>
        typeof v == "string" ||
        typeof v == "number" ||
        typeof v == "boolean" ||
        v == null,
    )
  ) {
    // Send params in query string.
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value != null && value !== false) {
        searchParams.set(key, String(value));
      }
    }
    return { url: new URL(`?${searchParams}`, url.href), signal };
  }

  // Params contain a Blob?
  if (
    Object.values(params).some(
      (v) =>
        v != null &&
        typeof v == "object" &&
        typeof (v as Blob).arrayBuffer == "function",
    )
  ) {
    // Send params as FormData.
    return { url, body: jsonToFormData(config, params), signal };
  }

  const { blobs, json } = extractBlobsFromJson(params);

  // There wasn't any deeply nested blobs?
  if (blobs.size === 0) {
    // Send params as JSON.
    return {
      url,
      headers: { "Content-Type": "application/json" as const },
      body: JSON.stringify(json),
      signal,
    };
  }

  // Send params as FormData, with blobs moved to the top level.
  // See for example: https://core.telegram.org/bots/api#inputmediaphoto
  for (const [key, blob] of blobs) {
    json[key] = blob;
  }

  return { url, body: jsonToFormData(config, json), signal };
}

function jsonToFormData(config: TgBotConfig, json: Record<string, unknown>) {
  const LocalFormData = config.FormData ?? globalThis.FormData;
  const formData = new LocalFormData();
  for (const [key, value] of Object.entries(json)) {
    if (typeof value == "string" || typeof value == "number") {
      // Send strings and numbers as strings.
      formData.set(key, String(value));
    } else if (
      value != null &&
      typeof value == "object" &&
      typeof (value as Blob).arrayBuffer == "function"
    ) {
      // Send Blobs as Blobs.
      formData.set(key, value as Blob);
    } else if (value != null && value !== false) {
      // Send everything else as a JSON string.
      formData.set(key, JSON.stringify(value));
    }
  }
  return formData;
}

function extractBlobsFromJson(value: unknown) {
  const blobs = new Map<string, Blob>();
  let blobIndex = 0;
  const json = JSON.parse(JSON.stringify(value, (_key, value) => {
    if (
      value != null &&
      typeof value == "object" &&
      typeof (value as Blob).arrayBuffer == "function"
    ) {
      const blobKey = `blob${blobIndex++}`;
      blobs.set(blobKey, value as Blob);
      return `attach://${blobKey}`;
    }
    return value;
  }));
  return { blobs, json };
}
