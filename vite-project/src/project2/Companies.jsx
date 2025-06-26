import React from 'react';
import './Companies.css';

const Companies = ({ onFindWorkClick }) => { // Accept onFindWorkClick as a prop
  return (
    <div className='companies-section'>
      <div className='companies-content'>
        <div className='companies-heading-wrapper'>
          <h1 className='companies-career-talkz'>
            <span className='companies-orange'>CAREER</span>
            <span className='companies-ash'> TALKZ </span>
            <span className='companies-ash-light'>& MORE</span>
          </h1>
        </div>
        <div className='companies-main-message'>
          <h2 className='companies-we-help-you-grow'>WE HELP YOU <br />GROW!</h2>
          <p className='companies-description'>
            it's a collaborative ecosystem that<br />envisions a future where students and<br />companies grow together
          </p>
          <button
            className='companies-find-work-button'
            onClick={onFindWorkClick} // Call the passed prop function on click
          >
            Find Work
          </button>
        </div>
      </div>
      <div className='companies-image-container'>
        <img
          className='companies-hero-image'
          src="https://i.postimg.cc/d3TT4Ly1/Events-FKTD5r-TB.webp"
          alt="Illustration of a mentor leading a young person from Zero to Hero"
        />
      </div>
    </div>
  );
}

export default Companies;