/**
 * Module for formatting messages to be sent to Telegram.
 *
 * Use {@link tgFmt} function to format a message.
 *
 * @example Formatting and sending a message
 *
 * ```ts
 * import { initTgBot } from "./mod.ts";
 * const bot = initTgBot({ botToken: "YOUR_TOKEN" });
 *
 * const msg = tgFmt`Hello, ${tgEntity("bold", "World")}!`;
 * await bot.sendMessage({ chat_id: "123", ...msg });
 * ```
 *
 * @module
 */

import type { TgMessageEntity, TgSendMessageParams } from "./TgApi.ts";

/**
 * Formatted Telegram message, which can be passed to Telegram API methods.
 *
 * To send it, spread it into {@link TgSendMessageParams} when sending a message.
 *
 * Can also be used as a part of a bigger formatted message when passed to {@link tgFmt}.
 *
 * @example
 *
 * ```ts
 * const msg: FormattedTgMessage = {
 *   text: "Hello, World!",
 *   entities: [{ type: "bold", offset: 7, length: 5 }],
 * };
 *
 * const msg2: FormattedTgMessage = tgFmt`The message is: ${msg}`;
 *
 * const sendMessageParams = { chat_id: "123", ...msg2 };
 * ```
 */
export type FormattedTgMessage = Pick<TgSendMessageParams, "text" | "entities">;

/**
 * Values that can be used to build a {@link FormattedTgMessage} using {@link tgFmt}.
 *
 * @example
 *
 * ```ts
 * tgFmt(
 *   "Hello", // string
 *   tgEntity("bold", "Bold text"), // result of a formatting function
 *   tgFmt`Hello, ${tgEntity("bold", "World")}!`, // another formatted message
 *   ["a", "b", "c"], // nested array of parts
 *   null, // nullish (ignored)
 * );
 * ```
 */
export type FormattedTgMessagePart =
  | Array<FormattedTgMessagePart>
  | FormattedTgMessage
  | string
  | null
  | undefined;

/**
 * Joins strings and other formatted messages into a single formatted message.
 *
 * Can be used either as a regular function or a tagged template literal.
 *
 * To actually insert entities into a message, use the {@link tgEntity} function.
 *
 * @example Sending a formatted message
 *
 * ```ts
 * import { initTgBot } from "./mod.ts";
 * const bot = initTgBot({ botToken: "YOUR_TOKEN" });
 *
 * await bot.sendMessage({
 *   chat_id: "123",
 *   ...tgFmt`Hello, ${tgEntity("bold", "World")}!`,
 * });
 * ```
 *
 * @example Sending a photo with a formatted caption
 *
 * ```ts
 * import { initTgBot } from "./mod.ts";
 * const bot = initTgBot({ botToken: "YOUR_TOKEN" });
 *
 * const msg = tgFmt("Hello, ", tgEntity("bold", "World"), "!");
 *
 * await bot.sendPhoto({
 *   chat_id: "123",
 *   photo: new Blob([]),
 *   caption: msg.text,
 *   caption_entities: msg.entities,
 * });
 * ```
 */
export function tgFmt(
  arg0: TemplateStringsArray | FormattedTgMessagePart[] | FormattedTgMessagePart,
  ...args: FormattedTgMessagePart[]
): FormattedTgMessage {
  // Collect all arguments into a single parts array.
  // @ts-ignore -- Array.isArray doesn't detect ReadonlyArray as array.
  const arg0arr: FormattedTgMessagePart[] = Array.isArray(arg0) ? arg0 : [arg0];
  const parts = Array.from({ length: Math.max(arg0arr.length, args.length) })
    .flatMap((_, i) => [arg0arr[i], args[i]]); // Zip arrays together.

  // Iterate over all parts.
  let { text, entities }: FormattedTgMessage = { text: "", entities: [] };
  let index = 0;
  for (const part of parts) {
    // Turn part into a formatted message.
    const message = tgFmtPart(part);
    // Append text and entities to the result.
    text += message.text;
    entities.push(
      ...message.entities?.map((entity) => ({ ...entity, offset: index + entity.offset })) ?? [],
    );
    // Update index.
    index += message.text.length;
  }

  // Remove entities if empty.
  if (entities.length > 0) return { text, entities };
  else return { text };
}

/**
 * Formats a single part of a formatted Telegram message.
 *
 * Used internally by {@link tgFmt}.
 */
function tgFmtPart(part: FormattedTgMessagePart): FormattedTgMessage {
  if (Array.isArray(part)) return tgFmt(part);
  if (typeof part == "string") return { text: part };
  if (part != null) return part;
  return { text: "" };
}

/**
 * Creates a formatted message containing just a single entity.
 *
 * The result can be used as a part of a bigger formatted message when passed to {@link tgFmt}.
 *
 * @see {@link TgMessageEntity} for more information about entities.
 *
 * @example
 *
 * ```ts
 * tgFmt`
 *   Normal text.
 *   ${tgEntity("bold", "Bold text.")}
 *   ${tgEntity("italic", "Italic text.")}
 *   ${tgEntity("text_link", "Click me!", { url: "https://example.com" })}
 * `;
 * ```
 */
export function tgEntity(
  type: TgMessageEntity["type"],
  text: string,
  options?: Omit<TgMessageEntity, "type" | "offset" | "length">,
): FormattedTgMessage {
  return {
    text,
    entities: [{ ...options, type, offset: 0, length: text.length }],
  };
}
