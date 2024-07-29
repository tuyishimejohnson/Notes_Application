import React, { useState } from 'react'

const Todos = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")  
    const [isChecked, setIsChecked] = useState(true)

    const handleInput = (event) => {
        setNewTask(event.target.value)
    }

    

    const addTask = () => {
        if(newTask.trim() !== "") {
            setTasks(prevState => [...prevState, newTask])
            setNewTask("")
            
        }
    }

    const handleCheck = () => {
        setIsChecked(prevState => !prevState)
    }

    const deleteTask = (index) => {
        setTasks(prevState => {
            const updatedArr =  [...prevState]
            updatedArr.splice(index, 1)
            return updatedArr
        })
        
    }

  return (
    <div  className='w-2/5 bg-blue-200 m-auto mt-24'>
        <h1 className='text-2xl text-center'>Todo Application</h1>
        <div className='flex m-auto justify-center'>
            <input type="text" placeholder='Enter a Todo' value={newTask} className='bg-gray-100 py-2 w-3/4' onChange={handleInput}/>
            <button className='bg-gray-200 px-3 py-2' onClick={addTask}>Add</button>
        </div>

        <ul>
            {tasks.map((task, index) => 
                <li key={index} className='flex space-y-3 items-center justify-between px-10'>
                    <span>{task}</span>
                    <input type="checkbox" checked={isChecked} onChange={handleCheck}/>
                    <button className='bg-white' onClick={() => deleteTask(index)}>Delete task</button>
                </li>
            )}
            
        </ul>
        
    </div>
  )
}

export default Todos








