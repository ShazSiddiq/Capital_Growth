import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', phone: '', amount: '', loanType: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `New Loan Application:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0ALoan Type: ${formData.loanType}%0AAmount: ₹${formData.amount}`;
    window.open(`https://wa.me/918750039084?text=${message}`, '_blank');
  };

  const floatingIcons = ['₹', '$', '💰', '💵', '💳', '📈', '₹', '$', '💰'];

  return (
    <section className="hero" id="home">
      <div className="floating-money">
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="money-icon"
            initial={{ y: -100, x: Math.random() * window.innerWidth, opacity: 0 }}
            animate={{ 
              y: window.innerHeight + 100,
              opacity: [0, 1, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: index * 0.8,
              ease: "linear"
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your Financial Growth Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Quick loan approvals with competitive rates. Personal & Business loans tailored for your success.
          </motion.p>
        </motion.div>
        <motion.div 
          className="hero-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Apply for Loan</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <select 
              required
              value={formData.loanType}
              onChange={(e) => setFormData({...formData, loanType: e.target.value})}
            >
              <option value="">Select Loan Type</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Education Loan">Education Loan</option>
              <option value="Vehicle Loan">Vehicle Loan</option>
            </select>
            <input 
              type="number" 
              placeholder="Loan Amount (₹)" 
              required
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
            />
            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fab fa-whatsapp"></i> Connect via WhatsApp
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
