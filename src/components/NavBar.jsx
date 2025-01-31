import React, { useState } from "react";

const NavBar = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="navbar-brand">Nikhil Kumar</a>
      <nav className="navbar-links">
        <div className="left-links">
          <a href="Home">Home</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>

          {/* Projects Dropdown */}
          <div 
            className="dropdown" 
            onMouseEnter={() => setShowProjects(true)} 
            onMouseLeave={() => setShowProjects(false)}
          >
            <a href="#projects" className="dropdown-toggle">Projects ▾</a>
            {showProjects && (
              <div className="dropdown-menu">
                <a href="https://github.com/Nikhil112024/Real-Time-Panoramic-Surveillance-and-Mapping-System">Panoramic Surveillance System</a>
                <a href="https://github.com/Nikhil112024/EyeControlledMouse">Eye-Controlled Mouse</a>
                <a href="https://github.com/Nikhil112024/ai-chatbot">AI Chatbot</a>
                <a href="https://github.com/Nikhil112024/social-media-app">All-in-One Social Media Application</a>
                <a href="https://github.com/Nikhil112024/8085-simulator">8085 Microprocessor</a>
                <a href="https://github.com/Nikhil112024/ai-image-gen">AI-Powered Image Generation Website</a>
                <a href="https://github.com/Nikhil112024/hand-controlled-mouse">Virtual Hand-Controlled Mouse</a>
                <a href="https://github.com/Nikhil112024/diveq-app">DiveQ - Dive Analysis App for Swimmers</a>
              </div>
            )}
          </div>

          <a href="#blog">Blog</a>

          {/* Services Dropdown */}
          <div 
            className="dropdown" 
            onMouseEnter={() => setShowServices(true)} 
            onMouseLeave={() => setShowServices(false)}
          >
            <a href="#services" className="dropdown-toggle">Services ▾</a>
            {showServices && (
              <div className="dropdown-menu">
                <a href="#ai-website">AI Website</a>
                <a href="#image-generator">Image Generator</a>
                <a href="#chatbot-api">Chatbot API</a>
                <a href="#social-media-integration">Social Media App</a>
              </div>
            )}
          </div>
        </div>

        {/* Right-aligned Contact Button */}
        <div className="right-links">
          <a href="https://www.linkedin.com/in/nikhil-kumar-8054042b2/" className="btn-nav-contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
