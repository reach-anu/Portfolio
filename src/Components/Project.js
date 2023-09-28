import React from 'react'
import { motion } from 'framer-motion'
import "../Css/Project.css"
import ProjectCard from "./ProjectCard"
import tincat from '../Images/tincat.png'
import portfolio from "../Images/portfolio.png"
import wiggles from "../Images/wiggles.png"
import keeper from "../Images/keeper.png"

const Project = () => {
  return (
    <div id='Project'>
    <motion.div 
    initial={{ x: 0, opacity: 0}}
    whileInView={{ x: [0], y:[-50,0], opacity: 1}}
    transition={{ duration: 1 }}>
    <h3>
      <span>P</span>
      <span>r</span>
      <span>o</span>
      <span>j</span>
      <span>e</span>
      <span>c</span>
      <span>t</span>
      <span>s</span>
    </h3>
    </motion.div>
    <div className='projectCardContainer'>
      <ProjectCard projectName="Wiggles" projectImage={wiggles}/>
      <ProjectCard projectName="Portfolio" projectImage={portfolio}/>
      <ProjectCard projectName="Keeper" projectImage={keeper}/>
      <ProjectCard projectName="Tincat" projectImage={tincat}/>
    </div>
    </div>
  )
}

export default Project