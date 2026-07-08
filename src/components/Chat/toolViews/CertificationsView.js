import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap, HiArrowTopRightOnSquare } from "react-icons/hi2";

function CertificationsView({ data }) {
  const certifications = data?.certifications ?? [];
  if (!certifications.length) return null;

  return (
    <div className="tool-view tool-certs">
      {certifications.map((c) => (
        <motion.a
          key={c.title}
          href={c.link}
          target="_blank"
          rel="noopener noreferrer"
          className="tool-cert-card"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <span className="tool-cert-icon" aria-hidden="true">
            <HiAcademicCap />
          </span>
          <div className="tool-cert-body">
            <div className="tool-cert-title">{c.title}</div>
            <div className="tool-cert-provider">{c.provider}</div>
          </div>
          <HiArrowTopRightOnSquare className="tool-cert-arrow" aria-hidden="true" />
        </motion.a>
      ))}
    </div>
  );
}

export default CertificationsView;
