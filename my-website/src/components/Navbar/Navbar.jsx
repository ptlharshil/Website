import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {animate, motion, useAnimation} from "framer-motion"
const Navbar = () => {
  const [navbar,setNavbar]=useState(true)
  const [nav,setNav]=useState(true)

  const navVariant={
    visible:{opacity:1,scale:1},
    hidden:{opacity:0,scale:0}
  }

  const navi={
    stop:{translateY:0},
    move:{position:"fixed",},
    hide:{transition:{duration:4},scale:0}
  }
  window.onscroll=function(e){
   setTimeout(() => {
    setNavbar(false)
   }, 200); 
  }
  return (
    <>
  <motion.div className='Name'
  variants={navi}
  initial="stop"
  animate="move"><b>Harshil Patel</b></motion.div>
  <motion.div className='navigation'
  variants={navi}
  initial="stop"
  animate="move"
  >
    <button className='hamburger' onClick={()=>setNavbar(!navbar)}>
        {navbar==true?<CloseIcon/>:<MenuIcon/>}
      </button> 
      
      {navbar==true?
      <>
        <motion.div id='navi'
        variants={navVariant}
        initial="visible"
        >
          <div className='name'>
          <b>Harshil Patel</b>
          </div>
            <ul style={{listStyleType:"none"}}>
              <li>About</li>
              <li>Education</li>
              <li>Experience</li>
              <li>Work</li>
            </ul>
        </motion.div>
      </> : ""}
    </motion.div>
    </>
  )
}

export default Navbar