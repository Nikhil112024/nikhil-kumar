import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Logo */}
        <div className="footer-logo">
          <div className="logo-circle">B</div>
          <span className="logo-text">Brooklyn</span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right Side: Copyright Text */}
        <div className="footer-right">
          <p>Copyright © 2022 Picto.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
