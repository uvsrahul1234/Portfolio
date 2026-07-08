import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import ChatBubble from "./ChatBubble";
import ChatPanel from "./ChatPanel";
import ScrollHandler from "./ScrollHandler";
import "../../styles/Chat.css";

const FIRST_VISIT_KEY = "chat:has-pulsed";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldPulse, setShouldPulse] = useState(false);

  const chat = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  // Pulse the bubble once on first ever visit, then never again.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.localStorage.getItem(FIRST_VISIT_KEY)) {
      setShouldPulse(true);
    }
  }, []);

  // Esc closes the panel.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Click outside the panel closes it. Mousedown beats click for snappier feel.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onPointerDown = (e) => {
      if (!e.target.closest(".chat-panel")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    if (shouldPulse) {
      window.localStorage.setItem(FIRST_VISIT_KEY, "1");
      setShouldPulse(false);
    }
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <ChatPanel
            key="panel"
            chat={chat}
            onClose={handleClose}
          />
        ) : (
          <ChatBubble
            key="bubble"
            onClick={handleOpen}
            shouldPulse={shouldPulse}
            hasUnread={false}
          />
        )}
      </AnimatePresence>
      <ScrollHandler chat={chat} />
    </>
  );
}

export default ChatWidget;
