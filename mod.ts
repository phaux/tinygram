import { TgApi, TgGetUpdatesParams, TgResponseParameters } from "./api.ts";

export const TG_API_URL = "https://api.telegram.org/";

/**
 * {@link TgBot} config.
 */
export interface TgBotConfig {
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
   * Useful for:
   * - testing, so no real requests are sent.
   * - if your environment doesn't support fetch.
   * - if you want to use a different HTTP client.
   * - adding logging to requests.
   * - adding custom headers to requests if you host your own bot API server.
   * - automatically passing a timeout signal to every request.
   * - automatically retrying all requests on 429 (Too Many Requests) errors.
   */
  fetch?: (
    url: string,
    init: {
      method: "GET" | "POST";
      headers?: { "Content-Type"?: "application/json" };
      body?: string | FormData;
      signal?: AbortSignal;
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
export function initTgBot(config: TgBotConfig): TgBot & TgBotApi {
  return new Proxy<TgBot>(new TgBot(config), {
    get(target, prop) {
      // deno-lint-ignore no-explicit-any
      if (prop in target) return (target as any)[prop];
      return (options: Parameters<TgApi[keyof TgApi]>[0] & TgApiOptions) => {
        const { signal, ...params } = options;
        return callTgApi(target.config, prop as keyof TgApi, params, { signal });
      };
    },
  }) as TgBot & TgBotApi;
}

/**
 * Options for {@link callTgApi}.
 */
export interface TgApiOptions {
  /**
   * Abort signal.
   *
   * If set, the request will be rejected with AbortError when the signal is aborted.
   */
  signal?: AbortSignal | undefined;
}

/**
 * Type that wraps {@link TgApi} and adds {@link TgApiOptions} to each method's parameters.
 */
export type TgBotApi = {
  [M in keyof TgApi]: (
    params: Omit<Parameters<TgApi[M]>[0], keyof TgApiOptions> & TgApiOptions,
  ) => Promise<Awaited<ReturnType<TgApi[M]>>>;
};

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

/**
 * Calls a Telegram Bot API method.
 *
 * This is just a simple wrapper over {@link fetch}.
 *
 * @throws {TgError} if the response is not OK.
 */
export async function callTgApi<M extends keyof TgApi>(
  config: TgBotConfig,
  method: M,
  params: Parameters<TgApi[M]>[0],
  options?: TgApiOptions,
): Promise<Awaited<ReturnType<TgApi[M]>>> {
  const url = new URL(
    `./bot${config.botToken}/${method}`,
    config.apiUrl ?? TG_API_URL,
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
      const LocalFormData = config.FormData ?? globalThis.FormData;
      body = new LocalFormData();
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

  const localFetch = config.fetch ?? globalThis.fetch;
  const response = await localFetch(url.href, {
    method: "POST",
    headers,
    body,
    signal: options?.signal,
  });
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
    mode: "no-cors",
    credentials: "omit",
    signal: options?.signal,
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
