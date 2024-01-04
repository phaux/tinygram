import { TgApi, TgGetUpdatesParams, TgResponseParameters } from "./api.ts";

export const TG_API_URL = "https://api.telegram.org/";

/**
 * {@link TgBot} options.
 */
export interface TgBotOptions {
  /**
   * Telegram Bot token.
   *
   * Talk to [BotFather](https://t.me/BotFather) to generate one.
   */
  botToken: string;

  /**
   * Telegram Bot API URL.
   *
   * Set this if you're hosting your own bot API server.
   *
   * Default: https://api.telegram.org
   */
  apiUrl?: string;

  /**
   * Use custom {@link fetch} function instead of the global one.
   *
   * Useful for testing or if your environment doesn't support fetch.
   */
  fetch?: (
    url: string,
    init: {
      method: "GET" | "POST";
      headers?: { "Content-Type"?: "application/json" };
      body?: string | FormData;
    },
  ) => Promise<{
    ok: boolean;
    status: number;
    statusText: string;
    json: () => Promise<unknown>;
    blob: () => Promise<Blob>;
  }>;

  /**
   * Use custom {@link FormData} class instead of the global one.
   *
   * This is only used in methods that send {@link File} or {@link Blob}.
   *
   * Useful for testing or if your environment doesn't support FormData.
   */
  FormData?: typeof FormData;
}

/**
 * Returns a {@link TgBot} wrapped in a {@link Proxy} which allows to call methods from {@link TgApi} directly.
 */
export function initTgBot(options: TgBotOptions): TgBot & TgApi {
  return new Proxy<TgBot>(new TgBot(options), {
    get(target, prop) {
      if (prop in target) return (target as any)[prop];
      return (params: unknown) => callTgApi(target.options, prop as keyof TgApi, params as never);
    },
  }) as TgBot & TgApi;
}

/**
 * Wraps {@link callTgApi} and other functions into a single easy-to-use class.
 */
export class TgBot {
  constructor(public options: TgBotOptions) {}

  /**
   * Calls a method from the {@link TgApi}.
   *
   * Calls {@link callTgApi} internally.
   */
  callApi<M extends keyof TgApi>(
    method: M,
    ...params: Parameters<TgApi[M]>
  ): Promise<Awaited<ReturnType<TgApi[M]>>> {
    return callTgApi(this.options, method, ...params);
  }

  /**
   * Returns an iterator over updates from the Telegram Bot API.
   *
   * Calls {@link listTgUpdates} internally.
   */
  async *listUpdates(params: TgGetUpdatesParams) {
    yield* listTgUpdates(this.options, { ...params });
  }

  /**
   * Fetches the contents of a file that you get from {@link TgApi.getFile}.
   *
   * Calls {@link getTgFileData} internally.
   */
  getFileData(filePath: string): Promise<Blob> {
    return getTgFileData(this.options, filePath);
  }
}

/**
 * Calls a Telegram Bot API method.
 *
 * This is just a simple wrapper over {@link fetch}.
 */
export async function callTgApi<M extends keyof TgApi>(
  options: TgBotOptions,
  method: M,
  ...[params]: Parameters<TgApi[M]>
): Promise<Awaited<ReturnType<TgApi[M]>>> {
  const url = new URL(
    `./bot${options.botToken}/${method}`,
    options.apiUrl ?? TG_API_URL,
  );
  let body, headers;
  if (params != null && typeof params == "object") {
    // If params contains a File or Blob, send it as multipart/form-data.
    if (
      Object.values(params).some(
        (v) =>
          v != null &&
          typeof v == "object" &&
          typeof (v as Blob).arrayBuffer == "function",
      )
    ) {
      const FormData = options.FormData ?? globalThis.FormData;
      body = new FormData();
      for (const [key, value] of Object.entries(params)) {
        if (typeof value == "string" || typeof value == "number") {
          body.set(key, String(value));
        } else if (
          value != null &&
          typeof value == "object" &&
          typeof (value as Blob).arrayBuffer == "function"
        ) {
          body.set(key, value as Blob);
        } else if (value != null && value !== false) {
          body.set(key, JSON.stringify(value));
        }
      }
    } // If params contains only strings or numbers, send it in query string.
    else if (
      Object.values(params).every(
        (v) =>
          typeof v == "string" ||
          typeof v == "number" ||
          typeof v == "boolean" ||
          v == null,
      )
    ) {
      for (const [key, value] of Object.entries(params)) {
        if (value != null && value !== false) {
          url.searchParams.set(key, String(value));
        }
      }
    } // Otherwise, send params as JSON.
    else {
      headers = { "Content-Type": "application/json" } as const;
      body = JSON.stringify(params);
    }
  }

  const localFetch = options.fetch ?? globalThis.fetch;
  const response = await localFetch(url.href, { method: "POST", headers, body });
  const data = await response.json().catch(() => null);
  if (data?.ok === true) return data.result;
  if (data?.ok === false) throw new TgError(data.description, data.error_code, data.parameters);
  if (!response.ok) throw new TgError(response.statusText, response.status);
  throw new TgError("Invalid response", response.status);
}

/**
 * Returns an iterator over updates from the Telegram Bot API.
 *
 * This is just a simple wrapper over calling {@link TgApi.getUpdates} repeatedly.
 */
export async function* listTgUpdates(options: TgBotOptions, params: TgGetUpdatesParams) {
  let offset = params.offset ?? 0;
  while (true) {
    const updates = await callTgApi(options, "getUpdates", { ...params, offset });
    offset = Math.max(offset, ...updates.map((u) => u.update_id + 1));
    yield* updates;
  }
}

/**
 * Fetches the contents of a file that you get from {@link TgBot.getFile}.
 *
 * This is just a simple wrapper over {@link fetch}.
 */
export async function getTgFileData(
  options: TgBotOptions,
  filePath: string,
) {
  const url = new URL(
    `./file/bot${options.botToken}/${filePath}`,
    options.apiUrl ?? TG_API_URL,
  );
  const localFetch = options.fetch ?? globalThis.fetch;
  const response = await localFetch(url.href, {
    method: "GET",
    mode: "no-cors",
    credentials: "omit",
  });
  if (!response.ok) throw new TgError(response.statusText, response.status);
  const blob = await response.blob();
  return blob;
}

/**
 * Error returned from the Telegram Bot API.
 *
 * Contains the error code and the description.
 */
export class TgError extends Error {
  constructor(message: string, public code: number, public parameters?: TgResponseParameters) {
    super(message);
  }
}

export * from "./api.ts";
