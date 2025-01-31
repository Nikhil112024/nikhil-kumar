import React from "react";
import {
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase
} from "react-icons/si";

export default function ScrollingSkills() {
  return (
    <section className="skills-marquee">
      <div className="skills-marquee-content">
        {/* First set */}
        <div className="skill-box"><SiCplusplus className="skill-icon" /><h4>C++</h4></div>
        <div className="skill-box"><SiMysql className="skill-icon" /><h4>PL/SQL</h4></div>
        <div className="skill-box"><SiMongodb className="skill-icon" /><h4>DBMS</h4></div>
        <div className="skill-box"><SiPython className="skill-icon" /><h4>ML</h4></div>
        <div className="skill-box"><SiReact className="skill-icon" /><h4>React</h4></div>
        <div className="skill-box"><SiTailwindcss className="skill-icon" /><h4>Tailwind</h4></div>
        <div className="skill-box"><SiNodedotjs className="skill-icon" /><h4>Node.js</h4></div>
        <div className="skill-box"><SiFirebase className="skill-icon" /><h4>Firebase</h4></div>

        {/* Duplicate set for continuous loop */}
        <div className="skill-box"><SiCplusplus className="skill-icon" /><h4>C++</h4></div>
        <div className="skill-box"><SiMysql className="skill-icon" /><h4>PL/SQL</h4></div>
        <div className="skill-box"><SiMongodb className="skill-icon" /><h4>DBMS</h4></div>
        <div className="skill-box"><SiPython className="skill-icon" /><h4>ML</h4></div>
        <div className="skill-box"><SiReact className="skill-icon" /><h4>React</h4></div>
        <div className="skill-box"><SiTailwindcss className="skill-icon" /><h4>Tailwind</h4></div>
        <div className="skill-box"><SiNodedotjs className="skill-icon" /><h4>Node.js</h4></div>
        <div className="skill-box"><SiFirebase className="skill-icon" /><h4>Firebase</h4></div>
      </div>
    </section>
  );
}
