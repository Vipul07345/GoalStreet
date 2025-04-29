import React from 'react'
import './singlepost.css'
import Sidebar from './Sidebar'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Singlepost() {
  return (
    <div className='singlepost'>
        <div className='singlepostwrapper'>
            <img src="https://i.postimg.cc/wjVqDTPD/images-16.jpg" alt="" className='singlepostimg'/>
            <h1 className='singleposttitle'>The Essence of Nature
            <div className="singlepostedit">
                <i className='singleposticon'><FaEdit /></i>
           <i className='singleposticon'> <MdDelete /></i>
            </div>
            </h1>
            <div className="singlepostinfo">
                <span className='singlepostauthor'>Author : <b>Tagore</b></span>
                
            </div>
            <p className='singlepostdes'>Nature's embrace, a vibrant, living art,
Sustains our world, a vital, beating heart.
In its wild beauty, peace finds its true start.</p>
        </div>
    </div>
  )
}

export default Singlepost