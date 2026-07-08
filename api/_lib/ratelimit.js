import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Per-IP sliding-window rate limiter. 20 messages per hour is generous for
// legit visitors but knocks out abuse and runaway scripts.
//
// Falls back to a no-op limiter when Upstash credentials aren't configured
// (e.g. local dev without `vercel env pull`). This keeps the chat working
// during development without forcing every contributor to provision Redis.

let limiter;

function buildLimiter() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return {
      limit: async () => ({ success: true, remaining: Infinity, reset: 0 }),
      configured: false,
    };
  }

  const redis = new Redis({ url, token });
  const rl = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(20, "1 h"),
    analytics: true,
    prefix: "ankit-portfolio-chat",
  });

  return {
    limit: (key) => rl.limit(key),
    configured: true,
  };
}

export function ratelimit() {
  if (!limiter) limiter = buildLimiter();
  return limiter;
}
