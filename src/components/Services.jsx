import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

export default function Services() {
  const services = [
    { icon: '🏠', title: 'Personal Loan', desc: 'Quick personal loans with flexible repayment options and competitive interest rates' },
    { icon: '💼', title: 'Business Loan', desc: 'Fuel your business growth with customized financing solutions' },
    { icon: '🎓', title: 'Education Loan', desc: 'Invest in your future with affordable education financing' },
    { icon: '🏢', title: 'Commercial Loan', desc: 'Commercial property financing with attractive terms' },
    { icon: '🚗', title: 'Vehicle Loan', desc: 'Drive your dream vehicle with easy auto financing' },
    { icon: '💳', title: 'Instant Cash', desc: 'Emergency funds available within 24 hours' }
  ];

  const floatingSymbols = ['₹', '$', '💰', '💵', '💳', '📈', '₹', '$', '💰', '₹', '$', '💰', '💵', '💳', '📈', '₹', '$', '💰', '₹', '$'];

  return (
    <section className="services" id="services">
      <div className="services-particles">
        {floatingSymbols.map((symbol, index) => (
          <motion.div
            key={index}
            className="service-particle"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: -50,
              opacity: 0
            }}
            animate={{
              y: 1000,
              opacity: [0, 0.15, 0.15, 0],
              rotate: 360
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "linear"
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
      <div className="container">
        <motion.div 
          className="section-header"
          data-aos="fade-up"
        >
          <h2>Our Financial Services</h2>
          <p>Comprehensive loan solutions tailored to your needs</p>
        </motion.div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(26, 95, 63, 0.1)' }}
            >
              <div className="service-icon">{service.icon}</div>
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
