import React, { useState, useEffect } from 'react';
import './App.css';

import TopPage from './project2/TopPage';
import HomeContentSection from './project2/HomeContentSection';
import OpportunitiesSection from './project2/OpportunitiesSection';
import CourseSelector from './project2/CourseSelector';
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
import PostJob from './project2/Postingjob';

import LoginPage from './project2/LoginPage';
import SignupPage from './project2/SignupPage';
import Companies from './project2/Companies';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [showProgramsDropdown, setShowProgramsDropdown] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        try {
            const storedLoginStatus = localStorage.getItem('userLoggedIn');
            return storedLoginStatus === 'true';
        } catch (e) {
            console.error("Error accessing localStorage for login status during initialization:", e);
            return false;
        }
    });

    const [userData, setUserData] = useState(() => {
        try {
            const storedUserData = localStorage.getItem('userData');
            return storedUserData ? JSON.parse(storedUserData) : null;
        } catch (e) {
            console.error("Failed to parse stored user data from localStorage during initialization:", e);
            localStorage.removeItem('userData');
            localStorage.removeItem('userLoggedIn');
            return null;
        }
    });

    useEffect(() => {
        try {
            const storedLoginStatus = localStorage.getItem('userLoggedIn');
            const storedUserData = localStorage.getItem('userData');

            if (storedLoginStatus === 'true' && storedUserData) {
                const parsedUserData = JSON.parse(storedUserData);
                setIsLoggedIn(true);
                setUserData(parsedUserData);
            } else {
                setIsLoggedIn(false);
                setUserData(null);
                localStorage.removeItem('userLoggedIn');
                localStorage.removeItem('userData');
            }
        } catch (e) {
            console.error("Error in useEffect while restoring user data from localStorage:", e);
            localStorage.removeItem('userLoggedIn');
            localStorage.removeItem('userData');
            setIsLoggedIn(false);
            setUserData(null);
        }
    }, []);

    const handleAccessNowClick = () => {
        setCurrentPage('opportunities');
        setShowProgramsDropdown(false);
    };

    const handleApplyJobsClick = () => {
        setCurrentPage('applyJobSection');
        setShowProgramsDropdown(false);
    };

    const handlePostJobClick = () => {
        setCurrentPage('postJob');
        setShowProgramsDropdown(false);
    };

    const handleClosePostJobPage = () => {
        setCurrentPage('home');
    };

    const handleLogin = (dataFromLoginPage) => {
        setIsLoggedIn(true);
        setUserData(dataFromLoginPage);
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(dataFromLoginPage));
        setCurrentPage('home');
        setShowProgramsDropdown(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserData(null);
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('userData');
        setCurrentPage('home');
        setShowProgramsDropdown(false);
    };

    const handleCompaniesClick = () => {
        setCurrentPage('companies');
        setShowProgramsDropdown(false);
    };

    const handleCompaniesFindWorkClick = () => {
        setCurrentPage('findWork');
        setShowProgramsDropdown(false);
    };

    // New handler to redirect to login if not logged in
    const handleEnrollAttempt = () => {
        if (!isLoggedIn) {
            setCurrentPage('login'); // Redirect to login page
        }
        // If logged in, the actual enroll logic will be handled inside LearningJourneySection
    };


    const activeMainNavLink = currentPage;

    return (
        <div className='apptotalproject'>
            <TopPage
                isLoggedIn={isLoggedIn}
                onLoginClick={() => setCurrentPage('login')}
                onSignupClick={() => setCurrentPage('signup')}
                onLogoutClick={handleLogout}
                userData={userData}
            />

            <header className="header">
                <div className="logo" onClick={() => {
                    setCurrentPage('home');
                    setShowProgramsDropdown(false);
                }}>GOALSTREET</div>

                {isLoggedIn && (
                    <>
                        <nav className="nav-links">
                            <button
                                className={`nav-button ${activeMainNavLink === 'programs' ? 'active' : ''}`}
                                onMouseEnter={() => setShowProgramsDropdown(true)}
                                onMouseLeave={() => setShowProgramsDropdown(false)}
                                onClick={() => {
                                    setCurrentPage('programs');
                                    setShowProgramsDropdown(false);
                                }}
                            >
                                Programs
                            </button>
                            <button
                                className={`nav-button ${activeMainNavLink === 'findWork' ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentPage('findWork');
                                    setShowProgramsDropdown(false);
                                }}
                            >
                                Find Work
                            </button>
                            <button
                                className={`nav-button ${activeMainNavLink === 'AboutUs' ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentPage('AboutUs');
                                    setShowProgramsDropdown(false);
                                }}
                            >
                                About Us
                            </button>
                            <button
                                className={`nav-button ${activeMainNavLink === 'companies' ? 'active' : ''}`}
                                onClick={handleCompaniesClick}
                            >
                                Companies
                            </button>
                            <button
                                className={`nav-button ${activeMainNavLink === 'ContactUs' ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentPage('ContactUs');
                                    setShowProgramsDropdown(false);
                                }}
                            >
                                Contact Us
                            </button>
                        </nav>
                        <div className="header-actions">
                            <button className="apply-jobs-btn" onClick={handleApplyJobsClick}>
                                Apply Jobs (Beta )
                            </button>
                            <button className="post-job-btn" onClick={handlePostJobClick}>Post a Job</button>
                        </div>
                    </>
                )}
            </header>

            {showProgramsDropdown && isLoggedIn && (
                <div
                    className="programs-dropdown-overlay"
                    onMouseEnter={() => setShowProgramsDropdown(true)}
                    onMouseLeave={() => setShowProgramsDropdown(false)}
                >
                    <CourseSelector onCourseClick={handleApplyJobsClick} />
                </div>
            )}

            <div className="app-container">
                {currentPage === 'home' && (
                    <>
                        <HeroSection />
                        <HomeContentSection onAccessClick={handleAccessNowClick} />
                        <AspirantsSection />
                        <ConnectMentorsSection />
                        <LadderSection />
                        <MetricsSection />
                        <FAQSection />
                        <LearningJourneySection
                            isLoggedIn={isLoggedIn}
                            onEnrollClick={handleEnrollAttempt}
                        />
                        <ContactUsSection />
                    </>
                )}
                {currentPage === 'programs' && <CourseSelector onCourseClick={handleApplyJobsClick} />}
                {currentPage === 'opportunities' && <OpportunitiesSection />}
                {currentPage === 'findWork' && <FindWorkSection />}
                {currentPage === 'AboutUs' && <AboutUsSection />}
                {currentPage === 'ContactUs' && <ContactUsSection />}

                {currentPage === 'applyJobSection' && isLoggedIn && (
                    <div>
                        <RegisterPage initialForm="register" />
                    </div>
                )}

                {currentPage === 'postJob' && isLoggedIn && (
                    <div>
                        <PostJob onClose={handleClosePostJobPage} />
                    </div>
                )}

                {currentPage === 'companies' && <Companies onFindWorkClick={handleCompaniesFindWorkClick} />}

                {currentPage === 'login' && !isLoggedIn && <LoginPage onLoginSuccess={handleLogin} />}
                {currentPage === 'signup' && !isLoggedIn && <SignupPage onSignupSuccess={handleLogin} />}

                {/* This block handles redirects to login if certain actions are attempted while logged out */}
                {(currentPage === 'applyJobSection' || currentPage === 'postJob') && !isLoggedIn && (
                    <LoginPage onLoginSuccess={handleLogin} />
                )}
            </div>

            <Footer />
        </div>
    );
};

export default App;