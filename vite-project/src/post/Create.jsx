
import React from 'react'
import './Create.css'


function Create() {
  return (
    <div className='container'>
        <h1 className='size'>Create Post</h1>
        <form >
            <label className='texts' for="name">Event Name</label> <br></br>
            <input className="fields" type='text' id="name" name="name" placeholder='Enter Name'></input><br></br>
            <label className='texts' for="image">Upload Image</label><br></br>
            <input className="fields" type='file' name='image'placeholder='+ upload image'></input><br></br>
            <label className='texts'>Description</label><br></br>
            <textarea rows="10" cols="75" name="description" placeholder='Enter Details'></textarea><br></br>
            <label className='texts'>Date of the Event</label><br></br>
            <input className="fields" type="text" placeholder='Enter Details'></input><br></br>
            <button className='button' type="submit">Post</button>
            
        </form>

    </div>
  )
}

export default Create