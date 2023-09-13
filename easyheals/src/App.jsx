import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { BookConsultation } from './components/BookConsultation'

function App() {

  return (
    <>
     <Navbar/>
     <BookConsultation/>
    </>
  )
}

export default App
