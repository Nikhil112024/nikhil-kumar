// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#101010", padding: "2rem", color: "#fff", textAlign: "center" }}>
      <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
