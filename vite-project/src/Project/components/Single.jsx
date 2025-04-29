import React from 'react'
import './Single.css'
import Sidebar from './Sidebar'
import Singlepost from './Singlepost'

function Single() {
  return (
    <div className='single'>
    <Singlepost/>
    <Sidebar/>

    </div>
  )
}

export default Single