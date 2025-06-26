import React, { useState } from 'react';
import axios from 'axios';
import './PostingPage.css';


const PostJob = () => {

    const [activeForm, setActiveForm] = useState('hr');


    const [hrdata, setHrdata] = useState({
        PostedOnDate: '',
                        Title: '',
                        Company: '',
                        Salary: '',
                        Type: '',
                        Duration:""
    });




    const handleHrChange = (e) => {
        const { id, value } = e.target;
        setHrdata(prevData => ({
            ...prevData,
            [id]: value,
        }));
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (activeForm === 'hr') {
            axios.post("http://localhost:8000/api/hrpostjob", hrdata).then( 
                response => {
                    console.log(response.data)
                    alert("successfully completed");
                    setHrdata({
                        PostedOnDate: '',
                        Title: '',
                        Company: '',
                        Salary: '',
                        Type: '',
                        Duration:""

                    })
                }
            ).catch(error => {
                console.error("Error sending details:", error.response ? error.response.data : error.message);
                alert("Failed to send details. Please try again.");
            });
        }
        
    };


    const renderFormContent = () => {
        switch (activeForm) {
            case 'hr':
                return (
                    <>
                        <div className="form-group">
                            <label htmlFor="PostedOnDate">Posted on</label>
                            <input
                                type="text"
                                className="form-input"
                                id="PostedOnDate" // Matches the state key
                                placeholder="1-1-2020"
                                value={hrdata.PostedOnDate} // Controlled component
                                onChange={handleHrChange} // Attach handler
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-input"
                                id="Title" // Matches the state key
                                placeholder="FullStack"
                                value={hrdata.Title}
                                onChange={handleHrChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Company">Company</label>
                            <input
                                type="text"
                                className="form-input"
                                id="Company" // Matches the state key
                                placeholder="google"
                                value={hrdata.Company}
                                onChange={handleHrChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Salary">Salary</label>
                            <input
                                type="text"
                                className="form-input"
                                id="Salary" // Matches the state key
                                placeholder="salary"
                                value={hrdata.Salary}
                                onChange={handleHrChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Type">Type</label>
                            <input
                                type="text"
                                className="form-input"
                                id="Type" // Matches the state key
                                placeholder="Office"
                                value={hrdata.Type}
                                onChange={handleHrChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Duration">Duration
                            </label>
                            <input
                                type="text"
                                className="form-input"
                                id="Duration" // Matches the 
                                placeholder="full time"
                                value={hrdata.Duration} // Controlled component
                                onChange={handleHrChange} // Attach handler
                                required
                            />
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
                return 'HR Post Job';

            default:
                return 'Form';
        }
    };

    return (
        <div className="job-portal-container">
            <div className="job-form-card">
                <div className="card-header-section">
                    <span className="header-icon">
                        <i></i>
                    </span>
                    <h2>{getTitle()}</h2>
                </div>
                <div className="card-body-content">
                    <form onSubmit={handleSubmit}>
                        {renderFormContent()}
                        <button type="submit" className="submit-form-button">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="card-footer-section">
                    {activeForm === 'hr' ? (
                        <button className="switch-form-button" onClick={() => setActiveForm('applyJob')}>
                            
                        </button>
                    ) : (
                        <button className="switch-form-button" onClick={() => setActiveForm('hr')}>
                            Are you an HR? Post a Job!
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostJob;