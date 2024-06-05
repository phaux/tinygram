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
 * const botUser = await bot.getMe();
 * console.log(botUser.is_bot); // true
 * ```
 */
export function initTgBot(config: TgBotConfig): TgBot & TgApi<TgApiOptions> {
  return new Proxy<TgBot>(new TgBot(config), {
    get(target, prop) {
      if (prop in target) return target[prop as keyof TgBot];
      return <M extends keyof TgApi>(
        ...params: Parameters<TgApi<TgApiOptions>[M]>
      ) => callTgApi(target.config, prop as keyof TgApi, ...params);
    },
  }) as TgBot & TgApi<TgApiOptions>;
}
