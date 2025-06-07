import React, { useState, useEffect } from 'react';
import './RegisterPage.css';

const RegisterPage = ({ initialForm }) => {
    // initialForm can now be 'register', 'college', 'hr', or 'applyJob'
    const [activeForm, setActiveForm] = useState(initialForm || 'register');

    useEffect(() => {
        // Ensure that if initialForm changes (e.g., from an external prop), the form updates
        if (initialForm) {
            setActiveForm(initialForm);
        }
    }, [initialForm]);

    const renderFormContent = () => {
        switch (activeForm) {
            case 'register':
                return (
                    <>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                placeholder="Sai Charan"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mobile"
                                placeholder="9878787123"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="collegeEmail">Your college Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="collegeEmail"
                                placeholder="20311A05M7@sreenidhi.edu.in"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="collegeName">Your college Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="collegeName"
                                placeholder="NIT Trichy"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passingOutYear">Passing out year</label>
                            <input
                                type="text"
                                className="form-control"
                                id="passingOutYear"
                                placeholder="2024"
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="domain1">Please Select a Domain ?</label>
                                <select id="domain1" className="form-control">
                                    <option>select an option</option>
                                    <option>Software Development</option>
                                    <option>Data Science</option>
                                    <option>Cybersecurity</option>
                                    <option>Cloud Computing</option>
                                    <option>Machine Learning</option>
                                    <option>Networking</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="domain2">Select a 2nd Domain ?</label>
                                <select id="domain2" className="form-control">
                                    <option>select an option</option>
                                    <option>Cloud Computing</option>
                                    <option>Machine Learning</option>
                                    <option>Networking</option>
                                    <option>Software Development</option>
                                    <option>Data Science</option>
                                    <option>Cybersecurity</option>
                                </select>
                            </div>
                        </div>
                    </>
                );
            case 'college':
                return (
                    <>
                        <div className="form-group">
                            <label htmlFor="collegeNameCollege">College Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="collegeNameCollege"
                                placeholder="Sastra University"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pocName">Point of Contact Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pocName"
                                placeholder="Google"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pocMobile">Point of Contact Mobile</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pocMobile"
                                placeholder="9878787123"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pocEmail">Point of Contact Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="pocEmail"
                                placeholder="20311A05M7@sreenidhi.edu.in"
                            />
                        </div>
                    </>
                );
            case 'hr':
                return (
                    <>
                        <div className="form-group">
                            <label htmlFor="hrFullName">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="hrFullName"
                                placeholder="Sai Charan"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="companyName"
                                placeholder="Google"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hrMobile">Mobile</label>
                            <input
                                type="text"
                                className="form-control"
                                id="hrMobile"
                                placeholder="9878787123"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="companyEmail">Your Company Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="companyEmail"
                                placeholder="20311A05M7@sreenidhi.edu.in"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="industry">Industry</label>
                            <input
                                type="text"
                                className="form-control"
                                id="industry"
                                placeholder="Health"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="companySize">Company Size</label>
                            <input
                                type="text"
                                className="form-control"
                                id="companySize"
                                placeholder="1"
                            />
                        </div>
                        {/* <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="terms" />
                            <label className="form-check-label" htmlFor="terms">
                                Agree to <a href="#">terms and conditions</a>
                            </label>
                        </div> */}
                    </>
                );
            case 'applyJob': // This is the simplified "Apply Job" form
                return (
                    <>
                        <p className="form-description">Fill out the details below to apply for a job.</p>
                        <div className="form-group">
                            <label htmlFor="jobApplicantName">Your Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="jobApplicantName"
                                placeholder="Your Full Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobApplicantEmail">Your Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="jobApplicantEmail"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resumeUpload">Upload Resume</label>
                            <input
                                type="file"
                                className="form-control"
                                id="resumeUpload"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="coverLetter">Cover Letter (Optional)</label>
                            <textarea
                                className="form-control"
                                id="coverLetter"
                                rows="4"
                                placeholder="Tell us about yourself and why you're a good fit..."
                            ></textarea>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    const getTitle = () => {
        switch (activeForm) {
            case 'register':
                return 'Register';
            case 'college':
                return 'College Register';
            case 'hr':
                return 'HR Register';
            case 'applyJob':
                return 'Apply Job (Beta)';
            default:
                return 'Register';
        }
    };

    const renderHeaderLinks = () => {
        switch (activeForm) {
            case 'register':
                return (
                    <>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('college'); }}>Join as college</a>
                        {' / '}
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('hr'); }}>Hire From Us</a>
                    </>
                );
            case 'college':
                return (
                    <>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('register'); }}>Join as student</a>
                        {' / '}
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('hr'); }}>Hire From Us</a>
                    </>
                );
            case 'hr':
                return (
                    <>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('college'); }}>Join as college</a>
                        {' / '}
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('register'); }}>Join as student</a>
                    </>
                );
            case 'applyJob': // This specific form is not used in App.jsx for the new section now
                return (
                    <>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('register'); }}>Join as student</a>
                        {' / '}
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('college'); }}>Join as college</a>
                        {' / '}
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('hr'); }}>Hire From Us</a>
                        {' / '}
                        {/* <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('applyJob'); }}>Apply Job (Beta)</a> */}
                        {/* This link is redundant if 'applyJob' form is not accessed this way */}
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                {/* Close button removed as it's not a modal now, and not in your target image */}
                {/* {onClose && activeForm === 'applyJob' && (
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                )} */}
                {/* If you still want a close button for the section, you can add it here and style it differently */}
                {/* Example: A button to go back to home page */}
                {/* {onClose && (
                    <button className="back-to-home-button" onClick={onClose}>
                        ← Back to Home
                    </button>
                )} */}


                <div className="card-header">
                    <span className="info-icon">
                        <i></i> {/* The background-image for this 'i' is in RegisterPage.css */}
                    </span>
                    <h2>{getTitle()}</h2>
                    <div className="links">
                        {renderHeaderLinks()}
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        {renderFormContent()}
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;