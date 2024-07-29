import React, { useState } from 'react'

const Todos = () => {
    const [input, setInput] = useState("")
    
    const handleInput = (e) => {
        console.log(e.target.value)
    }

  return (
    <div  className='w-2/5 bg-blue-200 m-auto mt-24'>
        <h1 className='text-2xl text-center'>Todo Application</h1>
        <div className='flex m-auto justify-center'>
            <input type="text" placeholder='Enter a Todo' className='bg-gray-100 py-2 w-3/4' onChange={handleInput}/>
            <button className='bg-gray-200 px-3 py-2'>Add</button>
        </div>
        
    </div>
  )
}

export default Todos








