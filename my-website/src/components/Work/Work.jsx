import React, { useState } from 'react'
import "./Work.css"
import LaunchIcon from '@material-ui/icons/Launch';
import {animate, AnimatePresence, motion, useAnimation} from "framer-motion"

const Work = () => {
  const [open,setOpen]=useState(false)
  const [show,setShow]=useState(false)
  const abtVariant={
    hidden:{opacity: "1%", translateY:"-100px"},
    visible:{opacity: "100%", translateY:"1px"}
  }
  const cardVariant={
    hidden:{opacity: "1%", scale:0},
    visible:{opacity: "100%", scale:1},
    exit:{opacity:"0%",scale:0}
  }
  const handleClick=()=>{
    setOpen(!open)
    setShow(!show);
  }
  
  return (
    <>
    <motion.div
    variants={abtVariant}
    initial="hidden"
    whileInView="visible"
    transition={{duration:1}}>
        <h1 className='workTitle'>Work</h1>
    </motion.div>

    {show==false && <div className='workWrapper' id='wrk'>
      <div className='workWrap1'>
      <motion.div
      className='Java'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      transition={{duration:1}}
      >
        Sexual Awareness and Help System<br/>
        <LaunchIcon onClick={handleClick} className="launch" fontSize='small'/>
      </motion.div>
      <motion.div
      className='SQL'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      
      transition={{duration:2}}>
        Rental Bike RDBMS<br/>
        <LaunchIcon onClick={handleClick} className="launch" fontSize='small'/>
      </motion.div>
      </div>
      <div className='workWrap2'>
      <motion.div
      className='Spring'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      transition={{duration:2}}>
        Research-pedia<br/>
        <LaunchIcon onClick={handleClick} className="launch" fontSize='small'/>
      </motion.div>
      <motion.div
      className='React'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      transition={{duration:1}}>
        Pinned<br/>
        <LaunchIcon onClick={handleClick} className="launch" fontSize='small'/>
      </motion.div>
      </div>
    </div>}
    <AnimatePresence>
     {open&&
     
     <motion.div
      className='JavaCard'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      >
        Java
        <button onClick={handleClick}>x</button>
      </motion.div>
      
      }</AnimatePresence>
    </>
  )
}

export default Work