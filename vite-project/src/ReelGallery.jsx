import React, { useState } from 'react';
import './ReelGallery.css';

const reelsData = [
  {
    id: 1,
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    caption: 'The Important',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/embed/YbJOTdZBX1g',
    caption: 'I didn’t',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    caption: 'Vanity is',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    caption: 'The Difference',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/embed/YbJOTdZBX1g',
    caption: 'It’s Hard',
  },
  {
    id: 6,
    url: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    caption: 'Vanity is',
  },
  {
    id: 7,
    url: 'https://www.youtube.com/embed/YbJOTdZBX1g',
    caption: 'I didn’t',
  },
  {
    id: 8,
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    caption: 'The Difference',
  }
];

const ReelGallery = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>2020 <br /> <strong>Recent looks</strong></h2>
        <p>Discover now</p>
      </div>
      <div className="reels-grid">
        {reelsData.slice(0, visibleCount).map(reel => (
          <div key={reel.id} className="reel-card">
            <div className="video-wrapper">
              <iframe
                src={reel.url}
              />
            </div>
            <div className="caption">{reel.caption}</div>
          </div>
        ))}
      </div>
      {visibleCount < reelsData.length && (
        <button className="view-more" onClick={handleViewMore}>
          View More ↓
        </button>
      )}
    </div>
  );
};

export default ReelGallery;
