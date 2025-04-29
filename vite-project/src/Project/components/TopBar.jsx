
import React from 'react'
import './topbar.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function TopBar() {
  const navigate = useNavigate()
  return (
    <div className='Top'>
        <div className='topleft'>
        <i className='topicon'><FaFacebook /></i>
        <i className='topicon'><FaTwitter /></i>
       <i className='topicon'> <FaPinterest /></i>
        <i className='topicon'><FaInstagram /></i>
        </div>
        <div className='topcenter'>
        <ul className='toplist'>
            <li className='toplistitem' onClick={()=>{navigate('/')}}>HOME</li>
            <li className='toplistitem'>ABOUT</li>
            <li className='toplistitem'>CONTACT</li>
            <li className='toplistitem' onClick={()=>{navigate('/write')}}>WRITE</li>
            <li className='toplistitem' onClick={()=>{navigate('/login')}}>LOGOUT</li>
        </ul>
        </div>
        <div className='topright'>
            <img className='topimage' src="https://i.postimg.cc/htV0H7Fm/images-8.jpg" alt="profile pic"></img>
            <i className='searchicon'><FaSearch /></i>
        </div>
    </div>

  )
}

export default TopBar