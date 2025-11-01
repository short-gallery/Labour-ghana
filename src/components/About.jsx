import React from "react";
import "./About.css";
import teamImage from "../assets/labourgh.png";
import { motion } from "framer-motion";
import { FaLightbulb, FaHandshake, FaUsers, FaRocket } from "react-icons/fa";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const values = [
    {
      icon: <FaHandshake />,
      title: "Integrity",
      text: "We build trust by being honest, transparent, and dependable.",
      color: "integrity",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      text: "We use modern tools and smart ideas to simplify processes and create impact.",
      color: "innovation",
    },
    {
      icon: <FaUsers />,
      title: "Teamwork",
      text: "We believe in collaboration — together, we achieve more.",
      color: "teamwork",
    },
    {
      icon: <FaRocket />,
      title: "Excellence",
      text: "We deliver quality service and continuously improve everything we do.",
      color: "excellence",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>About Labour Company</h1>
        <p>Building smart solutions for a digital world.</p>
      </motion.section>

      {/* Company Overview */}
      <motion.section
        className="about-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Who We Are</h2>
        <p>
          Labour Company is a creative tech firm dedicated to helping institutions and
          businesses go digital with ease. We design and build smart, user-friendly
          applications that simplify work, improve productivity, and connect people
          through technology.
        </p>
        <p>
          Our mission is simple — to empower growth through innovation and make digital
          transformation accessible to everyone.
        </p>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="values-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className={`value-card ${value.color}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="vision-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="vision-text">
          <h2>Our Vision</h2>
          <p>
            To become a leading provider of labour and workforce solutions across the
            nation — empowering individuals and helping companies grow through reliable,
            tech-driven services.
          </p>
        </div>
        <div className="vision-image">
          <img src={teamImage} alt="Our Team" />
        </div>
      </motion.section>
    </div>
  );
};

export default About;
