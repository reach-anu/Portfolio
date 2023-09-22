import React from 'react'
import '../Css/Home.css'
import { motion } from 'framer-motion'
import {FaGithubAlt} from "react-icons/fa"
import {AiFillLinkedin}from "react-icons/ai"
import {BiLogoInstagramAlt} from "react-icons/bi"
import { IconContext } from 'react-icons'
import homegif from "../Images/home.svg"
import cat from "../Images/codingcat.png"
const Home = () => {
  return (
    <div className='homeContainer'>
        <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [0], y:[-50,0], opacity: 1}}
        transition={{ duration: 1 }}
        className='homeInfoContainer'
        >
            <h1>Hi 👋, My name is</h1>
            <h2 className='MyName'>ANUSHAKA</h2>
            <h3>
                <span>I</span>
                <span>'</span>
                <span>m</span>
                <span className='space'></span> 
                <span>a</span>
                <span className='space'></span> 
                <span>F</span>
                <span>r</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>e</span>
                <span>n</span>
                <span>d</span>
                <span className='space'></span>
                <span>D</span> 
                <span>e</span> 
                <span>v</span> 
                <span>e</span> 
                <span>l</span> 
                <span>o</span> 
                <span>p</span> 
                <span>e</span> 
                <span>r</span>
                <span>,</span>
                <span><br/></span>
                <span>S</span>
                <span>o</span>
                <span>f</span>
                <span>t</span>
                <span>w</span>
                <span>a</span>
                <span>r</span>
                <span>e</span>
                <span className='space'></span>
                <span>D</span> 
                <span>e</span> 
                <span>v</span> 
                <span>e</span> 
                <span>l</span> 
                <span>o</span> 
                <span>p</span> 
                <span>e</span> 
                <span>r</span>
                <span className='space'></span>
                <span>&</span>
                <span><br/></span>
                <span>D</span>
                <span>e</span>
                <span>s</span>
                <span>i</span>
                <span>g</span>
                <span>n</span>
                <span>e</span>
                <span>r</span>
            </h3>
            <IconContext.Provider value={{ className: 'connectIconsDisplay' }}>
              <a href="https://github.com/reach-anu" target="_blank"><FaGithubAlt/></a>
              <a><BiLogoInstagramAlt /></a>
              <a href="https://www.linkedin.com/in/anushaka-rajput-0036b322b" target="_blank"><AiFillLinkedin/></a>
            </IconContext.Provider>
            <img src={cat} />
        </motion.div>
        <motion.img src={homegif} alt="Home-gif" 
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [0], y:[-50,0], opacity: 1 }}
        transition={{ duration: 1.3 }}
        >
        </motion.img>
    </div>
  )
}

export default Home