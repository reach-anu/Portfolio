import React  from 'react'
import '../Css/Home.css'
import { motion } from 'framer-motion'
import {FaGithubAlt} from "react-icons/fa"
import {AiFillLinkedin, AiFillMail}from "react-icons/ai"
import { IconContext } from 'react-icons'
import home from "../Images/home.svg"
import cat from "../Images/codingcat.png"
const Home = () => {
  const homeStr="I'm a React Developer,|Software Developer &|Designer";
  return (
    <div id="Home" className='homeContainer'>
      <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [0], y:[-50,0], opacity: 1}}
      transition={{ duration: 1 }}
      className='homeInfoContainer'
      >
        <h1>Hi 👋, My name is</h1>
        <h2 className='myName gradient'>ANUSHAKA</h2>
        <h3>
          {homeStr.split("").map((char) => char === " " ? " " : (char === "|" ? <br/> : <span>{char}</span>))}
        </h3>
        <div className='connectIconscontainer'>
        <IconContext.Provider value={{ className: 'connectIconsDisplay' }}>
          <a href="https://github.com/reach-anu" target="_blank" rel="noreferrer"><FaGithubAlt/></a>
          <a href="https://www.linkedin.com/in/anushaka-rajput-0036b322b" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
          <a href="mailto:reachanuuu@gmail.com"><AiFillMail /></a>
        </IconContext.Provider>
        </div>
        <img src={cat} alt="home-cat"/>
      </motion.div>
      <motion.img src={home} 
      alt="home-gif" 
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [0], y:[-50,0], opacity: 1 }}
      transition={{ duration: 1.3 }}
      >
      </motion.img>
    </div>
  )
}

export default Home;