import React, { useState } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todos = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")  
    const [isChecked, setIsChecked] = useState(false)

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
    <div  className='w-2/5 bg-blue-200 m-auto mt-24 py-6 text-gray-700'>
        <h1 className='text-2xl text-center py-4 font-semibold'>Todo Application</h1>
        <div className='flex m-auto justify-center'>
            <input type="text" placeholder='Enter a Todo' value={newTask} className='bg-gray-100 py-2 
            rounded-l-xl pl-5 shadow-lg w-3/4' onChange={handleInput}/>
            <button className='bg-gray-300 px-3 py-2 
            rounded-r-xl shadow-lg font-semibold' onClick={addTask}>Add a task</button>
        </div>

        <ul>
            {tasks.map((task, index) => 
                <li key={index} className='flex space-y-3 items-center justify-between px-10'>
                    <span>{task}</span>
                    <div className='flex gap-4 items-center'>
                        <input type="checkbox" checked={isChecked} onChange={handleCheck} className='w-8 h-8'/>
                        <button className='border border-gray-200 shadow-md text-white px-4 py-2 
                        rounded-full hover:bg-gray-500' onClick={() => deleteTask(index)}>< FontAwesomeIcon icon={faTrash} className='text-red-400'/></button>
                    </div>
                    
                </li>
            )}
            
        </ul>
        
    </div>
  )
}

export default Todos








