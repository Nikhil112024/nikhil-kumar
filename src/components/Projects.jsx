import React from "react";

// Replace with your own image imports
import projImg1 from "../assets/Project thumbnail/Panoramic Surveillance System.webp";
import projImg2 from "../assets/Project thumbnail/Eye-Controlled Mouse.webp";
import projImg3 from "../assets/Project thumbnail/All-in-One Social Media Application.webp";
import projImg4 from "../assets/Project thumbnail/AI Chatbot.webp";
import projImg5 from "../assets/Project thumbnail/8085 Microprocessor Simulation.webp";
import projImg6 from "../assets/Project thumbnail/AI-Powered Image Generation.webp";

export default function Projects() {
  const projectData = [
    {
      label: " Python, OpenCV, Mapbox, PostGIS",
      title: " Intelligent Panoramic Surveillance System",
      description: " A real-time tracking system by integrating CCTV feeds into a panoramic view.",
      img: projImg1,
      link: "https://github.com/Nikhil112024/Real-Time-Panoramic-Surveillance-and-Mapping-System.git"
    },
    {
      label: "Python, OpenCV, TensorFlow",
      title: " Eye Controlled Mouse ",
      description: "Built a system to control the mouse cursor using real-time eye movement tracking without traditional input devices.",
      img: projImg2,
      link: "https://github.com/Nikhil112024/EyeControlledMouse"
    },
    {
      label: " React JS, Appwrite, JavaScript",
      title: " Social Media Application",
      description: " Developed a scalable social media platform using React JS and Appwrite, featuring real-time updates and infinite scrolling.",
      img: projImg3,
      link: "https://github.com/Nikhil112024/AGNI"
    },
    {
      label: "Python ,Flask ,Transformer",
      title: "Chat Bot",
      description: "A LLM based chat bot having thinking capability",
      img: projImg4,
      link: "https://github.com/Nikhil112024/Chat-bot"
    },
    {
      label: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Short description here.",
      img: projImg5,
      link: "https://github.com/Nikhil112024/8085-Microprocessor-Simulation"
    },
    {
      label: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Short description here.",
      img: projImg6,
      link: "https://github.com/Nikhil112024/AI-Powered-Image-Generation"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Portfolio</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration.
        </p>
      </div>

      {/* 3-column grid on desktop, 2 on tablet, 1 on mobile */}
      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <div key={idx} className="project-card">
            {/* Fixed-height image for consistent card size */}
            <img 
              src={project.img} 
              alt={project.title} 
              className="project-image" 
            />
            <div className="project-content">
              <span className="project-label">{project.label}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* "Project Link →" button linking to project.link */}
              <a 
                className="project-link-btn" 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
              >
                Project Link →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <button className="more-projects-btn">More Project</button>
      </div>
    </section>
  );
}
