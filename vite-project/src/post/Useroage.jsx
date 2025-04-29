
import React, { useState,useEffect } from 'react'

const userdetails ="https://jsonplaceholder.typicode.com/posts"


const Useroage = () => {
    const[user,SetUSer]=useState(userdetails)

    const userHandler = async()=>{
        const response = await fetch(userdetails);
        const newData =  await response.json();
        SetUSer(newData)

    }
    useEffect(()=>{

    },[])
  return (
    <div>{user.map((value)=>{
        return(
        <div>{value.title}</div>
        )
    })}</div>
  )
}

export default Useroage