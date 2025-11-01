import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Subscription from "./components/Subscription";
import Contact from "./components/Contact";
import LabourEducationalApp from "./components/LabourEducationalApp";
import Blog from "./components/Blog";
import Success from "./components/Success";

// 👇 Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router basename="/Labour-ghana"> {/* 👈 basename added for GitHub Pages */}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/labour-educational-app" element={<LabourEducationalApp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
