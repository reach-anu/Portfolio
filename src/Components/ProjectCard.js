import React from 'react'
import { motion } from 'framer-motion'
import {AiOutlineEye} from "react-icons/ai"
import { FaGithubAlt } from 'react-icons/fa'

const ProjectCard = ({projectName,projectImage}) => {
  const desc = {
    TincatDesc : "A tinder website for Cats developed using HTML, CSS and Bootstrap. It is completely responsive",
    TincatGithub : "https://github.com/reach-anu/tincat",
    TincatWebsite : "https://reach-anu.github.io/tincat/",

    PortfolioDesc : "Dynamic personal portfolio showcasing skills and projects, built with React.js for a captivating and interactive web experience.",
    PortfolioGithub : "",
    PortfolioWebsite : "",
  }


  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{ duration: 0.8 }}
    className='projectCard'>
      <a href={desc[projectName + 'Website']} target="_blank">
      <div className='projectImageContainer'>
        <img src={projectImage} />
        <AiOutlineEye className='viewIcon'/>
        </div>
          <div className='projectInfo'>
          <h2>{projectName}</h2>
          <a href={desc[projectName + 'Github']} target="_blank"><FaGithubAlt className='githubIcon'/></a>
          </div>
          <p>{desc[projectName + 'Desc']}</p>
        </a>
    </motion.div>
  )
}

export default ProjectCard