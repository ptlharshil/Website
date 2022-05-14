import React, { useState } from 'react'
import "./Work.css"
import {animate, AnimatePresence, motion, useAnimation} from "framer-motion"

const Work = () => {
  const [open,setOpen]=useState(false)
  const abtVariant={
    hidden:{opacity: "1%", translateY:"-100px"},
    visible:{opacity: "100%", translateY:"1px"}
  }
  const cardVariant={
    hidden:{opacity: "1%", scale:0},
    visible:{opacity: "100%", scale:1},
    exit:{opacity:"50%",scale:0}
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

    <div className='workWrapper'>
      <div className='workWrap1'>
      <motion.div
      className='Java'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      transition={{duration:1}}
      >
        Sexual Awareness and Help System
        <button onClick={()=>setOpen(!open)}>v</button>
      </motion.div>
      <motion.div
      className='SQL'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      
      transition={{duration:2}}>
        Rental Bike RDBMS
      </motion.div>
      </div>
      <div className='workWrap2'>
      <motion.div
      className='Spring'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      transition={{duration:2}}>
        Researchpedia<br/>
        <img src="" alt="Spring" />
      </motion.div>
      <motion.div
      className='React'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      transition={{duration:1}}>
        Pinned
      </motion.div>
      </div>
    </div>
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
        <button onClick={()=>setOpen(!open)}>x</button>
      </motion.div>
      
      }</AnimatePresence>
    </>
  )
}

export default Work