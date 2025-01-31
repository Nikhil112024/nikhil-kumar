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

export default function ContinuousSkillsMarquee() {
  // List out all skills you want to show
  const skills = [
    { icon: <SiCplusplus />, label: "C++" },
    { icon: <SiMysql />, label: "PL/SQL" },
    { icon: <SiMongodb />, label: "DBMS" },
    { icon: <SiPython />, label: "ML" },
    { icon: <SiReact />, label: "React" },
    { icon: <SiTailwindcss />, label: "Tailwind" },
    { icon: <SiNodedotjs />, label: "Node.js" },
    { icon: <SiFirebase />, label: "Firebase" },
  ];

  return (
    <section className="skills-marquee">
      <div className="skills-marquee-track">
        {/* First set */}
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.label}</h4>
          </div>
        ))}
        {/* Duplicate set for seamless looping */}
        {skills.map((skill, index) => (
          <div key={`dup-${index}`} className="skill-box">
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.label}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
