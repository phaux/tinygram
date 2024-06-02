import { TgBot } from "./TgBot.ts";
import type { TgApi } from "./TgApi.ts";
import { callTgApi } from "./callTgApi.ts";
import type { TgApiOptions } from "./TgApiOptions.ts";
import type { TgBotConfig } from "./TgBotConfig.ts";

/**
 * Returns a {@link TgBot} wrapped in a {@link Proxy} which allows to call methods from {@link TgApi} directly.
 *
 * @example Getting bot's information.
 *
 * ```ts
 * import { initTgBot } from "./mod.ts";
 *
 * const bot = initTgBot({ botToken: "YOUR_TOKEN" });
 *
 * const botUser = await bot.getMe({});
 * console.log(botUser.is_bot); // true
 * ```
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
 * Type that wraps {@link TgApi} and adds {@link TgApiOptions} to each method's parameters.
 */
export type TgBotApi = {
  [M in keyof TgApi]: (
    params: Omit<Parameters<TgApi[M]>[0], keyof TgApiOptions> & TgApiOptions,
  ) => Promise<Awaited<ReturnType<TgApi[M]>>>;
};
