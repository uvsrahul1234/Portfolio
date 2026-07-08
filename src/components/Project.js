import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Project.css";
import clipforgeimg from "../image/clipforge.png";
import collabcanvasimg from "../image/collabcanvas.png";
import chatbotimg from "../image/chatbot.png";
import housingimg from "../image/housing_price.png";
import imageassistantimg from "../image/image_assistant.png";
import unilangimg from "../image/unilang.png";
import lawmintimg from "../image/lawmint.png";
import studybuddyimg from "../image/study_buddy.png";
import aimathtutorimg from "../image/ai_math_tutor.png";
import { projectsData } from "../data/portfolio";

const PROJECT_IMAGES = {
  studybuddy: studybuddyimg,
  aimathtutor: aimathtutorimg,
  lawmint: lawmintimg,
  imageassistant: imageassistantimg,
  collabcanvas: collabcanvasimg,
  unilang: unilangimg,
  clipforge: clipforgeimg,
  chatbot: chatbotimg,
  housing: housingimg,
};

function Project() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = projectsData.map((project) => ({
    ...project,
    img: PROJECT_IMAGES[project.imageKey],
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container className="project-container" ref={ref}>
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
                Projects
              </Card.Title>
            </motion.div>

            <div className="project-tiles">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-tile"
                    aria-label={`View ${project.title} project`}
                  >
                    <div className="project-tile-inner">
                      <div className="project-image-container">
                        <img
                          src={project.img}
                          alt={project.alt}
                          className="project-image"
                          loading="lazy"
                        />
                        <span className="project-category">{project.category}</span>
                      </div>
                      <div className="project-info">
                        <div className="project-title-row">
                          <h4 className="project-card-name">{project.title}</h4>
                          <span className="project-status">{project.status}</span>
                        </div>
                        <p className="project-description">
                          {project.description}
                        </p>
                        <ul className="project-tags" aria-label={`${project.title} technologies`}>
                          {project.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Project;
