import React from 'react'
import './write.css'
import { IoIosAdd } from "react-icons/io";


function Write() {
  return (
    <div className='write'>
        <img className='writeimg'
        src="https://i.postimg.cc/jdMYZFWC/istockphoto-2166282428-612x612.webp" alt="" />
        <form className='writeform'>
            <div className='writeformgroup'>
                <label htmlFor="fileinput">
                    <i className='writeicon'><IoIosAdd /></i>
                </label>

                <input type="file" id='fileinput' style={{display:"none"}} />
                <input type="text" placeholder='Title' className='writeinput' autoFocus={true}/>
            </div>
            <div className="writeformgroup">
                <textarea placeholder='Tell your story ....' type='text' className='writeinput writetext'></textarea>
            </div>
            <button className="writesubmit">Publish</button>
        </form>






    </div>
  )
}

export default Write