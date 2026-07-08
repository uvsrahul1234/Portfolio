import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { HiSparkles, HiCheck } from "react-icons/hi2";
import ProjectsView from "./toolViews/ProjectsView";
import ExperienceView from "./toolViews/ExperienceView";
import SkillsView from "./toolViews/SkillsView";
import EducationView from "./toolViews/EducationView";
import CertificationsView from "./toolViews/CertificationsView";
import ContactView from "./toolViews/ContactView";
import ResumeView from "./toolViews/ResumeView";

const TOOL_VIEWS = {
  get_projects: ProjectsView,
  get_experience: ExperienceView,
  get_skills: SkillsView,
  get_education: EducationView,
  get_certifications: CertificationsView,
  get_contact: ContactView,
  get_resume_url: ResumeView,
};

const SECTION_LABELS = {
  aboutme: "About",
  experience: "Experience",
  education: "Education",
  skill: "Skills",
  project: "Projects",
  certification: "Certifications",
  social: "Social",
  contact: "Contact",
};

const markdownComponents = {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  a: ({ node, children, ...props }) => (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};

function renderToolPart(part, key) {
  // part.type is "tool-<name>". The state machine flows:
  //   input-streaming → input-available → output-available (or output-error)
  const toolName = part.type.startsWith("tool-") ? part.type.slice(5) : null;
  if (!toolName) return null;

  if (toolName === "scroll_to_section") {
    const section = part.input?.section;
    const label = SECTION_LABELS[section] ?? section ?? "section";
    const done = part.state === "output-available";
    return (
      <div
        className={`chat-scroll-pill${done ? " chat-scroll-pill-done" : ""}`}
        key={key}
      >
        {done ? (
          <span className="chat-scroll-pill-check" aria-hidden="true">
            <HiCheck />
          </span>
        ) : (
          <span className="chat-scroll-pill-dot" aria-hidden="true" />
        )}
        {done ? `Scrolled to ${label}` : `Scrolling to ${label}…`}
      </div>
    );
  }

  const View = TOOL_VIEWS[toolName];
  if (!View) return null;

  if (part.state === "output-available") {
    return <View key={key} data={part.output} />;
  }
  if (part.state === "output-error") {
    return (
      <div className="chat-tool-error" key={key}>
        Couldn't load that — try again or ask another way.
      </div>
    );
  }
  return (
    <div className="chat-tool-loading" key={key}>
      <span className="chat-thinking-shimmer" />
      <span className="chat-thinking-shimmer" />
      <span className="chat-thinking-shimmer" />
    </div>
  );
}

function ChatMessage({ message, isStreaming }) {
  const isUser = message.role === "user";
  const parts = message.parts ?? [];

  // Cursor is drawn after the LAST text part of the streaming assistant message.
  const lastTextIdx = isStreaming && !isUser
    ? parts.map((p, i) => (p.type === "text" ? i : -1)).filter((i) => i >= 0).pop()
    : -1;

  return (
    <motion.div
      className={`chat-message chat-message-${isUser ? "user" : "assistant"}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {!isUser && (
        <span className="chat-message-avatar" aria-hidden="true">
          <HiSparkles />
        </span>
      )}

      <div className="chat-message-body">
        {parts.map((part, i) => {
          if (part.type === "text") {
            return (
              <div className="chat-message-text" key={i}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {part.text}
                </ReactMarkdown>
                {i === lastTextIdx && (
                  <span className="chat-cursor" aria-hidden="true" />
                )}
              </div>
            );
          }
          if (part.type?.startsWith("tool-")) {
            return renderToolPart(part, i);
          }
          return null;
        })}
      </div>
    </motion.div>
  );
}

export default ChatMessage;
