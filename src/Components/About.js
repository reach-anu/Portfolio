import React from 'react'
import "../Css/About.css" 
import { motion } from 'framer-motion'
import about from "../Images/about.png"
import { Tilt } from 'react-tilt'

const About = () => {
  return (
    <div id='About'>
      <motion.h3 
      initial={{ x: 0, opacity: 0}}
      whileInView={{ x: [0], y:[-50,0], opacity: 1}}
      transition={{ duration: 1 }}
      >
        <span>A</span>
        <span>b</span>
        <span>o</span>
        <span>u</span>
        <span>t</span>
      </motion.h3>
      <div className='aboutContainer'>
        <Tilt className='tilt'>
        <motion.img 
        initial={{ x: 0, opacity: 0}}
        whileInView={{ x: [-100,0], y:[0], opacity: 1}}
        transition={{ duration: 1 }}
        src={about} 
        className="aboutImg floating"
        alt="about-img"
        >
        </motion.img>
        </Tilt>
        <motion.h4 
        initial={{ x: 0, opacity: 0}}
        whileInView={{ x: [100,0], y:[0], opacity: 1}}
        transition={{ duration: 1 }}
        className='Text'
        >
          I'm a final year student pursuing <span className='highlight'>B.Tech in CSE</span> from Delhi, India. With a strong inclination towards web development and a keen interest in creating user-centric digital experiences, I have immersed myself in the world of <span className='highlight'>web development</span>, specializing in <span className='highlight'>React.js</span>. <br/> As I transition beyond academia, I look forward to further refining my skills, exploring new technologies, and collaborating on exciting projects. If you're a like-minded and have a project in mind, I'm eager to <a href='#Contact'><span className='highlight'>connect</span></a> and contribute to meaningful tech endeavors. Thank you for visiting my portfolio, and I'm excited about the opportunities ahead!
        </motion.h4>
      </div>
    </div>
  )
}

export default About