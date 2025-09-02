import React, { useState, useEffect } from "react";
import "../styles/global.css";

const images = [
  "/about1.jpg",
  "/about2.jpg",
  "/about3.jpg", // public folder me images rakho
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // fast slideshow (2.5 sec)
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section">
      {/* Left Content */}
      <div className="about-content">
        <h2 className="brand-title">Xtremethrillzone</h2>
        <p>
          Welcome to <span className="highlight">Xtremethrillzone</span> – the
          ultimate adventure hub of Rishikesh. We bring you unforgettable
          experiences like <strong>rafting</strong>, <strong>bungee jumping</strong>,{" "}
          <strong>camping</strong>, and <strong>paragliding</strong>, all with
          certified guides and top safety measures.  
          <br />  
          Get ready to feel the <span className="highlight">adrenaline rush!</span>
        </p>
      </div>

      {/* Right Slideshow */}
      <div className="about-image">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Xtremethrillzone Adventure"
          className="slide-image"
        />
      </div>
    </section>
  );
};

export default About;
