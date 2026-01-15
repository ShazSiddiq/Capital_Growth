import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const stats = [
    { number: 5000, suffix: '+', label: 'Happy Customers', icon: '😊' },
    { number: 99, suffix: '%', label: 'Approval Rate', icon: '✅' },
    { number: 50, suffix: 'Cr+', label: 'Loans Disbursed', icon: '💰' },
    { number: 24, suffix: 'hrs', label: 'Quick Processing', icon: '⚡' }
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              data-aos="flip-up"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                {inView && <CountUp end={stat.number} duration={2.5} />}
                <span>{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
