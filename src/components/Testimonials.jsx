import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    { name: 'Rajesh Kumar', role: 'Business Owner', text: 'Got my business loan approved in just 24 hours! Excellent service.', rating: 5 },
    { name: 'Priya Sharma', role: 'Teacher', text: 'Very professional team. They helped me get the best education loan for my daughter.', rating: 5 },
    { name: 'Amit Patel', role: 'Entrepreneur', text: 'Low interest rates and flexible repayment options. Highly recommended!', rating: 5 }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          data-aos="fade-up"
        >
          <h2>What Our Clients Say</h2>
          <p>Trusted by thousands of satisfied customers</p>
        </motion.div>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{item.text}</p>
              <div className="stars">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <div className="testimonial-author">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
