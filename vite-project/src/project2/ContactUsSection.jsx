import React, { useState } from 'react'
import './ContactUSSection.css'
import axios from 'axios'

function ContactUsSection() {
    const[Youremail,SetYourEmail]=useState("")
    const[Yourmessage,SetYourMessage]=useState("")

    const HandleSave = () => {
       
        const dataToSend = {
            YourEmail: Youremail,   
            Message: Yourmessage 
        };

       
        axios.post("http://localhost:8000/api/contact", dataToSend)
            .then(response => {
                console.log(response.data);
                alert("Message sent successfully!");
                SetYourEmail(""); 
                SetYourMessage("");
            })
            .catch(error => {
                console.error("Error sending message:", error); 
                alert("Failed to send message. Please try again."); 
            });
    };



  return (
    <div className='contact-total'>
        <div>
        <h1 className='contact-title'>Contact Us</h1>
        <h3 className='contact-passage'>We're here for you: Connect with us for any questions or concerns.</h3>
        </div>
        
<div className='contact-container'>
    <div className='contactus-head'>For technical questions, please post your questions on our forum where you can get help from fellow students.
</div>
<div className='contactus-head'>For course suggestions and career advice, check out our learning paths.
</div>
    <div className='contactus-box'>
    <label className='contact-label'>Your email</label>
    <input className='contact-input1' type="text" value={Youremail} onChange={(e)=>SetYourEmail(e.target.value)}/>
</div>
<div className='contactus-box'>
        <label className='contact-label'>Your message</label>
    <input className='contact-input2'type="text" value={Yourmessage} onChange={(e)=>SetYourMessage(e.target.value)}/>


</div>
    <div className='contactus-button'><button className='contactus-buttonineer' onClick={HandleSave}>SEND</button></div>
    </div>

    </div>
  )
}

export default ContactUsSection