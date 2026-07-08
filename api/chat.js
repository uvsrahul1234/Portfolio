import { streamText, convertToModelMessages, stepCountIs } from "ai";
import { getModel } from "./_lib/llm.js";
import { ratelimit } from "./_lib/ratelimit.js";
import { tools } from "./_lib/tools.js";
import { getSystemPrompt } from "./_lib/system-prompt.js";

export const config = { maxDuration: 30 };

async function handler(req) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "anonymous";

  const { success, remaining, reset } = await ratelimit().limit(ip);
  if (!success) {
    const retryAfter = Math.max(0, Math.ceil((reset - Date.now()) / 1000));
    return new Response(
      JSON.stringify({
        error:
          "You've hit the chat rate limit (20 messages per hour). Try again in a bit, or reach out to Ankit directly.",
      }),
      {
        status: 429,
        headers: {
          "content-type": "application/json",
          "retry-after": String(retryAfter),
          "x-ratelimit-remaining": String(remaining),
        },
      }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON body", { status: 400 });
  }

  const { messages } = body ?? {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response("Missing or empty `messages`", { status: 400 });
  }

  try {
    const modelMessages = await convertToModelMessages(messages);
    const result = streamText({
      model: getModel(),
      system: getSystemPrompt(),
      messages: modelMessages,
      tools,
      stopWhen: stepCountIs(5),
      // Anthropic-only prompt cache hint. Other providers ignore providerOptions
      // they don't recognize, so this is safe to leave on regardless of LLM_PROVIDER.
      providerOptions: {
        anthropic: { cacheControl: { type: "ephemeral" } },
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("[chat] streamText failed:", err);
    return new Response(
      JSON.stringify({
        error:
          "The chat backend hit an error. Check that LLM_PROVIDER, LLM_MODEL, and the matching API key are set in the environment.",
      }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}

// Service-worker-style export — tells the Vercel Node runtime to invoke this
// as a Web-standard fetch handler (req is a Request, return is a Response).
// Without this wrapper, Vercel falls back to Node-style (IncomingMessage, ServerResponse)
// and `req.headers.get(...)` blows up because headers is a plain object.
export default { fetch: handler };
