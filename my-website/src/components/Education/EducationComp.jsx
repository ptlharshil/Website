import React, { useState } from 'react'
import "./Education.css"
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactCardFlip from 'react-card-flip';
import neu from '../../images/northeastern_university_logo.png'
import mu from '../../images/mu.jpg'
import {animate, motion, useAnimation} from "framer-motion"

const AntSwitch = withStyles((theme) => ({
    root: {
      width: 94,
      height: 46,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(48px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 42,
      height: 42,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: "20px",
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

const Education = () => {
    const [state, setState] = React.useState({
        // checkedA: true,
        // checkedB: true,
        checkedC: true,
      });
    const [isFlipped, setIsFlipped]=useState(false);

    const handleClick=()=>{
        setIsFlipped(!isFlipped)
    }

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setIsFlipped(!isFlipped)
      };

      const abtVariant={
        hidden:{opacity: "1%", translateY:"-100px"},
        visible:{opacity: "100%", translateY:"1px"}
      }
  return (
    <>
    <div className='edu'>
    <motion.div
    variants={abtVariant}
    initial="hidden"
    whileInView="visible"
    transition={{duration:1}}>
        <h1 className='eduTitle'>Education</h1>
    </motion.div>

    <FormGroup>
        <div className='toggleBtn'>
        <Grid component="label" container alignItems="center" spacing={1}>
          <h3 >Undergrad</h3>
          <Grid item>
            <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
          </Grid>
          <h3>Graduate</h3>
        </Grid>
        </div>
    </FormGroup>

    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    
    <div className='eduCard'>
        <div className='neupic'>
            <img className='neuPic' src={neu} alt="NEU" />
        </div>
        <h3 className='neu'>Northeastern University</h3>
        <h4 className='neu'>From: Jan 2021 To: Dec 2022</h4>
        <h4 className='neu'>Information Systems</h4>
    </div>
    <div className='eduCard'>
        <div className='neupic'>
            <img className='neuPic' src={mu} alt="MU" /> 
        </div>
        <h3 className='mu'>Mumbai University</h3>
        <h4 className='mu'>From: 2013 To: 2017</h4>
        <h4 className='mu'>Electronic Engineering</h4>
    </div>
    </ReactCardFlip>
    </div>
    </>
    )
}

export default Education