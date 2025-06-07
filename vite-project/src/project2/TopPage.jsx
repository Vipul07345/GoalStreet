import React from 'react';
import './TopPage.css';
import { BsRocketTakeoffFill } from "react-icons/bs";

function TopPage() {
  return (
    <div className="top-page-container">
      <div className="top-page-content">
        <span className="top-page-icon" role="img" aria-label="party popper"><BsRocketTakeoffFill /></span>
        <span className="top-page-text">cohort is launching soon</span>
        <button className="join-waitlist-button">
          Join waitlist <span className="button-arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default TopPage;