import React from 'react'
import './sidebar.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-item'>
            <div className="sidebartitle">ABOUT ME</div>
            <img  src="https://i.postimg.cc/3NFHWxVb/bohemian-man-with-his-arms-crossed-1368-3542.avif" width="200" height="150"/>
            <p>I'm John, I'm a software engineer,I enjoy hiking in my free time.</p>
        </div>
        <div className='sidebaritem'>
            <div className='sidebartitle'>CATEGORIES</div>
            <ul className='sidebarlist'>
                <li className='sidebarlistitems'>Life</li>
                <li className='sidebarlistitems'>Music</li>
                <li className='sidebarlistitems'>Style</li>
                <li className='sidebarlistitems'>Sport</li>
                <li className='sidebarlistitems'>Tech</li>
                <li className='sidebarlistitems'>Cinema</li>
            
            </ul>
            <div className='sidebaritem'>
            <div className='sidebartitle'>FOLLOW US</div>
            <div className='sidebarsocial'>
                  <i className='sideicon'><FaFacebook /></i>
                        <i className='sideicon'><FaTwitter /></i>
                       <i className='sideicon'> <FaPinterest /></i>
                        <i className='sideicon'><FaInstagram /></i>
            </div>

            </div>
            

        </div>





    </div>
  )
}

export default Sidebar