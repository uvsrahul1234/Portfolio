import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Experience.css";
import { experienceData as experiences } from "../data/portfolio";

function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container className="experience-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Card className="text-left theme-card modern-card">
          <Card.Body>
            <motion.div variants={itemVariants}>
              <Card.Title className="theme-card-title section-title">
                Experience
              </Card.Title>
            </motion.div>

            <motion.div className="experience-section" variants={itemVariants}>
              {experiences.map((experience, experienceIndex) => (
                <div className="timeline-item" key={experience.role}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="role-heading">
                      <div>
                        <h3 className="role-title">{experience.role}</h3>
                        <p className="company-details">
                          {experience.company} | {experience.dates}
                        </p>
                      </div>
                      {experience.status && (
                        <span className="role-status">{experience.status}</span>
                      )}
                    </div>

                    <ul className="experience-details">
                      {experience.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bullet}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.3 + experienceIndex * 0.2 + bulletIndex * 0.08,
                            duration: 0.6,
                          }}
                        >
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>

                    {experience.projects?.length > 0 && (
                      <div className="role-projects">
                        <h4 className="project-title">Notable Projects</h4>
                        <div className="projects-grid">
                          {experience.projects.map((project, projectIndex) => (
                            <motion.div
                              key={project.title}
                              className="project-card"
                              initial={{ opacity: 0, y: 20 }}
                              animate={inView ? { opacity: 1, y: 0 } : {}}
                              transition={{
                                delay:
                                  0.6 +
                                  experienceIndex * 0.2 +
                                  projectIndex * 0.08,
                                duration: 0.6,
                              }}
                              whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                              <h5 className="project-card-title">{project.title}</h5>
                              <p className="project-card-description">
                                {project.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Experience;