import React from 'react'
import './register.css'

function Register() {
  return (
    <div className='register'>
        <span className="registertitle">Register</span>
        <form className="registerform">
        <label >Username</label>
        <input className='registerinputs' type="text " placeholder=' Enter your username...' />
            <label >Email</label>
            <input className='registerinputs' type="text " placeholder=' Enter your email...' />
            <label >Password</label>
            <input className='registerinputs' type="password " placeholder=' Enter your password...' />
            <button className="registerbutton">Register</button>
            
        </form>
        <button className="registerloginbutton">Login</button>
    </div>
  )
}

export default Register