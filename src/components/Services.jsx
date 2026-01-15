import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

export default function Services() {
  const services = [
    { icon: '🏠', title: 'Personal Loan', desc: 'Quick personal loans with flexible repayment options', color: '#667eea' },
    { icon: '💼', title: 'Business Loan', desc: 'Grow your business with our competitive rates', color: '#ffc107' },
    { icon: '🎓', title: 'Education Loan', desc: 'Invest in your future with education financing', color: '#764ba2' },
    { icon: '🏢', title: 'Commercial Loan', desc: 'Commercial property financing made easy', color: '#f093fb' },
    { icon: '🚗', title: 'Vehicle Loan', desc: 'Drive your dream with affordable auto loans', color: '#4facfe' },
    { icon: '💳', title: 'Instant Cash', desc: 'Emergency funds available within 24 hours', color: '#43e97b' }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div 
          className="section-header"
          data-aos="fade-up"
        >
          <h2>Our Loan Services</h2>
          <p>Tailored financial solutions for every need</p>
        </motion.div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              style={{ borderTop: `4px solid ${service.color}` }}
            >
              <div className="service-icon" style={{ background: service.color }}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <motion.a 
                href="#apply"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
