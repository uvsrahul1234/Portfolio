import React from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

function ChatBubble({ onClick, shouldPulse }) {
  return (
    <motion.button
      type="button"
      layoutId="chat-container"
      onClick={onClick}
      className="chat-bubble"
      aria-label="Open chat with Ankit's AI Assistant"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.94 }}
    >
      {shouldPulse && (
        <>
          <span className="chat-bubble-pulse" aria-hidden="true" />
          <span className="chat-bubble-pulse chat-bubble-pulse-delayed" aria-hidden="true" />
        </>
      )}
      <span className="chat-bubble-icon" aria-hidden="true">
        <HiSparkles />
      </span>
    </motion.button>
  );
}

export default ChatBubble;
