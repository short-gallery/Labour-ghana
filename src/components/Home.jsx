import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faSchool, faBookOpen, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import logo from "../assets/labourgh.png"; // replace with your logo
import { useEffect } from "react";


const Home = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate



  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  });

  document.querySelectorAll(".about, .services, .card, .why-us, .cta").forEach((el) => observer.observe(el));
}, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={logo} alt="Labour Company Logo" className="hero-logo" />
          <h1>Empowering Schools and Businesses with our Smart Digital Solutions</h1>
          <p>
            Labour Company is a creative tech firm dedicated to helping 
            institutions and businesses go digital with ease. We design and build smart, 
            user-friendly applications that simplify work, 
            improve productivity, and connect people through technology.
          </p>
          <button 
  className="cta-btn" 
  onClick={() => navigate("/services")} // ✅ Goes to Services page
>
  Explore Our Solutions
</button>
        </div>
      </section>


      {/* Services Section */}
      <section className="services">
        <h2>Our Solutions</h2>
        <div className="service-cards">
    <div 
  className="card" 
  onClick={() => navigate("/labour-educational-app")}
  style={{ cursor: "pointer" }}
>
  <FontAwesomeIcon icon={faSchool} className="icon" />
  <h3>Labour Educational App</h3>
  <p>An all-in-one platform for managing schools efficiently.</p>
</div>

          <div 
  className="card" 
  onClick={() => navigate("/services")} 
  style={{ cursor: "pointer" }} // ✅ Makes it look clickable
>
  <FontAwesomeIcon icon={faLaptopCode} className="icon" />
  <h3>Custom Systems Development</h3>
  <p>We build tailored systems for schools and institutions.</p>
</div>

          <div className="card" onClick={() => navigate("/blog")}>
  <FontAwesomeIcon icon={faBookOpen} className="icon" />
  <h3>AG Learners Base</h3>
  <p>Your blog for basic school educational tips, news, and digital learning insights.</p>
</div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> Smart automation for all school tasks
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> User-friendly and responsive design
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> Reliable technical support
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> Continuous innovation and updates
          </li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
  <h2>Join the Future of Smart Education</h2>
  <p>Be part of the revolution in digital learning and school management.</p>
  <button className="cta-btn" onClick={() => navigate("/services")}>
    Get Started
  </button>
</section>

    </div>
  );
};

export default Home;
