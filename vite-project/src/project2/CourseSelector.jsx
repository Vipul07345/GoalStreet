import React, { useState } from 'react';
import './CourseSelector.css'; // Import the CSS file for this component

function CourseSelector({ onCourseClick }) {
  const [activeProgram, setActiveProgram] = useState('internship');
  const [activeBranch, setActiveBranch] = useState('cse');
  // Corrected: Sticking with setActivePlacementBranch as the state setter
  const [activePlacementBranch, setActivePlacementBranch] = useState('jobGuarantee');

  const [hoveredBranchId, setHoveredBranchId] = useState(null);
  const [activeCourse, setActiveCourse] = useState(null);

  const programData = {
    internship: {
      branches: [
        {
          id: 'cse',
          name: 'CSE / IT',
          courses: [
            'Machine Learning',
            'Web Development',
            'Artificial Intelligence',
            'Cyber Security',
            'Data Science',
          ],
        },
        {
          id: 'ece',
          name: 'ECE / EEE',
          courses: [
            'Internet of Things',
            'Embedded Systems',
            'Robotics',
            'PLC',
          ],
        },
        {
          id: 'mechanical',
          name: 'Mechanical',
          courses: [
            'AutoCAD',
            'Hybrid & Electric Vehicle',
            'Car Design',
            'Ic Engine',
          ],
        },
        {
          id: 'civil',
          name: 'Civil',
          courses: [
            'AutoCAD',
            'Construction Planning & Construction',
          ],
        },
        {
          id: 'management',
          name: 'Management',
          courses: [
            'Digital Marketing',
            'Finance',
            'Human Resources',
            'Marketing',
            'Stock market & Cryptocurrency',
          ],
        },
      ],
    },
    placement: {
      branches: [
        {
          id: 'jobGuarantee',
          name: 'Job Guarantee Programs',
          courses: [
            'Full-Stack Web Devlopment',
            'Marketing & Digital Marketing',
            'Human Resources',
            'Flutter',
          ],
        },
        {
          id: 'proDegree',
          name: 'Pro Degree',
          courses: [
            'Data Science',
            'Machine Learning',
            'Flutter',
          ],
        },
      ],
    },
  };

  const currentProgram = activeProgram === 'internship' ? programData.internship : programData.placement;
  const branchesToDisplay = currentProgram.branches;

  const getCoursesForDisplay = () => {
    let targetBranchId = hoveredBranchId;

    if (!targetBranchId) {
      targetBranchId = (activeProgram === 'internship') ? activeBranch : activePlacementBranch;
    }

    const branch = currentProgram.branches.find(b => b.id === targetBranchId);
    return branch ? branch.courses : [];
  };

  const coursesToDisplay = getCoursesForDisplay();

  return (
    <div className="cs-main-container">
      <div className="cs-selection-grid">
        {/* Program Section */}
        <div className="cs-panel-section cs-program-section">
          <div className="cs-section-header">Program <span className="cs-arrow-right">→</span></div>
          <div
            className={`cs-program-card ${activeProgram === 'internship' ? 'cs-active' : ''}`}
            onMouseEnter={() => {
              setActiveProgram('internship');
              setActiveBranch('cse');
              setHoveredBranchId('cse');
              setActiveCourse(null);
            }}
          >
            {/* Image removed */}
            INTERNSHIP PROGRAM
          </div>
          <div
            className={`cs-program-card ${activeProgram === 'placement' ? 'cs-active' : ''}`}
            onMouseEnter={() => {
              setActiveProgram('placement');
              // Corrected: Using the consistent setActivePlacementBranch
              setActivePlacementBranch('jobGuarantee');
              setHoveredBranchId('jobGuarantee');
              setActiveCourse(null);
            }}
          >
            {/* Image removed */}
            PLACEMENT PROVISION PROGRAM
          </div>
        </div>

        {/* Branch Section */}
        <div className="cs-panel-section cs-branch-section">
          <div className="cs-section-header">Branch <span className="cs-arrow-right">→</span></div>
          {branchesToDisplay.map((branch) => (
            <div
              key={branch.id}
              className={`cs-branch-card ${
                ((activeProgram === 'internship' && activeBranch === branch.id) ||
                (activeProgram === 'placement' && activePlacementBranch === branch.id)) ||
                hoveredBranchId === branch.id
                ? 'cs-active' : ''
              }`}
              onMouseEnter={() => {
                if (activeProgram === 'internship') {
                  setActiveBranch(branch.id);
                } else {
                  // Corrected: Using the consistent setActivePlacementBranch
                  setActivePlacementBranch(branch.id);
                }
                setHoveredBranchId(branch.id);
                setActiveCourse(null);
              }}
              onMouseLeave={() => {
                setHoveredBranchId(null);
              }}
            >
              {branch.name} <span className="cs-arrow-icon">›</span>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <div className="cs-panel-section cs-courses-section">
          <div className="cs-section-header">Courses <span className="cs-arrow-down">↓</span></div>
          {coursesToDisplay.map((course, index) => (
            <div
              key={index}
              className={`cs-course-item ${activeCourse === course ? 'cs-active' : ''}`}
              onClick={() => {
                setActiveCourse(course);
                onCourseClick(course);
              }}
            >
              {course}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseSelector;