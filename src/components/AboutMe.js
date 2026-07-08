import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiDownload,
  FiMail,
  FiZap,
} from "react-icons/fi";
import "../styles/AboutMe.css";
import {
  aboutMeRoles as roles,
  aboutMeBio,
  aboutMeStatusTagline,
  resumeUrl,
} from "../data/portfolio";

function AboutMe() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const resumeHref = resumeUrl;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <Container fluid className="about-me-container modern-hero-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.section className="hero-intro-panel hero-intro-panel-full" variants={itemVariants}>
          <div className="hero-status-pill">
            <FiZap aria-hidden="true" />
            {aboutMeStatusTagline}
          </div>

          <p className="hero-eyebrow">Hello, I am</p>
          <h1 className="hero-name">Ankit Rijal</h1>
          <motion.p
            className="hero-role"
            key={currentTextIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {roles[currentTextIndex]}
          </motion.p>

          <p className="hero-bio">{aboutMeBio}</p>

          <div className="button-group">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
              <Button
                variant="primary"
                href={resumeHref}
                download
                className="btn-modern btn-primary-modern"
              >
                <FiDownload aria-hidden="true" />
                <span>Download CV</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
              <Button
                variant="secondary"
                onClick={scrollToContact}
                className="btn-modern btn-secondary-modern"
              >
                <FiMail aria-hidden="true" />
                <span>Contact Me</span>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </Container>
  );
}

export default AboutMe;
