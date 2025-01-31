import React from "react";
const NavBar = () => {
  return (
<header className="navbar">
  <a href="#home" className="navbar-brand">Nikhil Kumar</a>
  <nav className="navbar-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#process">Process</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#blog">Blog</a>
    <a href="#services">Services</a>
    <a href="#contact" className="btn-nav-contact">Contact</a>
  </nav>
</header>
  );
};

export default NavBar;
