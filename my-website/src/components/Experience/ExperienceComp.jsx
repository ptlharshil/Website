import React from 'react'
import "./Experience.css"
import {animate, motion, AnimatePresence,useAnimation} from "framer-motion"
import { useState } from "react"
import EI from "../../images/ei.jpg"
import Benu from "../../images/Benu.png"
const Experience = () => {
    const allIngredients = [
        { icon: "</>", label: "Developer" },
        { icon: "~>", label: "Analyst" },
      ];
      
      const [developer,analyst] = allIngredients;
      const tabs = [developer,analyst];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const abtVariant={
        hidden:{opacity: "1%", translateY:"-100px"},
        visible:{opacity: "100%", translateY:"1px"}
    }

    const handleChange=(item)=>{
        setSelectedTab(item);
    }
    

  return (
    <>
    <div className='exp'>
    <motion.div
    variants={abtVariant}
    initial="hidden"
    whileInView="visible"
    transition={{duration:1}}>
        <h1 className='eduTitle'>Experience</h1>
    </motion.div>
    
    
    <div className="window">
      <nav>
        <ul className='ul'>
          {tabs.map((item) => (
            <li
              key={item.label}
              id="li"
              className={item.label ==selectedTab.label ? "selected":"" }
              onClick={() => handleChange(item)}
            >
              {`${item.icon} ${item.label}`}
              {item.label==selectedTab.label?
              <motion.div className="underline" layoutId="underline"/>
                :null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectedTab.label=="Developer" ?
            <div className='development'> 
            <img className='benu' src={Benu} alt="Benu" />
            <h3>Full Stack Web App Developer Co-op</h3>
            <h4>From: Jan 2022 To: Aug 2022</h4>
            <h5>*Debugged *Fixed *Enhanced UI/UX *Optimized *Tested</h5>
            
            </div>
            : <div className='development'> 
            <img src={EI} alt="EI" className='ei'/>
            <h3>Electromac Industries (Procurement Analyst)</h3>
            <h4>From: 2017 To: Aug 2020</h4>
            <h5>*Leader *Reduced costs *Active Listener *Go-getter</h5>
            
            </div>}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
    </div>
    </>
  )
}

export default Experience