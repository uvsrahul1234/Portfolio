import React from "react";
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

function ProjectsView({ data }) {
  const projects = data?.projects ?? [];
  if (!projects.length) return null;

  return (
    <div className="tool-view tool-projects">
      {projects.map((p) => (
        <motion.a
          key={p.title}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="tool-project-card"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <div className="tool-project-head">
            <div>
              <div className="tool-project-title">{p.title}</div>
              <div className="tool-project-category">{p.category}</div>
            </div>
            {p.status && (
              <span className="tool-project-status">{p.status}</span>
            )}
          </div>
          <p className="tool-project-desc">{p.description}</p>
          {p.tags?.length > 0 && (
            <ul className="tool-project-tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
          <span className="tool-project-link">
            View <HiArrowTopRightOnSquare />
          </span>
        </motion.a>
      ))}
    </div>
  );
}

export default ProjectsView;
