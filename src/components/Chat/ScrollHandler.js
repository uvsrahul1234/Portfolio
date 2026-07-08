import { useEffect, useRef } from "react";

// Watches the message stream for client-side scroll_to_section tool calls.
// When one arrives in the "input-available" state (model has emitted full
// arguments but no execute() exists on the server), this scrolls the page,
// closes the chat, and confirms the result back to the model so it can move on.
function ScrollHandler({ chat }) {
  const { messages, addToolResult } = chat;
  const handledRef = useRef(new Set());

  useEffect(() => {
    if (!messages?.length) return;
    const last = messages[messages.length - 1];
    if (last.role !== "assistant" || !last.parts) return;

    for (const part of last.parts) {
      if (part.type !== "tool-scroll_to_section") continue;
      if (part.state !== "input-available") continue;
      if (handledRef.current.has(part.toolCallId)) continue;

      handledRef.current.add(part.toolCallId);
      const section = part.input?.section;
      if (!section) continue;

      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      addToolResult?.({
        tool: "scroll_to_section",
        toolCallId: part.toolCallId,
        output: { ok: true, section },
      });
    }
  }, [messages, addToolResult]);

  return null;
}

export default ScrollHandler;
