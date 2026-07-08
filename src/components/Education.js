import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Education.css";
import { educationData } from "../data/portfolio";

function Education() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container className="education-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Card className="text-left theme-card modern-card">
          <Card.Body>
            <motion.div variants={itemVariants}>
              <Card.Title className="theme-card-title section-title">
                Education
              </Card.Title>
            </motion.div>

            <div className="education-timeline">
              {educationData.map((entry) => (
                <motion.div
                  key={`${entry.degree}-${entry.school}`}
                  className="education-section timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-marker education-marker"></div>
                  <div className="timeline-content">
                    <motion.h3
                      className="degree-title"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {entry.degree}
                    </motion.h3>
                    <p className="college-details">
                      {entry.school} | {entry.year}
                    </p>
                    <div className="education-status completed">{entry.status}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Education;
