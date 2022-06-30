import React from 'react'
import "../../App.css"
import Contact from '../../components/Contact/ContactComp.jsx'
import Home from '../../components/Home Page/HomeComp.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'

const HomePage = () => {
  return (
    <div className='container'>
      
      <div className='home'>
        <Home/>
      </div> 
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='contact'>
        <Contact/>
      </div>
      
    </div>
  )
}

export default HomePage