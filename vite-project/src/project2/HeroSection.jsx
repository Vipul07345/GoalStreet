import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section-container">
      <h1 className="hero-title">
        Goal <span className="highlight-orange">Street</span> Interships is not just a platform ;
      </h1>
      <p className="hero-subtitle">
        it's a collaborative ecosystem that envisions a future where students and companies grow together
      </p>
    </div>
  );
}

export default HeroSection;
