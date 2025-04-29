
import React from 'react'
import { userdata } from './post/userdata'

function FourthComp() {
  return (
    <div>
        {userdata.map((value,index)=>{
            return(
                <div>
                    <div key={value.index}>{value.name}</div>
                    <div>{value.email}</div>
                    </div>
            )
        })}
    </div>
  )
}

export default FourthComp