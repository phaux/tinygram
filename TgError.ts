import type { TgResponseParameters } from "./TgApi.ts";

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
