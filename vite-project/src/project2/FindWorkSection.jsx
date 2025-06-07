import React from 'react';
import './FindWorkSection.css';

function FindWorkSection() {
  const jobPostings = [
    {
      id: 1,
      postedOn: '2024-04-01',
      title: 'Software 2 for testing',
      company: 'DEVOPS',
      salary: '₹20000',
      type: 'remote',
      duration: 'full time',
    },
    {
      id: 2,
      postedOn: '2024-04-05',
      title: 'Technical Content Writer for Technoedz',
      company: 'DIOSJODPO', // Placeholder, as text is unclear
      salary: '₹20-30k/month',
      type: 'office',
      duration: 'internship',
    },
    {
      id: 3,
      postedOn: '2024-04-09',
      title: 'Frontend Developer 2 for Bshasb',
      company: 'NSJSJJESJSJ', // Placeholder, as text is unclear
      salary: '₹Bhshabwb', // Placeholder, as text is unclear
      type: 'jwjnwnenen', // Placeholder
      duration: 'msmsnsnsn', // Placeholder
    },
    {
      id: 4,
      postedOn: '2024-04-12',
      title: 'UI/UX Designer',
      company: 'Creative Solutions',
      salary: '₹25000',
      type: 'hybrid',
      duration: 'full time',
    },
    {
      id: 5,
      postedOn: '2024-04-15',
      title: 'Data Scientist Intern',
      company: 'Analytics Hub',
      salary: '₹15000',
      type: 'remote',
      duration: 'internship',
    },
    {
      id: 6,
      postedOn: '2024-04-18',
      title: 'Backend Developer (Node.js)',
      company: 'Innovate Corp',
      salary: '₹35000',
      type: 'office',
      duration: 'full time',
    },
    {
      id: 7,
      postedOn: '2024-04-20',
      title: 'Mobile App Developer (Flutter)',
      company: 'AppGenius',
      salary: '₹28000',
      type: 'remote',
      duration: 'full time',
    },
  ];

  return (
    <div className="find-work-section-container">
      <div className="find-work-header-sticky">
        <h2 className="find-work-title">Explore gigs</h2>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search role, skills, company name, etc."
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="job-listings-scrollable">
        {jobPostings.map((job) => (
          <div key={job.id} className="job-card">
            <p className="job-posted-on">posted on : {job.postedOn}</p>
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company">{job.company}</p>
            <div className="job-details-tags">
              <span className="tag salary-tag">{job.salary}</span>
              <span className="tag type-tag">{job.type}</span>
              <span className="tag duration-tag">{job.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindWorkSection;
