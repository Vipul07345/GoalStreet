import './Header.css'
import React from 'react'
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";


function Header() {
  return (
    <div><h1 className='About'>
         CAREER OBJECTIVE</h1>
        <h3 className='font'>
        An organised and motivated team member capable of time
 management and working under pressure in all environments.
 Possess exceptional communication and interpersonal skills with a
 proven ability to work independently and as part of a team. Seekig a
 challenging position in a organization where I can learn new skills,
 expand my knowledge.</h3>
 
 <h1 className='tech'>TECHNOLOGIES</h1>
 <div className='totech'>
 <div className='icon'><FaPython size={150} color='navy'/></div>
 <div className='icon'><FaHtml5 size={150} color='navy'/></div>
 <div className='icon'><FaCss3 size={150} color='navy'/></div>
 <div className='icon'><FaReact size={150} color='navy'/></div>
 <div className='icon'><DiJavascript size={150} color='navy'/></div>
 </div>

 <div className='Edu'>
  <h1 className='edusize'>EDUCATION</h1>
<div className="education">
  <div className='left'>SR UNIVERSITY</div>
  <div className='right'>
  <div >B.TECH</div>
  <div > Electronics and Communication</div>
  <div>CGPA:8.1</div>
  </div>
  </div>
  <div className="education">
  <div className='left'>SR JR COLLEGE</div>
  <div className='right'>
  <div >INTERMEDITE</div>
  <div > MPC</div>
  <div >CGPA:8.3</div>
  </div>
  </div>
  <div className="education">
    
  <div className='left'>GOLDEN THRESHOLD HIGH SCHOOL</div>
  <div className='right'>
  <div >10TH</div>
  <div >CGPA:8.8</div>
  </div>
  </div>
  </div>
  <div className='project'>
  <div className='project-title'>PROJECTS</div>
  <div className='projects'>
    <img src="https://i.postimg.cc/26Cbk9qm/sddefault.jpg" width="300" height="300" className='img'></img>
    <div className='project-info'>
    <p >Breast Cancer Prediction Using ML</p>
    <p >Machine learning models analyze medical data to predict if a breast tumor is likely cancerous  or non-cancerous.</p>
</div>
</div>

  </div>
  


 </div>
        
  )
}

export default Header