import React from "react";
import Slider from "react-slick";
import {
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase
} from "react-icons/si";

/* Import the slick-carousel default styles */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SkillsSlider() {
  const settings = {
    dots: false,         // Hide dot indicators (set to true if you want them)
    infinite: true,      // Loop through slides
    speed: 100,          // Transition speed (ms)
    slidesToShow: 4,     // # of skill boxes visible at once (desktop)
    slidesToScroll: 2,   // # of skill boxes to scroll per swipe/click
    autoplay: true,      // Enable auto-scrolling
    autoplaySpeed: 2000, // Delay between slides (ms). Increase for slower pace
    pauseOnHover: true,  // Whether to pause on hover
    responsive: [
      {
        breakpoint: 768,  // Tablet breakpoint
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,  // Mobile breakpoint
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const skillData = [
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiMysql />, name: "PL/SQL" },
    { icon: <SiMongodb />, name: "DBMS" },
    { icon: <SiPython />, name: "ML" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiFirebase />, name: "Firebase" }
  ];

  return (
    <section className="skills-slider-section">
      <Slider {...settings}>
        {skillData.map((skill, index) => (
          <div key={index} className="skill-slide">
            <div className="skill-box">
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
