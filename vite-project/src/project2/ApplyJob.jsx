import React, { useState } from 'react';
import axios from 'axios';
import "./ApplyJob.css" // Ensure you have this CSS file for styling


const ApplyPage = ({ jobId, onClose, onApplicationSuccess }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        education: [
            { degree: '', institution: '', year: '' }
        ],
        experience: [
            { company: '', jobTitle: '', years: '' }
        ],
        skills: '',
        resume: null, 
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'resume') {
            setFormData({ ...formData, [name]: files[0] }); 
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEducation = formData.education.map((edu, i) =>
            i === index ? { ...edu, [name]: value } : edu
        );
        setFormData({ ...formData, education: updatedEducation });
    };

    const addEducationField = () => {
        setFormData({
            ...formData,
            education: [...formData.education, { degree: '', institution: '', year: '' }]
        });
    };

    const removeEducationField = (index) => {
        const updatedEducation = formData.education.filter((_, i) => i !== index);
        setFormData({ ...formData, education: updatedEducation });
    };

    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperience = formData.experience.map((exp, i) =>
            i === index ? { ...exp, [name]: value } : exp
        );
        setFormData({ ...formData, experience: updatedExperience });
    };

    const addExperienceField = () => {
        setFormData({
            ...formData,
            experience: [...formData.experience, { company: '', jobTitle: '', years: '', description: '' }]
        });
    };

    const removeExperienceField = (index) => {
        const updatedExperience = formData.experience.filter((_, i) => i !== index);
        setFormData({ ...formData, experience: updatedExperience });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Job Application Submitted:', formData);

    
        const resumePlaceholderUrl = formData.resume ? `resume_uploaded_${formData.resume.name || 'file'}.pdf` : '';

        const dataToSend = {
            jobId: jobId, 
            fullname: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            education: formData.education,
            experience: formData.experience.map(exp => ({
                company: exp.company,
                jobTitle: exp.jobTitle,
                years: exp.years
            })),
            skills: formData.skills,
            resume: resumePlaceholderUrl,
        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/applyjob`, dataToSend);

            console.log('Backend Response:', response.data);
            alert('Application Submitted Successfully!');

           
            onApplicationSuccess(jobId);

            
            setFormData({
                fullName: '', email: '', phone: '', address: '',
                education: [{ degree: '', institution: '', year: '' }],
                experience: [{ company: '', jobTitle: '', years: '' }],
                skills: '', resume: null,
            });

        } catch (error) {
            console.error('Error submitting application:', error);

            const errorMessage = error.response?.data?.message || 'Failed to submit application. Please try again.';
            alert(`Submission Error: ${errorMessage}`);
        }
    };

    return (
        <div className="job-apply-page">
            {/* Close button for the application form */}
            <button className="close-button" onClick={onClose}>&times;</button>
            <h2>Apply for Job </h2>
            <form onSubmit={handleSubmit} className="job-apply-form">
                <section className="form-section">
                    <h3>Personal Information</h3>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                            className='form-textarea'
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            rows="3"
                            required
                        ></textarea>
                    </div>
                </section>

                <section className="form-section">
                    <h3>Education</h3>
                    {formData.education.map((edu, index) => (
                        <div key={index} className="education-entry form-row">
                            <div className="form-group-inline">
                                <label>Degree</label>
                                <input className='form-degree'
                                    type="text"
                                    name="degree"
                                    value={edu.degree}
                                    onChange={(e) => handleEducationChange(index, e)}
                                    placeholder="e.g., B.Tech, MBA"
                                />
                            </div>
                            <div className="form-group-inline">
                                <label>Institution</label>
                                <input className='form-degree'
                                    type="text"
                                    name="institution"
                                    value={edu.institution}
                                    onChange={(e) => handleEducationChange(index, e)}
                                    placeholder="e.g., IIT Delhi"
                                />
                            </div>
                            <div className="form-group-inline">
                                <label>Year</label>
                                <input className='form-degree'
                                    type="text"
                                    name="year"
                                    value={edu.year}
                                    onChange={(e) => handleEducationChange(index, e)}
                                    placeholder="e.g., 2023"
                                />
                            </div>
                            {formData.education.length > 1 && (
                                <button type="button" className="remove-btn" onClick={() => removeEducationField(index)}>
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" className="add-more-btn" onClick={addEducationField}>
                        + Add More Education
                    </button>
                </section>

                <section className="form-section">
                    <h3>Work Experience</h3>
                    {formData.experience.map((exp, index) => (
                        <div key={index} className="experience-entry form-row">
                            <div className="form-group-inline">
                                <label>Company</label>
                                <input className='form-degree'
                                    type="text"
                                    name="company"
                                    value={exp.company}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                    placeholder="e.g., Google"
                                />
                            </div>
                            <div className="form-group-inline">
                                <label>Job Title</label>
                                <input className='form-degree'
                                    type="text"
                                    name="jobTitle"
                                    value={exp.jobTitle}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                    placeholder="e.g., Software Engineer"
                                />
                            </div>
                            <div className="form-group-inline">
                                <label>Years</label>
                                <input className='form-degree'
                                    type="text"
                                    name="years"
                                    value={exp.years}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                    placeholder="e.g., 2 years"
                                />
                            </div>

                            {formData.experience.length > 1 && (
                                <button type="button" className="remove-btn" onClick={() => removeExperienceField(index)}>
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" className="add-more-btn" onClick={addExperienceField}>
                        + Add More Experience
                    </button>
                </section>

                <section className="form-section">
                    <h3>Additional Information</h3>
                    <div className="form-group">
                        <label htmlFor="skills">Skills (comma separated)</label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            placeholder="e.g., React, Node.js, SQL, Agile"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resume">Upload Resume (PDF preferred)</label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleChange}
                            required
                        />
                        {formData.resume && <p className="file-name">Selected: {formData.resume.name}</p>}
                        {formData.resume && (
                            <p className="file-name-note">
                                (A placeholder URL is sent to the backend for the resume field.)
                            </p>
                        )}
                    </div>
                </section>

                <button type="submit" className="submit-button-applyjob">Submit Application</button>
            </form>
        </div>
    );
};

export default ApplyPage;