import React, { useState } from 'react'
import axios from 'axios';
import './GrowthPage.css'


const Foundation = ({ onGoBack }) => {
      const [FoundationData, SetFoundationData] = useState({
        fullname: "",
        fathername: "",
        contactnumber: "",
        emailid: "",
        course: "",
        joining: "",
        paymode: ""
      });
    
      const HandleFoundation = (e) => {
        const { id, value } = e.target;
        SetFoundationData(prevData => ({
          ...prevData,
          [id]: value,
        }));
      };
    
      const HandlesubmitFoundation = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/foundation", FoundationData)
          .then(response => {
            console.log(response.data);
            alert("Successfully completed");
            SetFoundationData({
              fullname: "",
              fathername: "",
              contactnumber: "",
              emailid: "",
              course: "",
              joining: "",
              paymode: ""
            });
         
          })
          .catch(error => {
            console.log(error);
            alert("Failed to send details");
          });
      };
  return (
        <div className='growth-total-box'>
      <div className='growth-total'>
        
        {onGoBack && ( 
          <button type="button" className="close-button" onClick={onGoBack}>
            &times;
          </button>
        )}

        <div className='growth-head'>Foundation Application Form</div>
        <div className='growth-container'>
          <form onSubmit={HandlesubmitFoundation}>
            <div className='growth-form'>
              <label htmlFor="fullname" className='growth-label'>Full Name</label>
              <input className='growth-input' type="text" placeholder='Full name' id='fullname' value={FoundationData.fullname} onChange={HandleFoundation} />
            </div>
            <div className='growth-form'>
              <label htmlFor="fathername" className='growth-label'>Father Name</label>
              <input className='growth-input' type="text" placeholder='Father name' id='fathername' value={FoundationData.fathername} onChange={HandleFoundation} />
            </div>
            <div className='growth-form'>
              <label htmlFor="contactnumber" className='growth-label'>Contact Number</label>
              <input className='growth-input' type="tel" placeholder='Contact Number' id='contactnumber' value={FoundationData.contactnumber} onChange={HandleFoundation} />
            </div>
            <div className='growth-form'>
              <label htmlFor="emailid" className='growth-label'>Email</label>
              <input className='growth-input' type="email" placeholder='Email' id='emailid' value={FoundationData.emailid} onChange={HandleFoundation} />
            </div>
            <div className='growth-form'>
              <label htmlFor="course" className='growth-label'>Course Name</label>
              <input className='growth-input' type="text" placeholder='Course' id='course' value={FoundationData.course} onChange={HandleFoundation} />
            </div>
            <div className='growth-form'>
              <label htmlFor="joining" className='growth-label'>Joining Date</label>
              <input className='growth-input' type="date" placeholder='Joining Date' id='joining' value={FoundationData.joining} onChange={HandleFoundation} />
            </div>
            <div className='growth-form'>
              <label htmlFor="paymode" className='growth-label'>Payment Mode</label>
              <select className='growth-input' id='paymode' value={FoundationData.paymode} onChange={HandleFoundation}>
                <option value="">Select option</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
            
            <div className='growth-total-button'>
              <button className='growth-button' type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Foundation
