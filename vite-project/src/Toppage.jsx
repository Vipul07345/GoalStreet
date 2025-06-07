import React from 'react';
import './Toppage.css'

const Toppage = () => {
  return (
    <div className="camera-card">
      <div className='content-camera' style={{padding:20}}>
      <h2>Photo camera/ Action camera</h2>
      <h1>Most Versatile<br/> Cameras In The Game</h1>
      <p>Unreal 5.3K60 + 4K120 video resolution</p>
      <p>+23 megapixel photos</p>
      <button className="shop-button">Shop Now</button>
      </div>
    </div>
  );
};

export default Toppage;