import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './todos'
import SideBar from './sideBar'
import Editor from './editor'
import TenziesGame from './TenziesGame'
import Die from './Die'


function App() {

  const allNewDice = () => {
    let newArr = []

    for(let i = 0; i < 10; i++) {
        let randomNums = Math.floor(Math.random() * 6) + 1
        newArr.push(randomNums)
        
    }
  return newArr
}

const [newDices, setNewDices] = useState(allNewDice())


const handleNewNumbers = () => {
  setNewDices(allNewDice())
}

const result = newDices.map((item) => < Die value={item}/>)
  return (
    <>
      <div>
        < Todos />
        < TenziesGame />
        <div>
          <div className='grid grid-cols-5 w-2/5 m-auto bg-gray-100 px-8'>
            { result }
          </div>

          <div className='flex justify-center pb-8'>
            <button className='bg-blue-700 px-10 py-4 rounded-md text-white' onClick={handleNewNumbers}>Roll</button>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default App
