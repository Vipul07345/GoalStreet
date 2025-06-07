import React from 'react'
import './Service.css'

function Service() {
  return (
    <div className='Service'>
        <h1 className='Service-title'>Service Page</h1>
        
        <div className='Service-container'>
            <label className='Service-label'>Service Name :</label>
        <input className='Service-input' type="text" /></div>
        <div className='Service-container'>
        <label className='Service-label'>Service Type :</label>
        <select className='Service-select' ><option>Business Name</option>
        <option >Business Location</option></select>
        </div>
        <div className='Service-button'><button className='inner-button'>Save</button></div>
       
        </div>
    
     
  )
}

export default Service