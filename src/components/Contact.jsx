import React, { useState } from "react";
import "./Contact.css";
import { Phone, Mail, Youtube, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xzzjwark", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you — reach out anytime.</p>
      </section>

      {/* Contact Info */}
      <section className="contact-details">
        <div className="contact-card">
          <Phone size={32} />
          <h3>Call or SMS</h3>
          <p>
            <a href="tel:+233541829724">+233 54 182 9724</a>
          </p>
          <small>Available on voice and SMS</small>
        </div>

        <div className="contact-card">
          <MessageCircle size={32} />
          <h3>WhatsApp</h3>
          <p>
            <a
              href="https://wa.me/233541829724"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>

        <div className="contact-card">
          <Mail size={32} />
          <h3>Email</h3>
          <p>
            <a href="mailto:labourgroupofcompanies@gmail.com">
              labourgroupofcompanies@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <Youtube size={32} color="red" />
          <h3>YouTube Channel</h3>
          <p>
            <a
              href="https://www.youtube.com/@LABOUR-o9h"
              target="_blank"
              rel="noopener noreferrer"
            >
              LABOUR-o9h
            </a>
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            <Send size={18} /> Send Message
          </button>

          {status === "SUCCESS" && (
            <p className="success-msg">✅ Message sent successfully!</p>
          )}
          {status === "ERROR" && (
            <p className="error-msg">❌ Something went wrong. Please try again.</p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;
