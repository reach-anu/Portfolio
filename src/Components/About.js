import React from 'react'
import { motion } from 'framer-motion'
import background from "../Images/background.gif"
import character from "../Images/character.svg"
import "../Css/About.css" 
const About = () => {
  return (
    <div id='About'>
    <motion.div 
    initial={{ x: 0, opacity: 0}}
    whileInView={{ x: [0], y:[-50,0], opacity: 1}}
    transition={{ duration: 1 }}>
    <h3>
      <span>A</span>
      <span>b</span>
      <span>o</span>
      <span>u</span>
      <span>t</span>
      <span className='space'></span>
      <span>m</span>
      <span>e</span>
    </h3>
    </motion.div>
    <div className='aboutContainer'>
    <motion.img 
    initial={{ x: 0, opacity: 0}}
    whileInView={{ x: [-100,0], y:[0], opacity: 0.8}}
    transition={{ duration: 1 }}
    src={background}
    className="bubble" 
    alt="About">
    </motion.img>
    <motion.img 
    initial={{ x: 0, opacity: 0}}
    whileInView={{ x: [-100,0], y:[0], opacity: 1}}
    transition={{ duration: 1 }}
    src={character} 
    className="charImg"
    >
    </motion.img>
    <motion.h4 
    initial={{ x: 0, opacity: 0}}
    whileInView={{ x: [100,0], y:[0], opacity: 1}}
    transition={{ duration: 1 }}
    className='Text'
    >
    Hello, I'm Anushaka, a final-year B.Tech student from New Delhi, India. I specialize in software engineering, with a primary focus on the React ecosystem. Over the past three years, I've diligently cultivated a strong foundation in web engineering, which I'm eager to apply to challenging projects in order to expand my skill set and tech stack. <br/><br/>My journey into software engineering was fueled by an insatiable curiosity about how websites and applications function. This curiosity led me to delve deeply into web engineering, where I honed my skills and grew passionate about the React ecosystem. React's versatility and the vibrant community surrounding it have continually inspired me.
    </motion.h4>
    </div>
    
  </div>
  )
}

export default About