import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { FaGithubAlt } from 'react-icons/fa'
import {TbBrandLeetcode} from 'react-icons/tb'
import "../Css/Footer.css"

const Footer = () => {
  return (
    <div className='footerContainer'>
        <p>Developed &amp; Designed by Anushaka</p>
        <div>
        <IconContext.Provider value={{ className: 'footerIcons' }}>
            <a href="mailto:reachanuuu@gmail.com"><AiFillMail /></a>
            <a href="https://leetcode.com/anu_rm/"><TbBrandLeetcode /></a>
            <a href="https://github.com/reach-anu" target="_blank"><FaGithubAlt/></a>
            <a href="https://www.linkedin.com/in/anushaka-rajput-0036b322b" target="_blank"><AiFillLinkedin/></a>
        </IconContext.Provider>
        </div>
    </div>
  )
}

export default Footer