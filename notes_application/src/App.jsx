import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './todos'
import SideBar from './sideBar'
import Editor from './editor'

function App() {

  return (
    <>
      <div>
        < Todos />
        < SideBar/>
        < Editor />
      </div>
    </>
  )
}

export default App
