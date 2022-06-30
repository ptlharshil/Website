import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-scroll";
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
  animate="move"><Link 
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                ><b>Harshil</b></Link>
  </motion.div>
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
          
              
          <Link 
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}><b>Harshil Patel</b></Link>
              
          </div>
            <ul style={{listStyleType:"none"}}>
              
                  
                    <Link 
                    activeClass="active"
                    to="aboutCont"
                    spy={true}
                    smooth={true}
                    offset={-111}
                    duration={500}><li>About</li></Link>
                  
                  
                    <Link 
                    activeClass="active"
                    to="edu"
                    spy={true}
                    smooth={true}
                    offset={-49}
                    duration={500}><li>Education</li> </Link>
                 
                 <Link 
                    activeClass="active"
                    to="exp"
                    spy={true}
                    smooth={true}
                    offset={-49}
                    duration={500}>
                    <li>Experience</li></Link>
                  
                    <Link 
                    activeClass="active"
                    to="wrk"
                    spy={true}
                    smooth={true}
                    offset={-49}
                    duration={500}>
                    <li>Work</li></Link>
                  
                
            </ul>
            
        </motion.div>
      </> : ""}
      
    </motion.div>
    </>
  )
}

export default Navbar