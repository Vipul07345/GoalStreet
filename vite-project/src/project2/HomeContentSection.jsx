import React from 'react';
import './HomeContentSection.css'; // Import its own CSS

function HomeContentSection({ onAccessClick }) {
  return (
    <>
      
      <div className="footer-access">
        <button className="access-now-btn" onClick={onAccessClick}>
          Access Now <span className="arrow-down">↓</span>
        </button>
        <img className='footer-image' src="https://i.postimg.cc/xCKwQPts/240-F-1169636888-z97-BSJi0w0m-KKJAK9-Ogwe-ZVYc-Fpry31-W.jpgs" alt="" />
      </div>
    </>
  );
}

export default HomeContentSection;
