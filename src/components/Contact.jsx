import React from "react";
import "../styles/global.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Have questions or want to book your next adventure? Reach out—we’d love to hear from you!
      </p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Phone:</strong> +91 8979857450</p>
          <p><strong>Email:</strong> xtremethrillzone@gmail.com</p>
          <p><strong>Address:</strong> Shivpuri, Rishikesh, Uttarakhand, India</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Google Map (Shivpuri) */}
      <div className="map-container">
        <iframe
          title="Xtremethrillzone Location — Shivpuri Rishikesh"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13650.123456789!2d78.363146!3d30.262167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE1JzUyLjAiTiA3OMKwMjEnMjkuMiJF!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="280"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
