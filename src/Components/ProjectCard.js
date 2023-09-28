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
    PortfolioGithub : "https://github.com/reach-anu/Portfolio",
    PortfolioWebsite : "https://anushaka.netlify.app/",

    KeeperDesc : "A simple clone of Google keep made using React.js and react-props", 
    KeeperGithub : "https://github.com/reach-anu/Keeper",
    KeeperWebsite : "https://keeper-anushaka.netlify.app/", 

    WigglesDesc:"A comprehensive pet-friendly website which serves as a one-stop destination for all the pet. A group project made in a team of four. ",
    WigglesGithub: "https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite:"https://wiggles.vercel.app",
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