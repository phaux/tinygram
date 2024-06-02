/**
 * Options for {@link callTgApi}.
 */
export interface TgApiOptions {
  /**
   * Abort signal.
   *
   * If set, the request will be rejected with AbortError when the signal is aborted.
   *
   * @example Cancel a request if it takes too long.
   *
   * ```ts
   * import { TgBot } from "./mod.ts";
   *
   * const bot = new TgBot({ botToken: "YOUR_TOKEN" });
   *
   * await bot.callApi("getMe", { signal: AbortSignal.timeout(10_000) })
   *   .catch((error) => {
   *     if (error instanceof DOMException && error.name === "AbortError") {
   *       console.log("Request was aborted");
   *     } else {
   *       throw error;
   *     }
   *   });
   * ```
   */
  signal?: AbortSignal | undefined;
}
