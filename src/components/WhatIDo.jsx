import React from "react";

const WhatIDo = () => {
  return (
    <section className="what-i-do">
      <div className="container">
        {/* Left Section */}
        <div className="what-i-do-text">
          <h2>What I do?</h2>
          <p>
          I am a passionate and driven individual who thrives on continuous learning and innovation. 
          With a deep curiosity for technology, I enjoy exploring new concepts, solving complex problems, and building meaningful solutions. 
          I believe in adaptability, creativity, and teamwork, always seeking opportunities to grow and make an impact. 
          
          </p>
          <p>
          Whether it's tackling challenges, acquiring new skills, or collaborating on projects,
          I am committed to lifelong learning and contributing positively to the ever-evolving world of technology.
          </p>
          <button className="btn-primary" onClick={() => window.open("https://www.linkedin.com/in/nikhil-kumar-8054042b2/", "_blank")}>Say Hello!</button>
        </div>

        {/* Right Section: Skills Cards */}
        <div className="what-i-do-cards">
          <div className="card active">
            <h3>Machine learning (Python,API)</h3>
            <p>
            Experienced in building machine learning models using TensorFlow, PyTorch, and Scikit-learn.
            Integrated models into FastAPI-based RESTful APIs for real-time inference, ensuring efficient and scalable deployment..
            </p>
          </div>

          <div className="card">
            <h3>Database Management and SQL Expertise</h3>
            <p>
            Proficient in SQL and PL/SQL, specializing in database design, optimization, and query performance tuning. 
            Experienced in stored procedures, triggers, indexing, and managing relational databases for efficient data processing.
            </p>
          </div>

          <div className="card">
            <h3>Web Development and React.js Expertise</h3>
            <p>
            Skilled in React.js for building dynamic, responsive web applications. Experienced in state management 
            (Redux, Context API), API integration, and UI/UX design, ensuring scalable and user-friendly frontend solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
