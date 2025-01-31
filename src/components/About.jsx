// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section className="about-section" style={{ padding: "4rem 2rem" }}>
      <h2>I am a Professional User Experience Designer</h2>
      <p style={{ maxWidth: "600px", margin: "1rem auto" }}>
        Over the years, I’ve helped companies big and small transform their
        user experiences, solve design problems, and drive business growth
        through intuitive, human-centered design.
      </p>
      <h3>Work Process</h3>
      <ul>
        <li><strong>Discover:</strong> Research, gather insights, and understand user needs.</li>
        <li><strong>Design:</strong> Create wireframes, prototypes, and high-fidelity designs.</li>
        <li><strong>Develop:</strong> Implement designs in collaboration with developers.</li>
        <li><strong>Launch:</strong> Test, refine, and release the final product.</li>
      </ul>
    </section>
  );
};

export default About;
