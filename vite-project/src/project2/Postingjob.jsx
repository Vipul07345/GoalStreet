import React, { useState } from 'react';
import './PostJob.css'; // You'll need to create this CSS file for styling

const PostJob = () => {
    // Default to 'hr' form when PostJob component is loaded
    const [activeForm, setActiveForm] = useState('hr');

    const renderFormContent = () => {
        switch (activeForm) {
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
                    </>
                );
            case 'applyJob':
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
            case 'hr':
                return 'HR Registration / Post a Job';
            case 'applyJob':
                return 'Apply for a Job';
            default:
                return 'Form';
        }
    };

    return (
        <div className="post-job-container">
            <div className="post-job-card">
                <div className="card-header">
                    <span className="info-icon">
                        <i></i>
                    </span>
                    <h2>{getTitle()}</h2>
                </div>
                <div className="card-body">
                    <form>
                        {renderFormContent()}
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="card-footer">
                    {activeForm === 'hr' ? (
                        <button className="btn-switch-form" onClick={() => setActiveForm('applyJob')}>
                            Looking to Apply for a Job?
                        </button>
                    ) : (
                        <button className="btn-switch-form" onClick={() => setActiveForm('hr')}>
                            Are you an HR? Post a Job!
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostJob;