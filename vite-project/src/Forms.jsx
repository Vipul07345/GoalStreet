import React, { useState } from 'react'

function Forms() {
    const[Firstname,SetFirstname]=useState("")
    const[Lastname,SetLastname]=useState("")
    const[Subject,SetSubject]=useState({
        Telugu:true,
        Hindi:false,
        English:false,
    });

 
    const ChangeSubject=(sub)=>{
        SetSubject((prev)=>({...prev,[sub]:!prev[sub],}))

    }
    const Reset=()=>{
        Firstname("");
        Lastname("");
        Subject({
               Telugu:true,
                Hindi:false,
                English:false,

        });

    }
  return (
    <div>
        <label>FirstName</label>
          <input type="text" value={Firstname} onChange={(e)=>SetFirstname(e.target.value)}/>

        <label >LastName</label>
        <input type="text"  value={Lastname} onChange={(e)=>SetLastname(e.target.value)}/>

        <label >Subjects</label>

    </div>
  )
}        


export default Forms