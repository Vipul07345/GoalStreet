import React, { useState } from 'react';
import './LearningJourneySection.css';
import { PiCaretDoubleUpFill } from "react-icons/pi";
import { IoIosCheckmark } from "react-icons/io";
import GrowthPage from './GrowthPage';
import Foundation from './Foundation';


// Accept isLoggedIn and onEnrollClick as props
const LearningJourneySection = ({ isLoggedIn, onEnrollClick }) => {
    const [showGrowthForm, setShowGrowthForm] = useState(false);
    const [showFoundationForm, setShowFoundationForm] = useState(false);

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

    const handleGrowthEnrollClick = () => {
        if (!isLoggedIn) {
            onEnrollClick(); // Redirect to login if not logged in
        } else {
            setShowGrowthForm(true);
            setShowFoundationForm(false);
        }
    };

    const handleFoundationEnrollClick = () => {
        if (!isLoggedIn) {
            onEnrollClick(); // Redirect to login if not logged in
        } else {
            setShowFoundationForm(true);
            setShowGrowthForm(false);
        }
    };

    const handleBackToCards = () => {
        setShowGrowthForm(false);
        setShowFoundationForm(false);
    };

    return (
        <section className="learning-journey-section-container">
            <h2 className="learning-journey-main-heading">Plan your design learning journey</h2>

            {showGrowthForm ? (
                <GrowthPage onGoBack={handleBackToCards} />
            ) : showFoundationForm ? (
                <Foundation onGoBack={handleBackToCards}/>
            ) : (
                <div className="course-cards-wrapper">
                    <div className="course-card growth-card">
                        <div className="card-header-top">
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
                        <button className="enroll-button" onClick={handleGrowthEnrollClick}>Enroll now</button>
                    </div>

                    <div className="course-card foundation-card">
                        <div className="card-header-top">
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
                        <button className="enroll-button" onClick={handleFoundationEnrollClick}>Enroll now</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default LearningJourneySection;