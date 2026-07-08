import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Row, Col, Dropdown } from "react-bootstrap";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import { FaBars } from "react-icons/fa";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import logo from "../image/logo.png";
import "../styles/NavBar.css";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(
    theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "system") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(systemPrefersDark);
      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, [theme, setTheme]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar expand="lg" className="modern-navbar">
        <Container className="navbar-container">
          <Row className="nav-shell w-100 align-items-center justify-content-between">
            <Col xs="auto" className="nav-control-slot">
              <div className="dropdown-wrapper">
                <Dropdown show={menuOpen} onToggle={setMenuOpen}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdown-basic"
                      className={`modern-dropdown-toggle dropdown-toggle-${
                        isDarkMode ? "dark" : "light"
                      }`}
                      onClick={() => setMenuOpen(!menuOpen)}
                      aria-label="Open section navigation"
                    >
                      <FaBars className="menu-icon" size={18} aria-hidden="true" />
                    </Dropdown.Toggle>
                  </motion.div>
                  
                  <Dropdown.Menu
                    className={`modern-dropdown-menu dropdown-menu-${isDarkMode ? "dark" : "light"}`}
                  >
                  {[
                    { id: "aboutme", label: "About Me" },
                    { id: "experience", label: "Experience" },
                    { id: "education", label: "Education" },
                    { id: "skill", label: "Skills" },
                    { id: "project", label: "Projects" },
                    { id: "certification", label: "Certifications" },
                    { id: "social", label: "Social" },
                    { id: "contact", label: "Contact" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Dropdown.Item 
                        onClick={() => {
                          scrollToSection(item.id);
                          setMenuOpen(false);
                        }}
                        className="modern-dropdown-item"
                      >
                        {item.label}
                      </Dropdown.Item>
                    </motion.div>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </Col>
            <Col xs="auto" className="d-flex justify-content-center align-items-center">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="brand-logo-button"
                onClick={() => scrollToSection("aboutme")}
                aria-label="Scroll to introduction"
              >
                <img
                  src={logo}
                  alt=""
                  width="44"
                  height="44"
                  className="logo-image"
                  aria-hidden="true"
                />
              </motion.button>
            </Col>
            
            <Col xs="auto" className="nav-control-slot d-flex justify-content-end align-items-center">
              <motion.div 
                className="theme-toggle-container"
                whileHover={{ scale: 1.05 }}
              >
                <button
                  onClick={toggleTheme}
                  className="theme-toggle-btn"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <RiMoonLine aria-hidden="true" />
                  ) : (
                    <RiSunLine aria-hidden="true" />
                  )}
                </button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;