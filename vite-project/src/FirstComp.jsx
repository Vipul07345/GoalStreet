import React from 'react'

function FirstComp() {
  const arr=[
    {
        id:1,
        title:"React"
    },
    {
        id:2,
        title:"Mongo"
    },
    {
        id:3,
        title:"Python"
    },
    {
        id:4,
        title:"C"
    },
    
    
    
]
  return (
    <div>{
      arr.map(
        (value,index)=><li key={value.id}>{value.title}</li>
      )
      
      
      }</div>
  )
}

export default FirstComp