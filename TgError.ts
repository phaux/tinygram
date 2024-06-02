import type { TgResponseParameters } from "./TgApi.ts";

/**
 * Error returned from the Telegram Bot API.
 *
 * Contains the error code and the description.
 *
 * @example Keep retrying sending a message if the rate limit is exceeded.
 *
 * ```ts
 * import { callTgApi, TgError } from "./mod.ts";
 *
 * const botToken = "YOUR_TOKEN";
 * while (true) {
 *   try {
 *     await callTgApi({ botToken }, "sendMessage", { chat_id: 0, text: "Hello" });
 *     break;
 *   } catch (error) {
 *     if (error instanceof TgError && error.code === 429) {
 *       await new Promise((resolve) =>
 *         setTimeout(resolve, (error.parameters?.retry_after ?? 1) * 1000)
 *       );
 *     } else {
 *       throw error;
 *     }
 *   }
 * }
 * ```
 */
export class TgError extends Error {
  constructor(message: string, public code: number, public parameters?: TgResponseParameters) {
    super(message);
  }
}
