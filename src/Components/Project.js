import React from 'react'
import { motion } from 'framer-motion'
import "../Css/Project.css"
import ProjectCard from "./ProjectCard"
import tincat from '../Images/tincat.png'
import portfolio from "../Images/portfolio.png"
import wiggles from "../Images/wiggles.png"
import keeper from "../Images/keeper.png"

const Project = () => {
  const projectHeading="Projects";
  return (
    <div className='projectContainerWrapper' id='Project'>
    <motion.div 
    initial={{ x: 0, opacity: 0}}
    whileInView={{ x: [0], y:[-50,0], opacity: 1}}
    transition={{ duration: 1 }}>
    <h3>
    {projectHeading.split("").map((char) => <span>{char}</span>)}
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