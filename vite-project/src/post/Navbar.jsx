
import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import './Navbar.css'

function Navbar() {
  return (
    <div className='Total'>
        <div className="profileimage" >
        <img src="https://i.postimg.cc/L6qGwx80/vipul-keerthi.jpg" width="400" height="450" alt="Profile image" className='image'></img>
        </div>
        <h1 className='Head'>VIPUL KEERTHI</h1>
        <h1 className='Header'><IoCall size={40}/>9963448240</h1>
        <h1 className='Header'><MdEmail size={40} />vipulkeerthi@gmail.com</h1>
        <h1 className='last'><CiLocationOn size={40}/>Hyderabad</h1>
        
    </div>
  )
}

export default Navbar