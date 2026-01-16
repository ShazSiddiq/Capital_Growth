import React from 'react';
import { motion } from 'framer-motion';
import './ParticleBackground.css';

export default function ParticleBackground() {
  const symbols = ['₹', '$', '💰', '💵', '💳', '📈', '₹', '$', '💰', '₹', '$', '💰', '💵', '💳', '📈', '₹', '$', '💰', '₹', '$', '💰', '💵', '💳', '📈', '₹', '$', '💰', '₹', '$', '💰'];

  return (
    <div className="particle-container">
      {symbols.map((symbol, index) => (
        <motion.div
          key={index}
          className="particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0.5, 1, 0.5],
            rotate: 360
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
}
