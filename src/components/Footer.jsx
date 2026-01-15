import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <motion.div 
            className="contact-content"
            data-aos="fade-up"
          >
            <h2>Get in Touch</h2>
            <div className="contact-grid">
              <motion.div className="contact-info" whileHover={{ scale: 1.02 }}>
                <i className="fas fa-map-marker-alt"></i>
                <h3>Visit Us</h3>
                <p>E-49 Vijay Block, Laxmi Nagar<br/>Delhi, India</p>
              </motion.div>
              <motion.div className="contact-info" whileHover={{ scale: 1.02 }}>
                <i className="fas fa-phone"></i>
                <h3>Call Us</h3>
                <p>+91 87500 39084</p>
              </motion.div>
              <motion.div className="contact-info" whileHover={{ scale: 1.02 }}>
                <i className="fas fa-envelope"></i>
                <h3>Email Us</h3>
                <p>saeed@capgrowfinance.com</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <Logo />
              <p>Your trusted partner for financial growth and prosperity.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#apply">Personal Loan</a></li>
                <li><a href="#apply">Business Loan</a></li>
                <li><a href="#apply">Education Loan</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <motion.a href="#" whileHover={{ scale: 1.2 }}><i className="fab fa-facebook"></i></motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2 }}><i className="fab fa-instagram"></i></motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2 }}><i className="fab fa-linkedin"></i></motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2 }}><i className="fab fa-twitter"></i></motion.a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Capital Growth Finance. All rights reserved. | <a href="https://capgrowfinance.com">capgrowfinance.com</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}
