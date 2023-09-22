import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaGithubAlt } from 'react-icons/fa'
import "../Css/Footer.css"

const Footer = () => {
  return (
    <div className='footerContainer'>
        <p>Developed by Anushaka</p>
        <div>
        <IconContext.Provider value={{ className: 'footerIcons' }}>
            <a href="https://github.com/reach-anu" target="_blank"><FaGithubAlt/></a>
            <a><BiLogoInstagramAlt /></a>
            <a href="https://www.linkedin.com/in/anushaka-rajput-0036b322b" target="_blank"><AiFillLinkedin/></a>
        </IconContext.Provider>
        </div>
    </div>
  )
}

export default Footer