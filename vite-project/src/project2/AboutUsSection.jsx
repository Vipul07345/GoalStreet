import React from 'react';
import './AboutUsSection.css';


function AboutUsSection() {
  return (
    <div>
      <div className='about-us-image'><img  src="https://www.goalstreet.in/assets/AboutUs-CnEoUlNO.jpeg" alt="" /></div>
        
        <div className="about-us-section-container">
      <h2 className="about-us-title">About Us</h2>
      <p className="about-us-paragraph">
        At GoalStreet, we believe in empowering students to unlock their full potential and
        embark on successful career journeys. We understand that internships play a pivotal role in
        shaping career paths, and our platform is designed to connect students with valuable
        internship opportunities that align with their aspirations and academic pursuits.
      </p>
      <p className="about-us-paragraph">
        Our mission at GoalStreet is simple yet profound: to bridge the gap between education and
        professional experience by providing students with meaningful internship opportunities.
        We strive to facilitate connections between ambitious students and reputable
        organizations, fostering a mutually beneficial relationship where both parties can learn and
        grow.
      </p>
    </div>
    </div>
  );
}


export default AboutUsSection;
