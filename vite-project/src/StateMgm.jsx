
import React from 'react'

import {useState,useEffect} from 'react'

const StateMgm = () => {

    const[city,setcity]=useState("Hyderabad")

    useEffect(()=>{
        if(city==="Banglore"){
            setcity("Warangal")
        }else{
            setcity("Goa")
        }

    },[])

   
    
  return (
    <div><h1>I Live in {city}</h1></div>
  )
}

export default StateMgm