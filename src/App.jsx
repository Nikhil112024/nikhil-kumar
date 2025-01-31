import React from "react";
import SkillsSlider from "./components/SkillsSlider";
import ContinuousSkillsMarquee from "./components/ContinuousSkillsMarquee";
import SkillsSection from "./components/SkillsSection";
import TechnicalSkills from "./components/TechnicalSkills";
import DarkSkills from "./components/DarkSkills"; 
import Projects from "./components/Projects";
import DarkCallToAction from "./components/DarkCallToAction";
import AnimationCTA from "./components/AnimatedCTA";
import "./styles/global.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills"; // import the new component
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ContinuousSkillsMarquee />
      <DarkSkills />
      <Projects />
      <DarkCallToAction />

      <Footer />
    </>
  );
}

export default App;
