import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home.jsx'
import Techskills from './components/Techskills/Techskills.jsx'
// import Header from './components/Header/Header.jsx'
// import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
    <div className='scroll-smooth'>
    <a href="#home" >
          Home
        </a>
    <a href="#tech" >
          Home
        </a>
        <Home /> 
        <Techskills />
    </div>
     
    </>
  )
}

export default App