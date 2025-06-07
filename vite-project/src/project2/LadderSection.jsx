// project2/LadderSection.jsx
import React from 'react';
import './LadderSection.css'; // Import the CSS for this component
import ladderImage from '/image.svg?url'; // Correct way to import a public asset's URL in Vite

const LadderSection = () => {
    return (
        <section className="ladder-section-container">
            <div className="ladder-content-wrapper">
                {/* Left side: Text content */}
                <div className="ladder-text-content">
                    <h2 className='ladder-heading'>YT videos, courses, and lectures <br /> only take you from 0 &rarr; 1</h2>
                    <p className='ladder-para'>What takes you beyond is practice, feedback, and building hands-on projects</p>
                </div>

                {/* Right side: Ladder graphic (using <img> tag) */}
                <div className="ladder-graphic-container">
                    {/* The ladder graphic embedded as an image */}
                    <img src={ladderImage} alt="Ladder representing progress" className="ladder-image" />

                </div>
            </div>
        </section>
    );
};

export default LadderSection;
