import React from "react";
import { motion } from "framer-motion";
import "./Subscription.css";

const Subscription = () => {
  // Replace with your actual Paystack product links
  const subscriptions = [
    {
      title: "Per Learner",
      price: "₵1.00",
      description: "Affordable access for a single learner — simple and quick.",
      color: "#22c55e",
      link: "https://paystack.com/buy/per-learner-plan",
    },
    {
      title: "One Term",
      price: "₵200.00",
      description: "Unlock complete access for one full academic term.",
      color: "#f59e0b",
      link: "https://paystack.shop/pay/tiv6ao2396",
    },
    {
      title: "Three Terms / Per Year",
      price: "₵380.00",
      description: "Enjoy full access for an entire school year (3 terms).",
      color: "#3b82f6",
      link: "https://paystack.com/buy/three-terms-plan",
    },
    {
      title: "Custom Plan",
      price: "Flexible",
      description: "Tailored plans for schools or organizations.",
      color: "#ec4899",
      link: "https://paystack.com/buy/custom-plan",
    },
  ];

  const handleSubscribe = (link) => {
    window.location.href = link; // open in same tab
  };

  return (
    <div className="subscription-page">
      <motion.div
        className="subscription-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Choose Your Subscription Plan</h1>
        <p>
          Unlock full access to premium school management tools — subscribe now
          and empower your learning journey.
        </p>
      </motion.div>

      <motion.div
        className="subscription-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {subscriptions.map((sub, index) => (
          <motion.div
            key={index}
            className="subscription-card"
            style={{
              borderTop: `6px solid ${sub.color}`,
              boxShadow: `0 10px 25px ${sub.color}44`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <h2>{sub.title}</h2>
            <p className="price">{sub.price}</p>
            <p className="description">{sub.description}</p>
            <motion.button
              className="subscribe-btn"
              style={{
                background: `linear-gradient(135deg, ${sub.color}, #1e3a8a)`,
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              onClick={() => handleSubscribe(sub.link)}
            >
              Subscribe
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Subscription;
