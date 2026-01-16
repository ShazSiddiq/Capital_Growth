import React from 'react';
import { motion } from 'framer-motion';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918750039084"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <i className="fab fa-whatsapp"></i>
    </motion.a>
  );
}
