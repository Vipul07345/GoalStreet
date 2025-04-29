import React from 'react'
import './settings.css'

import { FaUserCircle } from "react-icons/fa";
import Sidebar from './Sidebar';

function Settings() {
  return (
    <div className='settings'>
        <div className="settingswrapper">
            <div className="settingstitle">
                <span className="settingsupdatetitle">Update Your Account</span>
                <span className="settingsdeletetitle">Delete Account</span>
            </div>
            <form  className="settingsform">
                <label >Profile Picture</label>
                <div className="settingspp">
                    <img src="https://i.postimg.cc/jjdXvM7q/download-9.jpg" alt="" width={500}/>
                    <label htmlFor="fileinput"><i className='settingsppicon'><FaUserCircle /></i></label>
                    <input type="file" id='fileinput' style={{display:"none"}} />
                </div>
                <label >Username</label>
                <input type="text" placeholder='safak' />
                <label >E-mail</label>
                <input type="text" placeholder='safak@gmail.com' />
                <label >Password</label>
                <input type="password"  />
                <button className="settingssubmit">Update</button>
                
                
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings