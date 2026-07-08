import React from "react";
import { motion } from "framer-motion";

const STARTER_CHIPS = [
  "What's Ankit's tech stack?",
  "Show me his recent projects",
  "Download his resume",
  "How can I reach him?",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function SuggestedChips({ onPick }) {
  return (
    <motion.div
      className="chat-chips"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {STARTER_CHIPS.map((chip) => (
        <motion.button
          key={chip}
          type="button"
          className="chat-chip"
          variants={chipVariants}
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onPick(chip)}
        >
          {chip}
        </motion.button>
      ))}
    </motion.div>
  );
}

export default SuggestedChips;
