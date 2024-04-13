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
      body?: string | FormData | null;
      signal?: AbortSignal | null;
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
