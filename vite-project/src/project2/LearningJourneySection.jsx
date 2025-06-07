// project2/LearningJourneySection.jsx
import React from 'react';
import './LearningJourneySection.css'; // Import the CSS for this component
import { PiCaretDoubleUpFill } from "react-icons/pi";
import { IoIosCheckmark } from "react-icons/io";

const LearningJourneySection = () => {
    // Reusable SVG for the checkmark icon in feature lists
    const CheckmarkIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="feature-checkmark">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
    );

    const growthFeatures = [
        "Recorded Classes",
        "Live doubt clearing Sessions",
        "Labs & Challenges",
        "Projects",
        "Certificate",
        "Internship Offer from Companies (Online/ Offline)",
        "Support Post Internship"
    ];

    const foundationFeatures = [
        "Live Classes",
        "Recorded Classes",
        "Live doubt clearing Sessions",
        "Access to Webinars - Recruiters from Companies",
        "Access to Mentors 24/7",
        "Customised Learning path",
        "Labs & Challenges",
        "Projects",
        "Certificate",
        "Internship Offer from Companies"
    ];

    return (
        <section className="learning-journey-section-container">
            <h2 className="learning-journey-main-heading">Plan your design learning journey</h2>
            <div className="course-cards-wrapper">
                {/* Growth Card */}
                <div className="course-card growth-card">
                    <div className="card-header-top">
                        {/* Replaced UpArrowIcon with PiCaretDoubleUpFill */}
                        <PiCaretDoubleUpFill className="card-header-icon" />
                        <span className="price">₹2000/-</span>
                        <span className="gst-info">Ind. GST</span>
                    </div>
                    <h3 className="course-title">Growth</h3>
                    <p className="course-description">Recorded Learning Experience</p>
                    <ul className="feature-list">
                        {growthFeatures.map((feature, index) => (
                            <li key={index} className="feature-item">
                                <i className='course-tickbox1'><IoIosCheckmark /></i>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button className="enroll-button">Enroll now</button>
                </div>

                {/* Foundation Card */}
                <div className="course-card foundation-card">
                    <div className="card-header-top">
                        {/* Replaced UpArrowIcon with PiCaretDoubleUpFill */}
                        <PiCaretDoubleUpFill className="card-header-icon" />
                        <span className="price">₹4000/-</span>
                        <span className="gst-info">Ind. GST</span>
                    </div>
                    <h3 className="course-title">Foundation</h3>
                    <p className="course-description">Comprehensive Learning Experience</p>
                    <ul className="feature-list">
                        {foundationFeatures.map((feature, index) => (
                            <li key={index} className="feature-item">
                               <i className='course-tickbox2'><IoIosCheckmark /></i>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button className="enroll-button">Enroll now</button>
                </div>
            </div>
        </section>
    );
};

export default LearningJourneySection;
