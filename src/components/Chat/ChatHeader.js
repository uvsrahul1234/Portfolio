import React from "react";
import { motion } from "framer-motion";
import { HiSparkles, HiXMark, HiArrowPath } from "react-icons/hi2";

function ChatHeader({ onClose, onClear, canClear }) {
  return (
    <div className="chat-header">
      <div className="chat-header-identity">
        <span className="chat-header-avatar" aria-hidden="true">
          <HiSparkles />
        </span>
        <div className="chat-header-text">
          <div className="chat-header-title">Ankit's AI Assistant</div>
          <div className="chat-header-status">
            <span className="chat-header-dot" aria-hidden="true" />
            Online
          </div>
        </div>
      </div>

      <div className="chat-header-actions">
        <motion.button
          type="button"
          className="chat-header-btn"
          onClick={onClear}
          aria-label="Clear conversation"
          disabled={!canClear}
          whileHover={canClear ? { scale: 1.08, rotate: -45 } : {}}
          whileTap={canClear ? { scale: 0.92 } : {}}
        >
          <HiArrowPath />
        </motion.button>
        <motion.button
          type="button"
          className="chat-header-btn"
          onClick={onClose}
          aria-label="Close chat"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          <HiXMark />
        </motion.button>
      </div>
    </div>
  );
}

export default ChatHeader;
