

import { projectdata } from './userdata'

const Data = () => {
  
  return (
    <div>{
      projectdata.map((value,index)=>{
        <div>{value.category}</div>
        
      })
      }
    </div>
  )
}

export default Data