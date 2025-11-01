import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/labourgh.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ to detect current route

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goHome = () => {
    navigate("/");
    setMenuOpen(false);
  };

  // Helper function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="navbar-logo" onClick={goHome}>
        <img src={logo} alt="Company Logo" />
        <h2>Labour Ghana</h2>
      </div>

      {/* Mobile menu toggle */}
      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            className={isActive("/") ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={isActive("/about") ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={isActive("/services") ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/subscription"
            className={isActive("/subscription") ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Subscription
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={isActive("/blog") ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Blog Site
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={isActive("/contact") ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
