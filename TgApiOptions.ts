/**
 * Options for {@link callTgApi}.
 */
export interface TgApiOptions {
  /**
   * Abort signal.
   *
   * Will be passed to {@link fetch} as {@link RequestInit.signal}.
   *
   * @example Cancel a request if it takes too long.
   *
   * ```ts
   * import { TgBot } from "./mod.ts";
   *
   * const bot = new TgBot({ botToken: "YOUR_TOKEN" });
   *
   * await bot.callApi("getMe", null, { signal: AbortSignal.timeout(10_000) })
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
