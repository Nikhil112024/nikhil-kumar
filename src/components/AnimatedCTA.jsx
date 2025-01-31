import React from "react";
import Lottie from "lottie-react";
// Replace with your actual SVG import or <img> path
import ExampleSvg from "../assets/animation.json";

export default function AnimatedCTA() {
  return (
    <section className="dark-skills-section">
      <div className="dark-skills-title">
        <span className="hash-symbol">#</span>skills
        <div className="title-underline"></div>
      </div>

      <div className="dark-skills-layout">
        {/* Left SVG / illustration */}
        <div className="left-illustration">
          {/* If using a file import, like ReactComponent as ExampleSvg */}
          {/* <ExampleSvg className="illustration-svg" /> */}
          {/* Or just an <img> if it's not an SVG import: */}
            <Lottie animationData={ExampleSvg}></Lottie>
        </div>

        {/* Right Column: skill boxes */}
        <div className="right-skills">
          <div className="skill-box">
            <h3>Languages</h3>
            <p>C++</p>
            <p>JavaScript</p>
            <p>Python</p>
          </div>
          <div className="skill-box">
            <h3>Databases</h3>
            <p>SQL</p>
          </div>
          <div className="skill-box">
            <h3>Tools</h3>
            <p>VSCode</p>
            <p>Jupyter Notebook</p>
            <p>Git</p>
            <p>Eclipse</p>
            <p>Google Collab</p>
          </div>
          <div className="skill-box">
            <h3>Coursework</h3>
            <p>Data Structures & Algos</p>
            <p>Operating System</p>
            <p>Machine Learning</p>
            <p>DBMS</p>
            <p>Computer Networks</p>
          </div>
          <div className="skill-box">
            <h3>Frameworks</h3>
            <p>React</p>
            <p>Node.js</p>
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </section>
  );
}
