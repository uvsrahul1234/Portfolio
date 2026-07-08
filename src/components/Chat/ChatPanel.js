import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedChips from "./SuggestedChips";

function ChatPanel({ chat, onClose }) {
  const { messages, sendMessage, status, setMessages, addToolResult } = chat;
  const scrollRef = useRef(null);

  // Auto-scroll to bottom whenever messages or streaming state change.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const handleClear = () => setMessages([]);

  const handleSend = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    sendMessage({ text: trimmed });
  };

  const isEmpty = messages.length === 0;
  const isBusy = status === "submitted" || status === "streaming";

  return (
    <motion.div
      layoutId="chat-container"
      className="chat-panel"
      role="dialog"
      aria-label="Chat with Ankit's AI Assistant"
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <ChatHeader onClose={onClose} onClear={handleClear} canClear={!isEmpty} />

      <div className="chat-messages" ref={scrollRef}>
        {isEmpty && (
          <motion.div
            className="chat-welcome"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="chat-welcome-greeting">
              Hi! I'm Ankit's AI Assistant.
            </div>
            <div className="chat-welcome-sub">
              Ask me anything about his work, projects, or experience — or pick a starter below.
            </div>
          </motion.div>
        )}

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isStreaming={isBusy && message.id === messages[messages.length - 1]?.id}
            addToolResult={addToolResult}
          />
        ))}

        {status === "submitted" && (
          <motion.div
            className="chat-thinking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            aria-live="polite"
          >
            <span className="chat-thinking-shimmer" />
            <span className="chat-thinking-shimmer" />
            <span className="chat-thinking-shimmer" />
          </motion.div>
        )}
      </div>

      {isEmpty && <SuggestedChips onPick={handleSend} />}

      <ChatInput onSend={handleSend} disabled={isBusy} />
    </motion.div>
  );
}

export default ChatPanel;
