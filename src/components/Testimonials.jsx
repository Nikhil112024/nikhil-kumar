// src/components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  return (
    <section style={{ padding: "4rem 2rem" }}>
      <h2 style={{ textAlign: "center" }}>Happy Clients</h2>
      <div className="client-logos" style={{ display: "flex", justifyContent: "center", gap: "2rem", margin: "2rem 0" }}>
        {/* Replace with real logos or placeholders */}
        <img src="/src/assets/google-logo.png" alt="Google" style={{ height: "40px" }} />
        <img src="/src/assets/amazon-logo.png" alt="Amazon" style={{ height: "40px" }} />
        <img src="/src/assets/linkedin-logo.png" alt="LinkedIn" style={{ height: "40px" }} />
        {/* ... */}
      </div>

      <h3 style={{ textAlign: "center" }}>Testimonial</h3>
      <blockquote style={{
        maxWidth: "600px", margin: "0 auto", fontStyle: "italic", lineHeight: "1.6"
      }}>
        “Working with [Your Name] has been an absolute game-changer for our business. 
         Their user-centric design approach helped us significantly increase engagement
         on our platform. Highly recommend!”
      </blockquote>
      <p style={{ textAlign: "center", marginTop: "1rem", fontWeight: "bold" }}>
        - John Smith, CEO of XYZ Inc.
      </p>
    </section>
  );
};

export default Testimonials;
