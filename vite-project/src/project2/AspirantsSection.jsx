import React from 'react';
import './AspirantsSection.css';

function AspirantsSection() {
  return (
    <div className="aspirants-section-wrapper">
      <div className="aspirants-section-container">
        <h2 className="aspirants-title">
          Our Aspirants placed in 30+ sector-leading companies
        </h2>
        <div className="company-logos">
          <div className="logo-card">
            <img src="https://i.postimg.cc/LXWFNsQS/download.png" alt="Google Logo" className="company-logo-image" />
          </div>
          <div className="logo-card">
            <img src="https://i.postimg.cc/KvxhfCJR/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.webp" alt="Amazon Logo" className="company-logo-image" />
          </div>
          <div className="logo-card">
            <img src="https://i.postimg.cc/VNSx5wLH/Cognizant-for-SM-white-background-Logo.jpg" alt="Cognizant Logo" className="company-logo-image" />
          </div>
          <div className="logo-card">
            <img src="https://i.postimg.cc/fLfBRqXr/IFS-Partner-Wipro-logo-670x300-30052023.jpg" alt="Wipro Logo" className="company-logo-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AspirantsSection;
