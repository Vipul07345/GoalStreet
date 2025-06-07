import React, { useState } from 'react';
import './CourseSelector.css'; // Import the CSS file for this component

function CourseSelector({ onCourseClick }) {
  const [activeProgram, setActiveProgram] = useState('internship'); // 'internship' or 'placement'
  const [activeBranch, setActiveBranch] = useState('cse'); // Default to CSE/IT for internship
  const [activePlacementBranch, setActivePlacementBranch] = useState('jobGuarantee'); // Default for placement program

  // Add state to track the currently hovered branch for dynamic course display
  const [hoveredBranchId, setHoveredBranchId] = useState(null);

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
  const CurrentBranches = currentProgram.branches;

  // Determine the branches to display based on the active program
  const branchesToDisplay = activeProgram === 'internship'
    ? programData.internship.branches
    : programData.placement.branches;

  // Determine the courses to display based on the currently hovered branch,
  // or the active branch if no specific branch is hovered.
  const getCoursesForDisplay = () => {
    let targetBranchId = hoveredBranchId;

    // If no branch is currently hovered, use the active branch for the current program
    if (!targetBranchId) {
      if (activeProgram === 'internship') {
        targetBranchId = activeBranch;
      } else {
        targetBranchId = activePlacementBranch;
      }
    }

    const branch = currentProgram.branches.find(b => b.id === targetBranchId);
    return branch ? branch.courses : [];
  };

  const coursesToDisplay = getCoursesForDisplay();

  return (
    <div className="course-selector-main-wrapper">
      <div className="selection-panel">
        <div className="panel-section program-section">
          <div className="section-title">Program <span className="arrow">→</span></div>
          <div
            className={`program-card ${activeProgram === 'internship' ? 'active' : ''}`}
            onMouseEnter={() => { // Use onMouseEnter for program selection
              setActiveProgram('internship');
              setActiveBranch('cse'); // Set default active branch for internship on hover
              setHoveredBranchId('cse'); // Set hovered branch to default as well
            }}
          >
            <img src="/assets/internship-icon.svg" alt="Internship" className="card-icon" />
            INTERNSHIP PROGRAM
          </div>
          <div
            className={`program-card ${activeProgram === 'placement' ? 'active' : ''}`}
            onMouseEnter={() => { // Use onMouseEnter for program selection
              setActiveProgram('placement');
              setActivePlacementBranch('jobGuarantee'); // Set default active branch for placement on hover
              setHoveredBranchId('jobGuarantee'); // Set hovered branch to default as well
            }}
          >
            <img src="/assets/placement-icon.svg" alt="Placement" className="card-icon" />
            PLACEMENT PROVISION PROGRAM
          </div>
        </div>

        <div className="panel-section branch-section">
          <div className="section-title">Branch <span className="arrow">→</span></div>
          {branchesToDisplay.map((branch) => (
            <div
              key={branch.id}
              className={`branch-card ${
                (activeProgram === 'internship' && activeBranch === branch.id) ||
                (activeProgram === 'placement' && activePlacementBranch === branch.id) ||
                hoveredBranchId === branch.id // Highlight on hover
                ? 'active' : ''
              }`}
              onMouseEnter={() => { // Use onMouseEnter for branch selection
                if (activeProgram === 'internship') {
                  setActiveBranch(branch.id);
                } else {
                  setActivePlacementBranch(branch.id);
                }
                setHoveredBranchId(branch.id); // Set the currently hovered branch
              }}
              onMouseLeave={() => {
                // When leaving a branch, clear hoveredBranchId, courses will revert to active branch's courses
                setHoveredBranchId(null);
              }}
            >
              {branch.name} <span className="arrow-right">›</span>
            </div>
          ))}
        </div>

        <div className="panel-section courses-section">
          <div className="section-title">Courses <span className="arrow-down">↓</span></div>
          {coursesToDisplay.map((course, index) => (
            <div
              key={index}
              className="course-cardinginner"
              onClick={onCourseClick} // Keep onClick for actually selecting a course
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