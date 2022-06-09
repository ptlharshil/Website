import React, { useState } from 'react'
import "./Work.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import {animate, AnimatePresence, motion, useAnimation} from "framer-motion"
const Work = () => {
  const [open,setOpen]=useState(false)
  const [show,setShow]=useState(false)
  const [openReact,setOpenReact]=useState(false)
  const [openSQL,setOpenSQL]=useState(false)
  const [openSpring,setOpenSpring]=useState(false)
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
  const handleClickReact=()=>{
    setOpenReact(!openReact)
    setShow(!show)
  }
  const handleClickSQL=()=>{
    setOpenSQL(!openSQL)
    setShow(!show)
  }
  const handleClickSpring=()=>{
    setOpenSpring(!openSpring)
    setShow(!show)
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
      onClick={handleClick}
      >
        Sexual Awareness and Help System
        {/* <LaunchIcon onClick={handleClick} className="launch" fontSize='small'/> */}
      </motion.div>
      <motion.div
      className='SQL'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      onClick={handleClickSQL}
      transition={{duration:2}}>
        Rental Bike RDBMS
        {/* <LaunchIcon onClick={handleClick} className="launch" fontSize='small'/> */}
      </motion.div>
      </div>
      <div className='workWrap2'>
      <motion.div
      className='Spring'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      transition={{duration:2}}
      onClick={handleClickSpring}>
        Research-pedia
        {/* <LaunchIcon onClick={handleClick} className="launch" fontSize='small'/> */}
      </motion.div>
      <motion.div
      className='React'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      transition={{duration:1}}
      onClick={handleClickReact}>
        Pinned
        {/* <LaunchIcon onClick={handleClick} className="launch" fontSize='small'/> */}
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
        
        <button className='close' onClick={handleClick}><b>x</b></button><br />
        <h1 className='title'>Java</h1>
        <p className='paragraph'>Sexual Awareness and Help System is a multi-party digital
           ecosystem application for the victims of sexual abuse. 
           It connects the victim to doctors, psychologists, help 
           providers and pharmacy
        </p>
        <h1 className='github'><a href="https://github.com/ajinkyabhabad/AED_Project.git"><GitHubIcon/></a></h1>
        
      </motion.div>
      
      }
      {openReact&&
      <motion.div
      className='JavaCard'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      >
        
        <button className='close' onClick={handleClickReact}><b>x</b></button><br />
        <h1 className='title'>React</h1>
        <p className='paragraph'>Pinned is a travel logs application made for
        trourists to plan their tour. It is developed using MongoDB, Express.js, React.js 
        and Node.js. 
        </p>
        <h1 className='github'><a href="https://github.com/ptlharshil/Pinned-Travel_Reviews_Web_App.git"><GitHubIcon/></a></h1>
        
      </motion.div>

      }
      {openSQL &&
      <motion.div
      className='JavaCard'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      >
        
        <button className='close' onClick={handleClickSQL}><b>x</b></button><br />
        <h1 className='title'>SQL</h1>
        <p className='paragraph'>Rental Bike Relational Database Management System
        is used for examining the data to determine the regular customers, demand and supply of
        the rental bikes to improve efficiency.

        </p>
        <h1 className='github'><a href="https://github.com/ptlharshil/Rental_Bike_DBMS.git"><GitHubIcon/></a></h1>
        
      </motion.div>

      }
      {openSpring &&
      <motion.div
      className='JavaCard'
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      >
        
        <button className='close' onClick={handleClickSpring}><b>x</b></button><br />
        <h1 className='title'>Spring</h1>
        <p className='paragraph'>Research-pedia is a web application to connect students
        and researchers to collaborate and work on research papers.
        </p>
        <h1 className='github'><a href="https://github.com/ptlharshil/Research-pedia.git"><GitHubIcon/></a></h1>
        
      </motion.div>

      }
      </AnimatePresence>
    </>
  )
}

export default Work