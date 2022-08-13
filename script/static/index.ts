const TG_API_URL = "https://api.telegram.org/";

/**
 * Error returned from the telegram bot API.
 * Contains the error code and the description.
 */
export class TgError extends Error {
  /** HTTP status code returned by the telegram API */
  declare code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

/**
 * Telegram bot options
 */
type TgBotOptions = {
  /**
   * Telegram bot token.
   * Talk to [BotFather](https://t.me/BotFather) to generate one.
   */
  token: string;
  /**
   * Telegram API URL.
   * Use this if you're hosting your own bot API server.
   * Default: https://api.telegram.org
   */
  url?: string;
  /**
   * Use custom {@link fetch} function instead of the global one.
   * Useful for testing or if your environment doesn't support fetch.
   */
  fetch?: (
    url: string,
    init: {
      method: "GET" | "POST";
      headers?: { "Content-Type": "application/json" };
      body?: string | FormData;
    }
  ) => Promise<{
    status: number;
    statusText?: string;
    json: () => Promise<any>;
    blob: () => Promise<Blob>;
  }>;
  /**
   * Use custom {@link FormData} class instead of the global one.
   * This is only used in methods that send {@link File} or {@link Blob}.
   * Useful for testing or if your environment doesn't support FormData.
   */
  FormData?: typeof FormData;
};

export function initTgBot(options: TgBotOptions): TgBot {
  return new Proxy<TgBot>({} as TgBot, {
    get(target, prop) {
      if (prop == "downloadFile") {
        return (filePath: string) => botFileDownload(options, filePath);
      }
      if (typeof prop == "string") {
        return (params: unknown) => botMethodCall(options, prop, params);
      }
    },
  });
}

/**
 * Telegram bot client.
 */
export interface TgBot {
  /**
   * Download a file that you get from {@link TgBot.getFile}.
   * @see https://core.telegram.org/bots/api#getfile
   */
  downloadFile(filePath: string): Promise<Blob>;
}

async function botMethodCall(
  options: TgBotOptions,
  method: string,
  params: unknown
) {
  const url = new URL(
    `./bot${options.token}/${method}`,
    options.url ?? TG_API_URL
  );
  let body, headers;
  if (params != null && typeof params == "object") {
    // If params contains a File or Blob, send it as multipart/form-data.
    if (
      Object.values(params).some(
        (v) =>
          v != null &&
          typeof v == "object" &&
          typeof v.arrayBuffer == "function"
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
          typeof value.arrayBuffer == "function"
        ) {
          body.set(key, value as Blob);
        } else if (value != null && value !== false) {
          body.set(key, JSON.stringify(value));
        }
      }
    }
    // If params contains only strings or numbers, send it in query string.
    else if (
      Object.values(params).every(
        (v) =>
          typeof v == "string" ||
          typeof v == "number" ||
          typeof v == "boolean" ||
          v == null
      )
    ) {
      for (const [key, value] of Object.entries(params)) {
        if (value != null && value !== false) {
          url.searchParams.set(key, String(value));
        }
      }
    }
    // Otherwise, send params as JSON.
    else {
      headers = { "Content-Type": "application/json" } as const;
      body = JSON.stringify(params);
    }
  }

  const fetch = options.fetch ?? globalThis.fetch;
  const response = await fetch(url.href, { method: "POST", headers, body });
  const data = await response.json().catch(() => null);
  if (data?.ok === true) {
    return data.result;
  }
  if (data?.ok === false) {
    throw new TgError(data.description, data.error_code);
  }
  if (response.status >= 400) {
    throw new TgError(
      response.statusText ?? `Error ${response.status}`,
      response.status
    );
  }
  throw new TgError("Invalid response", response.status);
}

async function botFileDownload(options: TgBotOptions, filePath: string) {
  const url = new URL(
    `./file/bot${options.token}/${filePath}`,
    options.url ?? TG_API_URL
  );
  const fetch = options.fetch ?? globalThis.fetch;
  const response = await fetch(url.href, {
    method: "GET",
    mode: "no-cors",
    credentials: "omit",
  });
  if (response.status >= 400) {
    throw new TgError(
      response.statusText ?? `Error ${response.status}`,
      response.status
    );
  }
  const blob = await response.blob();
  return blob;
}
