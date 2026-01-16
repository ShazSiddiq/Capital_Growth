import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div className="logo" whileHover={{ scale: 1.05 }}>
          <Logo />
        </motion.div>
        
        <ul className="nav-links">
          <motion.li whileHover={{ scale: 1.1 }}><a href="#home">Home</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><a href="#services">Services</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><a href="#about">About</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><a href="#contact">Contact</a></motion.li>
        </ul>
        
        <motion.a 
          href="#apply" 
          className="cta-btn desktop-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now
        </motion.a>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#apply" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>Apply Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
