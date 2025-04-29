import React, { useState } from 'react'
import Indo from './Indo'



function Home() {
    const[todos,SetTodos]=useState([])
    return (
        <div><h2>Todo List</h2>
        <Indo/>
        {
            todos.length === 0
            ?
            <div><h2>No Reord</h2></div>
            :

            todos.map(todo =>(
                <div>{todo}</div>

            )
            )
        }
        
        </div>
        
    )
}
export default Home