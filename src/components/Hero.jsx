import React from "react";
import "../styles/global.css";

function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/rafting.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to Xtremethrillzone</h1>
        <p className="hero-subtitle">Experience Rishikesh like never before</p>
        <div className="hero-buttons">
          <a href="tel:+91 8979857450" className="btn btn-primary">
            Call to Book
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_b0pLTJAmswxzYh47ynf7k-ITWRb603gWRGhNciezkb8XCA/viewform?fbclid=PAVERDUAMjmXlleHRuA2FlbQIxMAABp1jtCPo8eP2XE-trJgYWAjp9Wba3lkJp4dNQYosZ4esYuIXqCwBqKGV7VQ_m_aem_tFY4qw-Xm9qc65xpHYEtsg"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            Book Online
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
