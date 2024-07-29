import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './todos'
import SideBar from './sideBar'

function App() {

  return (
    <>
      <div>
        < Todos />
        < SideBar/>
      </div>
    </>
  )
}

export default App
