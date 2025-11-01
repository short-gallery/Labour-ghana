import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"; // 👈 Blog icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-logo">Labour Company</h2>
          <p className="footer-about">
            Empowering schools and institutions with smart digital systems that
            simplify record management, finances, and communication.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/subscription">Subscription</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="footer-section">
          <h3>Working Hours</h3>
          <p>Monday – Saturday</p>
          <p>8:00 AM – 9:00 PM</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.youtube.com/@LABOUR-o9h"
              target="_self"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://aglearnersbase.blogspot.com/"
              target="_self"
              rel="noopener noreferrer"
              aria-label="Blog"
            >
              <FontAwesomeIcon icon={faNewspaper} /> {/* 👈 Clean blog icon */}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Labour Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
