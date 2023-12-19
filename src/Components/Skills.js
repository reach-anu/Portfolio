import React from 'react'
import "../Css/Skills.css"
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'
import {IoLogoJavascript, IoLogoReact, IoLogoNodejs,IoLogoCss3, IoLogoHtml5} from "react-icons/io5"
import {SiExpress, SiVisualstudio, SiCplusplus, SiPostman} from "react-icons/si"
import {FaBootstrap, FaGitAlt, FaGithub, FaFigma} from "react-icons/fa"

const Skills = () => {
  const skillsHeading="Professional Skills";
  return (
    <div className='skillsContainerWrapper' id='Skills'>
      <motion.div 
      className='skillsContainer'
      initial={{opacity: 0, y:[-50], scale: 0}}
      whileInView={{opacity: 1, y:[0] ,scale: 1}}
      transition={{ duration: 0.8 }}>
      <h3>
        {skillsHeading.split("").map((char)=> char===" " ? ( window.innerWidth===392 ? <br/> : " " ) : <span>{char}</span>)}
      </h3>
      </motion.div>
      <motion.div  
      className='skillsBox'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 1}}
      >
        <IconContext.Provider value={{className: 'skillIcons'}}>
          <IoLogoJavascript title="Javascript"/>
          <IoLogoReact title="ReactJS" />
          <IoLogoNodejs title="NodeJS" />
          <SiExpress title="ExpressJS" />
          <FaGitAlt title="Git" />
          <FaGithub title="Github" />
          <IoLogoCss3 title="CSS3" />
          <FaBootstrap title="Bootstrap" />
          <IoLogoHtml5 title="HTML5" />
          <FaFigma title="Figma" />
          <SiVisualstudio title="Visual studio code" />
          <SiCplusplus title="C++" />
          <SiPostman title="Postman" />
        </IconContext.Provider>
      </motion.div>
    </div>
  )
}

export default Skills