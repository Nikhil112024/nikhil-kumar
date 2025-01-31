import React from "react";
import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import profileImage from "../assets/profile-image.png"; // update path if needed

const Hero = () => {
  return (
    <section className="hero-section" id="Home" >
      <div className="hero-card">
        {/* Image Container + Overlay */}
        <div className="hero-image-container">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="hero-profile-img" 
          />

          {/* Floating overlay with social icons at bottom-center */}
          <div className="hero-social-overlay">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">
              <FaDribbble />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/nikhil-kumar-8054042b2/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Text + Buttons */}
        <div className="hero-text">
          <h2>I am Software Developer</h2>
          <p>
             I am a software developer skilled in machine learning, SQL, Python, and React.
             I build predictive models, optimize databases, and create efficient APIs.
             I also make dynamic user interfaces for smoother interactions. 
          </p>
          <p>
          Pursuing a B.Tech in Computer Science, I focus on real-time systems and scalable applications.
          I enjoy solving tough problems and delivering meaningful results through data insights.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            >My Project</button>
            <button className="btn-secondary" onClick={() => window.open("https://drive.google.com/file/d/1vdFoOw-O4M9jvlHe4iVBaJ7-kPUs2VHB/view?usp=sharing", "_blank")}>
              <FaCloudDownloadAlt className="icon-download" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
