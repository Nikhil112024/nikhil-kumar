import React from "react";
import SkillsSlider from "./SkillsSlider";  // or your continuous marquee component

export default function SkillsSection() {
  return (
    <section>
      {/* 1) Your existing skill box animation */}  
      
      {/* or <ContinuousSkillsMarquee /> if using the marquee approach */}

      {/* 2) Technical Skills Info Below */}
      <div className="technical-skills-info">
        <h2>TECHNICAL SKILLS</h2>
        <p><strong>Languages:</strong> C/C++, JavaScript, Python.</p>
        <p><strong>Developer Tools:</strong> Visual Studio Code, Jupyter Notebook, Git, Eclipse, Google Collab.</p>
        <p><strong>Databases:</strong> SQL.</p>
        <p><strong>CourseWork:</strong> Data Structures and Algorithms, Operating System, Machine Learning, DBMS, Computer Networks.</p>
      </div>
    </section>
  );
}
