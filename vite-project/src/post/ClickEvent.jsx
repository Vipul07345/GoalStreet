
import React from 'react'
import {useState} from 'react'

const ClickEvent = () => {
    const[number,setnumber]=useState(0)

    const increment=()=>{
        setnumber(number+1)

    
    }
    const decrement=()=>{
        if(number>1){
        setnumber(number-1)
        }
    }
    const reset=()=>{
        setnumber(0)
    }
  return (
    <div><h1>{number}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ClickEvent