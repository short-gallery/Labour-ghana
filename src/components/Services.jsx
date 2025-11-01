import React from "react"; 
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faGraduationCap,
  faHospital,
  faBoxesStacked,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Powering schools, businesses, and institutions with smart digital
            solutions that inspire growth, innovation, and simplicity.
          </motion.p>
        </div>
        <div className="floating-icons">
          <FontAwesomeIcon icon={faGraduationCap} className="float-icon icon1" />
          <FontAwesomeIcon icon={faHospital} className="float-icon icon2" />
          <FontAwesomeIcon icon={faBoxesStacked} className="float-icon icon3" />
          <FontAwesomeIcon icon={faGears} className="float-icon icon4" />
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2>Our Products</h2>
        <div className="product-list">
          <motion.div
            className="product-card education-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            onClick={() => navigate("/labour-educational-app")}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="service-icon" />
            <h3>Labour Education App</h3>
            <p>
              Experience an all-in-one platform that simplifies school records,
              reports, and finances — empowering educators to stay organized and
              focus on what truly matters: better learning outcomes.
            </p>
          </motion.div>

          <motion.div
            className="product-card healthcare-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faHospital} className="service-icon" />
            <h3>
              Health Care App <span className="coming-soon">(Upcoming)</span>
            </h3>
            <p>
              A digital solution that connects patients, doctors, and medical
              records — improving hospital efficiency and patient care.
            </p>
          </motion.div>

          <motion.div
            className="product-card sales-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon icon={faBoxesStacked} className="service-icon" />
            <h3>
              Sales & Inventory Management System{" "}
              <span className="coming-soon">(Upcoming)</span>
            </h3>
            <p>
              Manage products, monitor stock levels, and track daily sales with
              an intuitive and automated inventory system for businesses of any
              size.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <motion.section
        className="custom-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <FontAwesomeIcon icon={faGears} className="custom-icon" />
        <h2>Custom Systems Development</h2>
        <p>
          We design and build tailored software solutions to fit your unique
          business needs — turning ideas into powerful, efficient, and
          user-friendly systems that drive results.
        </p>

        {/* ✅ Added button here as you recommended */}
        <button
          className="custom-btn"
          onClick={() => navigate("/contact")}
        >
          Request a Custom System
        </button>
      </motion.section>
    </div>
  );
};

export default Services;
