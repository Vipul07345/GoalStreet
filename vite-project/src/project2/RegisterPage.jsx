import React, { useState, useEffect } from 'react';
import './RegisterPage.css';
import axios from 'axios';

const RegisterPage = ({ initialForm }) => {
    const [activeForm, setActiveForm] = useState(initialForm || 'register');

    const initialRegisterData = {
        FullName: '',
        Mobile: '',
        CollegeEmail: '',
        CollegeName: '',
        PassingYear: '',
        Domain1: 'select an option',
        Domain2: 'select an option',
    };
    const [registerData, setRegisterData] = useState(initialRegisterData);

    const initialCollegeData = {
        CollegeName: '',
        ContactName: '',
        ContactMobile: '',
        ContactEmail: '',
    };
    const [collegeData, setCollegeData] = useState(initialCollegeData);

    const initialHrData = {
        HRFullName: '',
        CompanyName: '',
        MobileNumber: '',
        CompanyEmail: '',
        Industry: '',
        CompanySize: '',
    };
    const [hrData, setHrData] = useState(initialHrData);

    const initialApplyJobData = {
        jobApplicantName: '',
        jobApplicantEmail: '',
        resumeUpload: null,
        coverLetter: '',
    };
    const [applyJobData, setApplyJobData] = useState(initialApplyJobData);

    useEffect(() => {
        if (initialForm) {
            setActiveForm(initialForm);
        }
    }, [initialForm]);


    const handleChange = (e, formType) => {
        const { id, value } = e.target;
        switch (formType) {
            case 'register':
                setRegisterData(prevData => ({ ...prevData, [id]: value }));
                break;
            case 'college':
                setCollegeData(prevData => ({ ...prevData, [id]: value }));
                break;
            case 'hr':
                setHrData(prevData => ({ ...prevData, [id]: value }));
                break;
            case 'applyJob':
                setApplyJobData(prevData => ({ ...prevData, [id]: value }));
                break;
            default:
                break;
        }
    };

    const handleFileChange = (e) => {
        setApplyJobData(prevData => ({ ...prevData, resumeUpload: e.target.files[0] }));
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitting form: ${activeForm}`);

        let apiCall;
        let successMessage = '';
        let errorMessage = '';
        let resetFunction;

        if (activeForm === "register") {
            console.log("Register Data:", registerData);
            apiCall = axios.post(`/api/register`, registerData);
            successMessage = 'Registration successful!';
            errorMessage = 'Error submitting register form:';
            resetFunction = () => setRegisterData(initialRegisterData);
        } else if (activeForm === "college") {
            console.log("College Data:", collegeData);
            apiCall = axios.post(`${process.env.REACT_APP_BASE_URL}/api/college`, collegeData);
            successMessage = 'College registration successful!';
            errorMessage = 'Error submitting college form:';
            resetFunction = () => setCollegeData(initialCollegeData);
        } else if (activeForm === "hr") {
            console.log("HR Data:", hrData);
            apiCall = axios.post(`${process.env.REACT_APP_BASE_URL}/api/hr`, hrData);
            successMessage = 'HR registration successful!';
            errorMessage = 'Error submitting HR form:';
            resetFunction = () => setHrData(initialHrData);
        } else if (activeForm === "applyJob") {
            console.log("Apply Job Data:", applyJobData);
            const formData = new FormData();
            for (const key in applyJobData) {
                formData.append(key, applyJobData[key]);
            }
            apiCall = axios.post(`${process.env.REACT_APP_BASE_URL}/api/applyJob`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            successMessage = 'Job application successful!';
            errorMessage = 'Error submitting apply job form:';
            resetFunction = () => {
                setApplyJobData(initialApplyJobData);
                const fileInput = document.getElementById('resumeUpload');
                if (fileInput) {
                    fileInput.value = '';
                }
            };
        } else {
            return;
        }

        apiCall
            .then(response => {
                console.log(successMessage, response.data);
                if (resetFunction) {
                    resetFunction();
                }
                alert(successMessage);
            })
            .catch(error => {
                console.error(errorMessage, error);
                if (error.response) {
                    console.error("Server Response Data:", error.response.data);
                    console.error("Server Response Status:", error.response.status);
                    if (error.response.data && error.response.data.message) {
                        alert(`Error: ${error.response.data.message}`);
                    } else {
                        alert(`An error occurred: ${error.response.statusText || 'Please try again.'}`);
                    }
                } else if (error.request) {
                    console.error("No response from server:", error.request);
                    alert("Network error: Could not connect to the server. Please check your connection.");
                } else {
                    console.error("Error setting up request:", error.message);
                    alert(`An unexpected error occurred: ${error.message}`);
                }
            });
    };


    const renderFormContent = () => {
        switch (activeForm) {
            case 'register':
                return (
                    <>
                        <div className="form-group">
                            <label htmlFor="FullName">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="FullName"
                                placeholder="Sai Charan"
                                value={registerData.FullName}
                                onChange={(e) => handleChange(e, 'register')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Mobile">Mobile</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Mobile"
                                placeholder="9878787123"
                                value={registerData.Mobile}
                                onChange={(e) => handleChange(e, 'register')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CollegeEmail">Your college Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="CollegeEmail"
                                placeholder="20311A05M7@sreenidhi.edu.in"
                                value={registerData.CollegeEmail}
                                onChange={(e) => handleChange(e, 'register')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CollegeName">Your college Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="CollegeName"
                                placeholder="NIT Trichy"
                                value={registerData.CollegeName}
                                onChange={(e) => handleChange(e, 'register')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="PassingYear">Passing out year</label>
                            <input
                                type="text"
                                className="form-control"
                                id="PassingYear"
                                placeholder="2024"
                                value={registerData.PassingYear}
                                onChange={(e) => handleChange(e, 'register')}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="Domain1"> Select a Domain ?</label>
                                <select
                                    id="Domain1"
                                    className="form-control"
                                    value={registerData.Domain1}
                                    onChange={(e) => handleChange(e, 'register')}
                                    required
                                >
                                    <option value="select an option" disabled>select an option</option>
                                    <option>Software Development</option>
                                    <option>Data Science</option>
                                    <option>Cybersecurity</option>
                                    <option>Cloud Computing</option>
                                    <option>Machine Learning</option>
                                    <option>Networking</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="Domain2">Select a 2nd Domain ?</label>
                                <select
                                    id="Domain2"
                                    className="form-control"
                                    value={registerData.Domain2}
                                    onChange={(e) => handleChange(e, 'register')}
                                >
                                    <option value="select an option">select an option</option>
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
                            <label htmlFor="CollegeName">College Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="CollegeName"
                                placeholder="Sastra University"
                                value={collegeData.CollegeName}
                                onChange={(e) => handleChange(e, 'college')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ContactName">Point of Contact Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ContactName"
                                placeholder="Google"
                                value={collegeData.ContactName}
                                onChange={(e) => handleChange(e, 'college')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ContactMobile">Point of Contact Mobile</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ContactMobile"
                                placeholder="9878787123"
                                value={collegeData.ContactMobile}
                                onChange={(e) => handleChange(e, 'college')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ContactEmail">Point of Contact Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="ContactEmail"
                                placeholder="20311A05M7@sreenidhi.edu.in"
                                value={collegeData.ContactEmail}
                                onChange={(e) => handleChange(e, 'college')}
                                required
                            />
                        </div>
                    </>
                );
            case 'hr':
                return (
                    <>
                        <div className="form-group">
                            <label htmlFor="HRFullName">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="HRFullName"
                                placeholder="Sai Charan"
                                value={hrData.HRFullName}
                                onChange={(e) => handleChange(e, 'hr')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CompanyName">Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="CompanyName"
                                placeholder="Google"
                                value={hrData.CompanyName}
                                onChange={(e) => handleChange(e, 'hr')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="MobileNumber">Mobile</label>
                            <input
                                type="text"
                                className="form-control"
                                id="MobileNumber"
                                placeholder="9878787123"
                                value={hrData.MobileNumber}
                                onChange={(e) => handleChange(e, 'hr')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CompanyEmail">Your Company Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="CompanyEmail"
                                placeholder="20311A05M7@sreenidhi.edu.in"
                                value={hrData.CompanyEmail}
                                onChange={(e) => handleChange(e, 'hr')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Industry">Industry</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Industry"
                                placeholder="Health"
                                value={hrData.Industry}
                                onChange={(e) => handleChange(e, 'hr')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="CompanySize">Company Size</label>
                            <input
                                type="text"
                                className="form-control"
                                id="CompanySize"
                                placeholder="1"
                                value={hrData.CompanySize}
                                onChange={(e) => handleChange(e, 'hr')}
                                required
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
                                value={applyJobData.jobApplicantName}
                                onChange={(e) => handleChange(e, 'applyJob')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobApplicantEmail">Your Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="jobApplicantEmail"
                                placeholder="your.email@example.com"
                                value={applyJobData.jobApplicantEmail}
                                onChange={(e) => handleChange(e, 'applyJob')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resumeUpload">Upload Resume</label>
                            <input
                                type="file"
                                className="form-control"
                                id="resumeUpload"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="coverLetter">Cover Letter (Optional)</label>
                            <textarea
                                className="form-control"
                                id="coverLetter"
                                rows="4"
                                placeholder="Tell us about yourself and why you're a good fit..."
                                value={applyJobData.coverLetter}
                                onChange={(e) => handleChange(e, 'applyJob')}
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
            case 'applyJob':
                return (
                    <>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('register'); }}>Join as student</a>
                        {' / '}
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('college'); }}>Join as college</a>
                        {' / '}
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveForm('hr'); }}>Hire From Us</a>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="card-header">
                    <span className="info-icon">
                        <i></i>
                    </span>
                    <h2>{getTitle()}</h2>
                    <div className="links">
                        {renderHeaderLinks()}
                    </div>
                </div>
                <div className="card-body">
                    <form onSubmit={HandleSubmit}>
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