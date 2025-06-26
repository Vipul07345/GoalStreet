import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FindWorkSection.css';
import ApplyPage from './ApplyJob';

function FindWorkSection() {
    const [jobPostings, setJobPostings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [appliedJobs, setAppliedJobs] = useState({})
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchJobPostings = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get("http://localhost:8000/api/hrpostjob");

                const initialAppliedStatus = {};
                response.data.forEach(job => {
                    initialAppliedStatus[job._id] = localStorage.getItem(`applied_${job._id}`) === 'true';
                });
                setAppliedJobs(initialAppliedStatus);

                setJobPostings(response.data);
            } catch (err) {
                console.error("Error fetching job postings:", err);
                setError("Failed to load job postings. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchJobPostings();
    }, []);

    const handleApplyClick = (jobId) => {
        setSelectedJobId(jobId);
    };

    const handleCloseApplyPage = () => {
        setSelectedJobId(null);
    };

    const handleApplicationSuccess = (jobId) => {
        setAppliedJobs(prevAppliedJobs => {
            const newAppliedJobs = { ...prevAppliedJobs, [jobId]: true };
            localStorage.setItem(`applied_${jobId}`, 'true');
            return newAppliedJobs;
        });
        setSelectedJobId(null);
    };


    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

  
    const filteredJobPostings = jobPostings.filter(job => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        
        return (
            job.Title.toLowerCase().includes(lowerCaseQuery) 
            
        );
    });

    if (loading) {
        return (
            <div className="find-work-section-container">
                <p className="loading-message">Loading job postings...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="find-work-section-container">
                <p className="error-message">{error}</p>
            </div>
        );
    }

    if (selectedJobId) {
        return (
            <ApplyPage
                jobId={selectedJobId}
                onClose={handleCloseApplyPage}
                onApplicationSuccess={handleApplicationSuccess}
            />
        );
    }

    return (
        <div className="find-work-section-container">
            <div className="find-work-header-sticky">
                <h2 className="find-work-title">Explore gigs</h2>
                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="Search role, skills, company name, etc."
                        className="search-input"
                        value={searchQuery} 
                        onChange={handleSearchChange} 
                    />
                    <span className="search-icon">🔍</span>
                </div>
            </div>

            <div className="job-listings-scrollable">
              
                {filteredJobPostings.length > 0 ? (
                    filteredJobPostings.map((job) => (
                        <div key={job._id} className="job-card">
                            <p className="job-posted-on">posted on : {job.PostedOnDate}</p>
                            <h3 className="job-title">{job.Title}</h3>
                            <p className="job-company">{job.Company}</p>
                            <div className="job-details-tags">
                                <span className="tag salary-tag">{job.Salary}</span>
                                <span className="tag type-tag">{job.Type}</span>
                                <span className="tag duration-tag">{job.Duration}</span>
                            </div>
                            <div className='job-button-total'>
                            <button
                                className='job-postend-button'
                                onClick={() => handleApplyClick(job._id)}
                                disabled={appliedJobs[job._id]}
                            >
                                {appliedJobs[job._id] ? 'Applied' : 'Apply Job'}
                            </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-jobs-message">
                        {searchQuery ? "No job postings found matching your search" : "No job postings found"}
                    </p>
                )}
            </div>
        </div>
    );
}

export default FindWorkSection;