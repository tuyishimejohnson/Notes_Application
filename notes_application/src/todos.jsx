import React, { useState } from 'react'

const Todos = () => {
    const [tasks, setTasks] = useState(["Eat", "Drink", "Study", "Get out"])
    const [newTask, setNewTask] = useState("")  

    const handleInput = (event) => {
        setNewTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const addTask = () => {
        setTasks(prevState => [...prevState, newTask])
        setNewTask("")
    }

    const deleteTask = (index) => {

    }

    const moveTaskUp = (index) => {

    }

    const moveTaskDown = (index) => {

    }

  return (
    <form  className='w-2/5 bg-blue-200 m-auto mt-24' onSubmit={handleSubmit}>
        <h1 className='text-2xl text-center'>Todo Application</h1>
        <div className='flex m-auto justify-center'>
            <input type="text" placeholder='Enter a Todo' value={newTask} className='bg-gray-100 py-2 w-3/4' onChange={handleInput}/>
            <button className='bg-gray-200 px-3 py-2' onClick={addTask}>Add</button>
        </div>

        <ul>
            {tasks.map((task, index) => 
                <li key={index} className='flex space-y-3 items-center justify-between px-10'>
                    <span>{task}</span>
                    <button className='bg-white' onClick={() => deleteTask(index)}>Delete task</button>
                </li>
            )}
            
        </ul>
        
    </form>
  )
}

export default Todos








