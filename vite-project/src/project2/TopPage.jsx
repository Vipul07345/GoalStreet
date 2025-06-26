// project2/TopPage.jsx - Updated to include a wrapper for centered content
import React from 'react';
import './TopPage.css';
import { BsRocketTakeoffFill } from "react-icons/bs";

function TopPage({ isLoggedIn, onLoginClick, onSignupClick, onLogoutClick }) {
  return (
    <div className="top-page-container">
      <div className="top-page-content">
        {/* NEW WRAPPER for the content that should be centered */}
        <div className="top-page-center-content">
          <span className="top-page-icon" role="img" aria-label="party popper"><BsRocketTakeoffFill /></span>
          <span className="top-page-text">cohort is launching soon</span>
          <button className="join-waitlist-button">
            Join waitlist <span className="button-arrow">→</span>
          </button>
        </div>
        {/* END NEW WRAPPER */}

        {/* Authentication buttons - remains on the far right */}
        <div className="auth-buttons-container">
          {isLoggedIn ? (
            <button onClick={onLogoutClick} className="auth-buttonlogout-button">Logout</button>
          ) : (
            <>
              <button onClick={onLoginClick} className="auth-buttonlogin-button">Login</button>
              <button onClick={onSignupClick} className="auth-buttonsignup-button">Signup</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopPage;