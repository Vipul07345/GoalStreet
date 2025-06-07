import React, { useState } from 'react'
import './DownPage.css'

function DownPage() {
  const [Inputvalue,SetInputvalue]=useState("")
  const[Display,SetDisplay]=useState("")

  const Handle=(event)=>{
    SetInputvalue(event.target.value);

  }
  const HandleClick=()=>{
    SetDisplay(Inputvalue);
  }
  return (
    <div className='Total-container'>
        <div className='Heading'><h1 className='Heading-Font'>
            Get our stories delivered From <br />us to your inbox weekly.</h1>
        </div>
        <div className='Center-bar'><input type="text" placeholder='Your Email' name='Email' className='Input-bar' onChange={Handle} />
        <button className='button-bar' onClick={HandleClick}>Get Started</button></div>
        <div className='bottom-para'><p className='Font-para'>Get a response tomorrow if you submit by 9pm today.If we received after <br />9pm will get a response the following day.</p></div>
    </div>
  )
}

export default DownPage