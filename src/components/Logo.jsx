import React from 'react';
import './Logo.css';

export default function Logo() {
  return (
    <div className="custom-logo">
      <div className="logo-icon">
        <div className="arrow-up">▲</div>
      </div>
      <div className="logo-text">
        <span className="capital">CAPITAL</span>
        <span className="growth">GROWTH</span>
      </div>
    </div>
  );
}
