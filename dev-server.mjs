// Local dev server. Wraps api/chat.js (a Web-standard fetch-style handler that
// Vercel runs in production) into a tiny Node http server so you can test the
// chatbot end-to-end without the Vercel CLI.
//
// CRA's dev server on :3000 proxies /api/* here (configured via the "proxy"
// field in package.json). Run with: npm run dev:api  (or just `npm run dev`).

import { createServer } from "node:http";
import { config as loadEnv } from "dotenv";
import chatModule from "./api/chat.js";

const chatHandler = chatModule.fetch;

loadEnv({ path: ".env.local" });

const PORT = Number(process.env.DEV_API_PORT ?? 3001);

const server = createServer(async (nodeReq, nodeRes) => {
  // We only host one route locally — the /api/chat function.
  if (nodeReq.url !== "/api/chat") {
    nodeRes.writeHead(404, { "content-type": "text/plain" });
    nodeRes.end("Not found");
    return;
  }

  // Buffer the request body so we can wrap it in a Web Request.
  const chunks = [];
  for await (const chunk of nodeReq) chunks.push(chunk);
  const bodyBuffer = Buffer.concat(chunks);

  const headers = new Headers();
  for (const [k, v] of Object.entries(nodeReq.headers)) {
    if (Array.isArray(v)) headers.set(k, v.join(", "));
    else if (typeof v === "string") headers.set(k, v);
  }

  const webRequest = new Request(`http://localhost:${PORT}${nodeReq.url}`, {
    method: nodeReq.method,
    headers,
    body: bodyBuffer.length ? bodyBuffer : undefined,
    duplex: "half",
  });

  let webResponse;
  try {
    webResponse = await chatHandler(webRequest);
  } catch (err) {
    console.error("[dev-server] handler error:", err);
    nodeRes.writeHead(500, { "content-type": "application/json" });
    nodeRes.end(JSON.stringify({ error: String(err?.message ?? err) }));
    return;
  }

  // Forward status + headers to the Node response.
  const responseHeaders = {};
  for (const [k, v] of webResponse.headers.entries()) {
    responseHeaders[k] = v;
  }
  nodeRes.writeHead(webResponse.status, responseHeaders);

  // Stream the body. toUIMessageStreamResponse() returns a ReadableStream;
  // forward chunks one by one so SSE flushes promptly.
  if (webResponse.body) {
    const reader = webResponse.body.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        nodeRes.write(value);
      }
    } catch (err) {
      console.error("[dev-server] stream error:", err);
    }
  }
  nodeRes.end();
});

server.listen(PORT, () => {
  console.log(`\x1b[36m[dev-server]\x1b[0m /api/chat ready on http://localhost:${PORT}`);
  if (!process.env.GOOGLE_API_KEY && !process.env.ANTHROPIC_API_KEY && !process.env.OPENAI_API_KEY && !process.env.OPENROUTER_API_KEY) {
    console.warn(
      "\x1b[33m[dev-server]\x1b[0m No provider API key found in .env.local — the chat will 500 until you add one."
    );
  }
});
