import React, { useState } from 'react'
import './Form.css'

const Form = () => {
    const[name,Setname]=useState("")
    const[age,Setage]=useState("")
    const[place,Setplace]=useState("")
    const[occupation,Setoccupation]=useState("")
  return (
    <div className='total'>
      <div className='Name'>
        <label className='Name-Total'>Enter Name</label>
        <input type='text' className='Name-text' placeholder='Enter your name' value={name} onChange={(e)=>Setname(e.target.value)}/>
        </div>
        <div className='Age'>
        <label className='Age-Total'>Enter Age</label>
        <input type='text' className='Age-text' placeholder='Enter your age' value={age} onChange={(e)=>Setage(e.target.value)}/>
</div>
<div className='Place'>
        <label className='Place-Total'>Enter place</label>
        <input type='text' placeholder='Enter Place' className='Place-Text' value={place} onChange={(e)=>Setplace(e.target.value)}/>
        </div>
        <div className='Occupation'>
        <label className='Occupation-Total'>Enter your occupation</label>
        <input type='text' placeholder='Enter your occupation' className='occupation-Text' value={occupation} onChange={(e)=>Setoccupation(e.target.value)}/>
</div>

    </div>
  )
}

export default Form