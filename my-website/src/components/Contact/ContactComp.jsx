import React from 'react'
import './Contact.css'
import PersonIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Close';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { useState } from 'react';
import {animate, motion, useAnimation} from "framer-motion"

const Contact = () => {
  const [contact,setContact]=useState(true)
  
  return (<>
  {contact?
    <div className='connect'>
      <ul style={{listStyle:"none"}}>
        <li className='li'><a href="https://www.linkedin.com/in/harshilpatel3695/" className='linkedin'><LinkedInIcon/></a></li>
        <li className='li'><a href="https://github.com/ptlharshil" className='github'><GitHubIcon/></a></li>
        <li className='li'><a href="mailto:patel.harshil@northeastern.edu" className='email'><EmailIcon/></a></li>
      </ul>
    </div>
    :""
  }
    <button className='contactBtn' onClick={()=>setContact(!contact)}>
      {contact==true?<CloseIcon/>:<PersonIcon/>}
    </button>
    </>
  )
}

export default Contact