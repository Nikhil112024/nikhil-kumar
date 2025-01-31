import React from "react";

export default function TechnicalSkills() {
  return (
    <section className="technical-skills-section">
      <h2 className="technical-skills-title">TECHNICAL SKILLS</h2>

      <div className="technical-skills-card">
        <div className="technical-skills-grid">
          {/* Column #1 */}
          <div className="skills-column">
            <h3>Languages</h3>
            <ul>
              <li>C/C++</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
            <h3>Databases</h3>
            <ul>
              <li>SQL</li>
            </ul>
          </div>

          {/* Column #2 */}
          <div className="skills-column">
            <h3>Developer Tools</h3>
            <ul>
              <li>Visual Studio Code</li>
              <li>Jupyter Notebook</li>
              <li>Git</li>
              <li>Eclipse</li>
              <li>Google Collab</li>
            </ul>
            <h3>Coursework</h3>
            <ul>
              <li>Data Structures & Algorithms</li>
              <li>Operating System</li>
              <li>Machine Learning</li>
              <li>DBMS</li>
              <li>Computer Networks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
