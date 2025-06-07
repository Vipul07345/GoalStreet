import React from 'react';
import './TipsSection.css'; 

const TipsSection = () => {
  const imageUrl = 'https://i.postimg.cc/SQWSQv91/download-11.jpg';

  return (
      <div className='tips-title'>
      <h2 className="tips-image-url-heading">Tips</h2>
      <div className="tips-image-url-container">
      <div className="tips-image-url-content">
        <div className="learn-advertising-url">
          <h2>Learn Advertising</h2><br />
          <p>Merzado advertising and Marketing helps boost your sales</p>
        </div>
        </div>
        <div className="advertising-image-row">
          {Array.from({ length: 4 }).map((value, index) => (
            <img
              key={index}
              src={imageUrl}
              alt="Advertising Graphic"
              className="single-advertising-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsSection;