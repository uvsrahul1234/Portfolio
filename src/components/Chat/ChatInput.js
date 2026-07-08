import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";

const MAX_CHARS = 500;

function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");
  const taRef = useRef(null);

  // Auto-grow the textarea up to ~4 lines.
  useEffect(() => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  }, [value]);

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  const remaining = MAX_CHARS - value.length;
  const overLimit = remaining < 0;
  const canSend = !disabled && value.trim().length > 0 && !overLimit;

  return (
    <form
      className="chat-input"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <textarea
        ref={taRef}
        rows={1}
        className="chat-input-field"
        placeholder="Ask about Ankit's work, projects, or experience…"
        value={value}
        onChange={(e) => setValue(e.target.value.slice(0, MAX_CHARS + 50))}
        onKeyDown={handleKey}
        disabled={disabled}
        aria-label="Type a message"
      />
      <div className="chat-input-meta">
        {value.length > MAX_CHARS - 80 && (
          <span
            className={`chat-input-counter${overLimit ? " over-limit" : ""}`}
          >
            {remaining}
          </span>
        )}
        <motion.button
          type="submit"
          className="chat-input-send"
          disabled={!canSend}
          aria-label="Send message"
          whileHover={canSend ? { scale: 1.08 } : {}}
          whileTap={canSend ? { scale: 0.92 } : {}}
        >
          <HiArrowUp />
        </motion.button>
      </div>
    </form>
  );
}

export default ChatInput;
