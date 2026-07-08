import React from "react";
import { Container } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer" aria-label="Website closing note">
      <Container className="footer-container">
        <div className="footer-orb" aria-hidden="true" />
        <h2>Thanks for visiting.</h2>
        <p className="footer-copy">
          I appreciate you taking the time to explore my work. If something here
          sparked an idea, let&apos;s build the next version together.
        </p>
        <a className="footer-link" href="#contact">
          Start a conversation <FiArrowUpRight aria-hidden="true" />
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
