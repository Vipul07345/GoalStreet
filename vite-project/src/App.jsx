import React, { useState } from 'react';
import './App.css'; // This is where the main page styles are

// Import your existing components
import TopPage from './project2/TopPage';
import HomeContentSection from './project2/HomeContentSection';
import OpportunitiesSection from './project2/OpportunitiesSection';
import CourseSelector from './project2/CourseSelector'; // Keep CourseSelector import
import HeroSection from './project2/HeroSection';
import AspirantsSection from './project2/AspirantsSection';
import FindWorkSection from './project2/FindWorkSection';
import AboutUsSection from './project2/AboutUsSection';
import ContactUsSection from './project2/ContactUsSection';
import RegisterPage from './project2/RegisterPage';
import Footer from './project2/Footer';
import ConnectMentorsSection from './project2/ConnectMentorsSection.';
import LadderSection from './project2/LadderSection';
import MetricsSection from './project2/MetricsSection';
import FAQSection from './project2/FAQSection';
import LearningJourneySection from './project2/LearningJourneySection';


const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    // State to control the visibility of CourseSelector on hover
    const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);

    const handleAccessNowClick = () => {
        setCurrentPage('opportunities');
        setShowProgramsDropdown(false); // Hide dropdown on navigation
    };

    const handleApplyJobsClick = () => {
        setCurrentPage('applyJobSection');
        setShowProgramsDropdown(false); // Hide dropdown on navigation
    };

    const handleCloseRegisterPageSection = () => {
        setCurrentPage('home');
        setShowProgramsDropdown(false); // Hide dropdown on navigation
    };

    const activeMainNavLink = currentPage;

    return (
        <div className='apptotalproject'>
            <TopPage />

            <header className="header">
                <div className="logo" onClick={() => {
                    setCurrentPage('home');
                    setShowProgramsDropdown(false); // Hide dropdown on logo click
                }}>GOALSTREET</div>
                <nav className="nav-links">
                    <button
                        className={`nav-button ${activeMainNavLink === 'programs' ? 'active' : ''}`}
                        onMouseEnter={() => setShowProgramsDropdown(true)} // Show dropdown on mouse hover
                        onMouseLeave={() => setShowProgramsDropdown(false)} // Hide dropdown on mouse leave
                        onClick={() => {
                            setCurrentPage('programs'); // Navigate to the 'programs' page
                            setShowProgramsDropdown(false); // Hide dropdown if clicked
                        }}
                    >
                        Programs
                    </button>
                    <button
                        className={`nav-button ${activeMainNavLink === 'findWork' ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentPage('findWork');
                            setShowProgramsDropdown(false); // Hide dropdown on other nav clicks
                        }}
                    >
                        Find Work
                    </button>
                    <button
                        className={`nav-button ${activeMainNavLink === 'AboutUs' ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentPage('AboutUs');
                            setShowProgramsDropdown(false); // Hide dropdown on other nav clicks
                        }}
                    >
                        About Us
                    </button>
                    <button className="nav-button" onClick={() => setShowProgramsDropdown(false)}>Companies</button>
                    <button
                        className={`nav-button ${activeMainNavLink === 'ContactUs' ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentPage('ContactUs');
                            setShowProgramsDropdown(false); // Hide dropdown on other nav clicks
                        }}
                    >
                        Contact Us
                    </button>
                </nav>
                <div className="header-actions">
                    <button className="apply-jobs-btn" onClick={handleApplyJobsClick}>
                        Apply Jobs (Beta )
                    </button>
                    <button className="post-job-btn" onClick={handleApplyJobsClick}>Post a Job</button>
                </div>
            </header>

            {/* Conditionally render CourseSelector as an overlay/dropdown */}
            {showProgramsDropdown && (
                <div
                    className="programs-dropdown-overlay"
                    onMouseEnter={() => setShowProgramsDropdown(true)} // Keep open if mouse enters the overlay
                    onMouseLeave={() => setShowProgramsDropdown(false)} // Close if mouse leaves the overlay
                >
                    <CourseSelector onCourseClick={handleApplyJobsClick} />
                    {/* You could potentially include LearningJourneySection here if you want both in the same dropdown */}
                    {/* <LearningJourneySection /> */}
                </div>
            )}

            <div className="app-container">
                {/* Main content rendering based on currentPage */}
                {currentPage === 'home' && (
                    <>
                        <HeroSection />
                        <HomeContentSection onAccessClick={handleAccessNowClick} />
                        <AspirantsSection />
                        <ConnectMentorsSection/>
                        <LadderSection/>
                        <MetricsSection/>
                        <FAQSection/>
                        <LearningJourneySection/> {/* LearningJourneySection is still on the home page */}
                        <ContactUsSection/>
                    </>
                )}
                {currentPage === 'programs' && (
                    <CourseSelector onCourseClick={handleApplyJobsClick} />
                )}
                {currentPage === 'opportunities' && <OpportunitiesSection />}
                {currentPage === 'findWork' && <FindWorkSection />}
                {currentPage === 'AboutUs' && <AboutUsSection />}
                {currentPage === 'ContactUs' && <ContactUsSection />}

                {currentPage === 'applyJobSection' && (
                    <div>
                        <RegisterPage
                            initialForm="register"
                            onClose={handleCloseRegisterPageSection}
                        />
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default App;