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
