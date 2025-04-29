
import React, { useState } from 'react'





const FormExample = () => {


    const[UserName,setUserName]=useState("")

    const[newUserDetails,setUserDetails]=useState()

    

    const getUserName = (event)=>{
      setUserName(event.target.value)


    }

    const user=()=>{
      setUserDetails(UserName)

    }
  return (
    <section className='formSection'>
      <h2>{newUserDetails}</h2>
        <div className='inputdiv'>
        <form onSubmit={user}>
            <input typee="text" placeholder="Enter your Name" onChange={getUserName}></input>
            <br/>
            <button className='Submitbtn' onClick={user}>
                Submit
            </button>
            </form>

        </div>
    </section>
  
  )
}

export default FormExample