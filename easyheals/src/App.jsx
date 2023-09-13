import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { BookConsultation } from './components/BookConsultation'
import { CommonSymptoms } from './components/CommonSymptoms'

function App() {

  return (
    <>
     <Navbar/>
     <BookConsultation/>
     <CommonSymptoms/>
    </>
  )
}

export default App
