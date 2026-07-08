import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/Social.css";
import "../styles/Card.css";
import { socialsData } from "../data/portfolio";

const SOCIAL_ICONS = {
  FaGithub: <FaGithub />,
  FaLinkedin: <FaLinkedin />,
  FaXTwitter: <FaXTwitter />,
  FaInstagramSquare: <FaInstagramSquare />,
};

function Social() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const socials = socialsData.map((social) => ({
    ...social,
    icon: SOCIAL_ICONS[social.iconKey] ?? null,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <Container className="social-container" ref={ref}>
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
                Social
              </Card.Title>
            </motion.div>

            <div className="social-links">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-tile"
                  aria-label={`Open Ankit Rijal on ${social.name}`}
                  variants={itemVariants}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.25 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ "--social-color": social.color }}
                >
                  <span className="social-tile-icon" aria-hidden="true">
                    {social.icon}
                  </span>
                  <span className="social-tile-name">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Social;
