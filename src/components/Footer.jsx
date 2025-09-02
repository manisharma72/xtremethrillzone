import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/global.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand / About */}
        <div className="footer-col">
          <h2 className="footer-logo">Xtremethrillzone</h2>
          <p>
            Adventure hub of Rishikesh – Rafting, Bungee, Paragliding & Camping.  
            Experience thrill with full safety and expert guides.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSc_b0pLTJAmswxzYh47ynf7k-ITWRb603gWRGhNciezkb8XCA/viewform?fbclid=PAVERDUAMjmXlleHRuA2FlbQIxMAABp1jtCPo8eP2XE-trJgYWAjp9Wba3lkJp4dNQYosZ4esYuIXqCwBqKGV7VQ_m_aem_tFY4qw-Xm9qc65xpHYEtsg" target="_blank" rel="noreferrer">Book Online</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li><span>📍</span> Shivpuri, Rishikesh, Uttarakhand</li>
            <li><span>📞</span> +91 8979857450</li>
            <li><span>📧</span> xtremethrillzone@gmail.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1CQrRzcHPw/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/xtremethrillzone?igsh=MWV2cTdkZWo0MG1uZQ==" target="_blank" rel="noreferrer"><FaInstagram /></a>
           
            <a href="https://youtube.com/@xtremethrillzone?si=ZA1yzRNXtJvyMS5j" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Xtremethrillzone. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
