import React from 'react'
import "./About.css"
import {animate, motion, useAnimation} from "framer-motion"

const About = () => {
  const abtVariant={
    hidden:{opacity: "1%", translateY:"-150px"},
    visible:{opacity: "100%", translateY:"1px"}
  }
  return (
    <div className='aboutCont'>
        <h1 className='aboutTitle'>I am a/an</h1>
        <motion.div className='fullStack'
        variants={abtVariant}
        initial="hidden"
        whileInView="visible"
        transition={{duration:1}}
        >
            <h1 className='fs'>FULL STACK DEVELOPER</h1>
        </motion.div>
        <motion.div className='uiux'
        variants={abtVariant}
        initial="hidden"
        whileInView="visible"
        transition={{duration:2}}>
            <h1 className='fs'>UI/UX Enthusiast</h1>
        </motion.div>
        <motion.div className='analyst'
        variants={abtVariant}
        initial="hidden"
        whileInView="visible"
        transition={{duration:3}}>
            <h1 className='fs'>ANALYST</h1>
        </motion.div>
    </div>

  )
}

export default About