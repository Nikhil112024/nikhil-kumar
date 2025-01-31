import React from "react";
import Lottie from "lottie-react";
import ExampleSvg from "../assets/animation2.json";

export default function DarkCallToAction() {
  return (
    <section className="dark-cta-section">
      <div className="dark-cta-header">
        <span className="hash-symbol">#</span>lets built
        <div className="title-underline"></div>
      </div>

      <div className="dark-cta-layout">
        {/* Left: Lottie animation (1/3 width) */}
        <div className="left-animation">
          <Lottie 
            animationData={ExampleSvg} 
            className="illustration-svg" 
          />
        </div>

        {/* Right: CTA text (2/3 width) */}
        <div className="right-content">
          <h2 className="dark-cta-title">
            Do you have Project Idea?<br/>Let’s discuss your project!
          </h2>
          <p className="dark-cta-subtext">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.
          </p>
          <button className="dark-cta-button">
            Let’s work Together →
          </button>
        </div>
      </div>
    </section>
  );
}
