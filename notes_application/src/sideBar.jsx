import React, { useState } from 'react'

const SideBar = () => {
    const [items, setItems] = useState([])
    const handleClick = () => {
        setItems(prevState => [...prevState, `Note ${prevState.length + 1}`])
    }
  return (
    <div className='w-2/5 m-auto bg-gray-200'>
        <div className='flex justify-between items-center py-3 px-5 w-1/5 bg-slate-400'>
            <h1>Notes</h1>
            <button className='px-2 py-1 bg-gray-600 text-white rounded-md text-center font-bold text-2xl' onClick={handleClick}>+</button>
        </div>
        <div className='flex flex-col gap-5 font-semibold'>
            {items.map((item, index) => 
                <div key={index}>
                    <span>{item}</span>
                </div>
            )}
            
        </div>
    </div>
  )
}

export default SideBar