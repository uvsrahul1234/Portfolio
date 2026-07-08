import React from "react";
import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";
import { resumeUrl } from "../../../data/portfolio.mjs";

function ResumeView() {
  return (
    <div className="tool-view tool-resume">
      <motion.a
        href={resumeUrl}
        download="Resume-Ankit_Rijal.pdf"
        className="tool-resume-btn"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <HiArrowDownTray />
        <span>Download Resume</span>
      </motion.a>
    </div>
  );
}

export default ResumeView;
