import React from 'react';
import './OpportunitiesSection.css';

function OpportunitiesSection() {
  return (
    <div className="opportunities-section-container">
      <h2 className="opportunities-title">Oppurtunities are here</h2>
      <div className="opportunities-grid">
        <div className="opportunity-card">
          <img src="https://i.postimg.cc/yd10v1gL/Mern-Stack-BIs-EIML.jpg" alt="MEAN Stack" className="opportunity-image" />
          <p className="opportunity-label">Mern Stack</p>
        </div>
        <div className="opportunity-card">
          <img src="https://i.postimg.cc/x1LHQJLs/Aws-DTwu-p6y.jpg" alt="AWS" className="opportunity-image" />
          <p className="opportunity-label">AWS</p>
        </div>
        <div className="opportunity-card">
          <img src="https://i.postimg.cc/pLMhsW3K/Kotlin-Bl-G7ew3-B.jpg" alt="Kotlin" className="opportunity-image" />
          <p className="opportunity-label">Kotlin</p>
        </div>
        <div className="opportunity-card">
          <img src="https://i.postimg.cc/90pm129Y/Nodejs-Dc-SRVyy-N.jpg" alt="Node.js" className="opportunity-image" />
          <p className="opportunitys-label">Node js</p>
        </div>
        <div className="opportunity-card">
          <img src="https://i.postimg.cc/B63fzy4Y/Django-Cj-QOPtt-S.jpg" alt="Django" className="opportunity-image" />
          <p className="opportunity-label">Django</p>
        </div>
        <div className="opportunity-card">
          <img src="https://i.postimg.cc/KjvSGMKt/RPA-DVMNLfp-V.jpg" alt="RPA" className="opportunity-image" />
          <p className="opportunity-label">RPA</p>
        </div>
        <div className="opportunity-card">
          <img src="https://i.postimg.cc/B6nMtcgZ/CS-BZd6-In-Ln.jpg" alt="Cyber Security" className="opportunity-image" />
          <p className="opportunity-label">Cyber Security</p>
        </div>
        <div className="opportunity-card">
          <img src="https://i.postimg.cc/bv3RXSj7/DEVOPS-Cp-Grl-Ee1.jpg" alt="DevOps" className="opportunity-image" />
          <p className="opportunity-label">DevOps</p>
        </div>
      </div>
    </div>
  );
}

export default OpportunitiesSection;
