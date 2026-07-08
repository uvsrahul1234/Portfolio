import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

// Provider factory — driven entirely by env vars so the bot's "brain"
// can be swapped in the Vercel dashboard with no code changes.
//
// LLM_PROVIDER: google | anthropic | openai | openrouter   (default: google)
// LLM_MODEL:    provider-specific model id                 (default: gemini-2.5-flash-lite)
//
// Heads up: gemini-2.5-pro requires a paid key as of 2026-04-01. Stick to
// flash / flash-lite for the free tier.
export function getModel() {
  const provider = (process.env.LLM_PROVIDER ?? "google").toLowerCase();
  const modelId = process.env.LLM_MODEL ?? "gemini-2.5-flash-lite";

  switch (provider) {
    case "google": {
      const p = createGoogleGenerativeAI({ apiKey: process.env.GOOGLE_API_KEY });
      return p(modelId);
    }
    case "anthropic": {
      const p = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
      return p(modelId);
    }
    case "openai": {
      const p = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });
      return p(modelId);
    }
    case "openrouter": {
      const p = createOpenRouter({
        apiKey: process.env.OPENROUTER_API_KEY,
        appName: "ankit-portfolio",
        appUrl: "https://ankitrijal2054.github.io/portfolio_website",
      });
      return p(modelId);
    }
    default:
      throw new Error(
        `Unknown LLM_PROVIDER "${provider}". Use one of: google, anthropic, openai, openrouter.`
      );
  }
}

export function getProviderInfo() {
  return {
    provider: (process.env.LLM_PROVIDER ?? "google").toLowerCase(),
    model: process.env.LLM_MODEL ?? "gemini-2.5-flash-lite",
  };
}
