import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode } from "react-icons/fi";
import { FaReact, FaPython, FaGithub, FaAws, FaDocker, FaJenkins } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiHuggingface,
  SiTensorflow,
  SiJupyter,
  SiNumpy,
  SiScipy,
  SiPandas,
  SiElectron,
  SiLangchain,
  SiGooglegemini,
  SiOpenai,
  SiStreamlit,
  SiTypescript,
  SiFastapi,
  SiPydantic,
  SiFirebase,
  SiVercel,
  SiGooglecloud,
  SiSupabase,
  SiCapacitor,
  SiNextdotjs,
  SiAnthropic,
  SiStripe,
  SiHubspot,
  SiSlack,
  SiRedis,
  SiTerraform,
} from "react-icons/si";
import "../styles/Card.css";
import "../styles/Skill.css";
import { skillsData } from "../data/portfolio";

const SKILL_ICONS = {
  FiCode: <FiCode />,
  FaReact: <FaReact />,
  FaPython: <FaPython />,
  FaGithub: <FaGithub />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  FaJenkins: <FaJenkins />,
  TbBrandCSharp: <TbBrandCSharp />,
  BiLogoPostgresql: <BiLogoPostgresql />,
  SiHuggingface: <SiHuggingface />,
  SiTensorflow: <SiTensorflow />,
  SiJupyter: <SiJupyter />,
  SiNumpy: <SiNumpy />,
  SiScipy: <SiScipy />,
  SiPandas: <SiPandas />,
  SiElectron: <SiElectron />,
  SiLangchain: <SiLangchain />,
  SiGooglegemini: <SiGooglegemini />,
  SiOpenai: <SiOpenai />,
  SiStreamlit: <SiStreamlit />,
  SiTypescript: <SiTypescript />,
  SiFastapi: <SiFastapi />,
  SiPydantic: <SiPydantic />,
  SiFirebase: <SiFirebase />,
  SiVercel: <SiVercel />,
  SiGooglecloud: <SiGooglecloud />,
  SiSupabase: <SiSupabase />,
  SiCapacitor: <SiCapacitor />,
  SiNextdotjs: <SiNextdotjs />,
  SiAnthropic: <SiAnthropic />,
  SiStripe: <SiStripe />,
  SiHubspot: <SiHubspot />,
  SiSlack: <SiSlack />,
  SiRedis: <SiRedis />,
  SiTerraform: <SiTerraform />,
};

function Skill() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skills = skillsData.map((skill) => ({
    ...skill,
    icon: SKILL_ICONS[skill.iconKey] ?? null,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const showSkillBubble = (skill, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const bubbleWidth = Math.min(360, window.innerWidth - 32);
    const margin = 16;
    const centerX = rect.left + rect.width / 2;
    const x = Math.min(
      Math.max(centerX, margin + bubbleWidth / 2),
      window.innerWidth - margin - bubbleWidth / 2
    );
    const roomAbove = rect.top;
    const roomBelow = window.innerHeight - rect.bottom;
    const placement = roomAbove > roomBelow && roomAbove > 180 ? "top" : "bottom";
    const availableHeight =
      placement === "top" ? roomAbove - margin * 2 : roomBelow - margin * 2;

    setHoveredSkill({
      ...skill,
      x,
      y: placement === "top" ? rect.top - 12 : rect.bottom + 12,
      placement,
      maxHeight: Math.max(180, availableHeight),
      width: bubbleWidth,
    });
  };

  return (
    <Container className="skill-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Card className="text-left theme-card modern-card">
          <Card.Body>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card.Title className="theme-card-title section-title">
                Skills
              </Card.Title>
            </motion.div>

            <div className="skill-cloud" aria-label="Skill cloud">
              {skills.map((skill) => (
                <motion.button
                  key={skill.name}
                  type="button"
                  className="skill-cloud-item"
                  variants={itemVariants}
                  aria-label={`${skill.name}: ${skill.description}`}
                  onMouseEnter={(event) => showSkillBubble(skill, event)}
                  onFocus={(event) => showSkillBubble(skill, event)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onBlur={() => setHoveredSkill(null)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileFocus={{ y: -6, scale: 1.03 }}
                >
                  <span className="skill-cloud-surface" aria-hidden="true">
                    <span className="skill-cloud-icon">{skill.icon}</span>
                    <span className="skill-cloud-name">{skill.name}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
      {hoveredSkill &&
        createPortal(
          <div
            className={`skill-detail-bubble skill-detail-bubble-${hoveredSkill.placement}`}
            style={{
              left: hoveredSkill.x,
              top: hoveredSkill.y,
              width: hoveredSkill.width,
              maxHeight: hoveredSkill.maxHeight,
            }}
            role="tooltip"
          >
            <span>{hoveredSkill.category}</span>
            <strong>{hoveredSkill.name}</strong>
            <small>{hoveredSkill.description}</small>
          </div>,
          document.body
        )}
    </Container>
  );
}

export default Skill;
