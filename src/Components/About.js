import React from 'react'
import "../Css/About.css" 
import { motion } from 'framer-motion'
import about from "../Images/about.png"
import { Tilt } from 'react-tilt'

const About = () => {
  const aboutHeading="About";
  return (
    <div className='aboutContainerWrapper' id='About'>
      <motion.h3 
      initial={{ x: 0, opacity: 0}}
      whileInView={{ x: [0], y:[-50,0], opacity: 1}}
      transition={{ duration: 1 }}
      >
        {aboutHeading.split("").map((char)=> <span>{char}</span>)}
      </motion.h3>
      <div className='aboutContainer'>
        <Tilt className='tiltEffect'>
        <motion.img 
        initial={{ x: 0, opacity: 0}}
        whileInView={{ x: [-100,0], y:[0], opacity: 1}}
        transition={{ duration: 1 }}
        src={about} 
        className="aboutIllustration floatingAnimation"
        alt="about-img"
        >
        </motion.img>
        </Tilt>
        <motion.h4 
        initial={{ x: 0, opacity: 0}}
        whileInView={{ x: [100,0], y:[0], opacity: 1}}
        transition={{ duration: 1 }}
        className='aboutSectionText'
        >
          I'm a final year student pursuing <span className='highlightText'>B.Tech in CSE</span> from Delhi, India. With a strong inclination towards web development and a keen interest in creating user-centric digital experiences, I have immersed myself in the world of <span className='highlightText'>web development</span>, specializing in <span className='highlightText'>React.js</span>. <br/><br/> As I transition beyond academia, I look forward to further refining my skills, exploring new technologies, and collaborating on exciting projects. If you're a like-minded and have a project in mind, I'm eager to <a href='#Contact'><span className='highlightText'>connect</span></a> and contribute to meaningful tech endeavors. Thank you for visiting my portfolio!
        </motion.h4>
      </div>
    </div>
  )
}

export default About