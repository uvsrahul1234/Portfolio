import React, { Suspense, useState, useEffect, createContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import "./styles/App.css";
import "./styles/Background.scss";
import Education from "./components/Education";
import Certification from "./components/Certification";
import ChatWidget from "./components/Chat/ChatWidget";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export const ThemeContext = createContext();
const AiWaveBackground = React.lazy(() => import("./components/AiWaveBackground"));

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const backgroundClass =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark-theme"
      : "light-theme";

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 36,
      scale: 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const getSectionMotion = () => ({
    variants: sectionVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.18, margin: "0px 0px -8% 0px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AnimatePresence>
        <motion.div
          className={`app-container ${backgroundClass}`}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <Suspense fallback={null}>
            <AiWaveBackground />
          </Suspense>

          <NavBar />
          <div className="content">
            <motion.section 
              id="aboutme" 
              className="section-container"
              {...getSectionMotion(0)}
            >
              <AboutMe />
            </motion.section>
            
            <motion.section 
              id="experience" 
              className="section-container"
              {...getSectionMotion(1)}
            >
              <Experience />
            </motion.section>
            
            <motion.section 
              id="education" 
              className="section-container"
              {...getSectionMotion(2)}
            >
              <Education />
            </motion.section>
            
            <motion.section 
              id="skill" 
              className="section-container"
              {...getSectionMotion(3)}
            >
              <Skill />
            </motion.section>
            
            <motion.section 
              id="project" 
              className="section-container"
              {...getSectionMotion(4)}
            >
              <Project />
            </motion.section>
            
            <motion.section 
              id="certification" 
              className="section-container"
              {...getSectionMotion(5)}
            >
              <Certification />
            </motion.section>
            
            <motion.section 
              id="social" 
              className="section-container"
              {...getSectionMotion(6)}
            >
              <Social />
            </motion.section>
            
            <motion.section 
              id="contact" 
              className="section-container"
              {...getSectionMotion(7)}
            >
              <Contact />
            </motion.section>
            <Footer />
          </div>
          
          <ScrollToTop />
          <ChatWidget />
          <Analytics />
          <SpeedInsights />
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export default App;