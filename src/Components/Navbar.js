import React, { useState } from 'react'
import "../Css/Navbar.css"
import memoji from '../Images/memoji.png' 
import {AiOutlineUser} from "react-icons/ai"
import {BsCodeSlash} from "react-icons/bs"
import {IoCallOutline,IoDocumentTextOutline,IoReorderThreeOutline} from "react-icons/io5"
import {RxCross1} from "react-icons/rx"
import { IconContext } from 'react-icons'
import { motion } from 'framer-motion'
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {

  const[isClicked,setIsClicked] = useState(false);
  const HandleClick = () =>{
    setIsClicked(!isClicked);
  }

  return (
    <nav className='navbarContainer'>
    <img onClick={()=>window.scrollTo(0,0)} src={memoji} />
    <ul className='maxScreenSizeMenu'>
      <li><NavHashLink to='/#About'>About</NavHashLink></li>
      <li><NavHashLink to='/#Project'>Project</NavHashLink></li>
      <li><NavHashLink to='/#Contact'>Contact</NavHashLink></li>
      <li><NavHashLink to="/Resume">Resume</NavHashLink></li>
    </ul>
    <ul className='midScreenSizeMenu'>
      <IconContext.Provider value={{ className: 'iconsDisplay' }}> 
      <li><NavHashLink to='/#About'><AiOutlineUser /></NavHashLink></li>
      <li><NavHashLink to='/#Project'><BsCodeSlash /></NavHashLink></li>
      <li><NavHashLink to='/#Contact'><IoCallOutline /></NavHashLink></li>
      <li><NavHashLink to="/Resume"><IoDocumentTextOutline /></NavHashLink></li>
      </IconContext.Provider>
    </ul>
    { !isClicked && (
    <IoReorderThreeOutline className='threeOutlineIcon' onClick={HandleClick} /> 
    )}

    { isClicked && (
    <RxCross1 className='crossIcon' onClick={HandleClick} />
    )}
    { isClicked && (
      <ul className="dropdown_menu" onClick={HandleClick}>
      <li><NavHashLink to='/#About'><AiOutlineUser />&nbsp; About</NavHashLink></li>
      <li><NavHashLink to='/#Project'><BsCodeSlash />&nbsp; Project</NavHashLink></li>
      <li><NavHashLink to='/#Contact'><IoCallOutline />&nbsp; Contact</NavHashLink></li>
      <li><NavHashLink to="/Resume"><IoDocumentTextOutline />&nbsp; Resume</NavHashLink></li>
      </ul>
    )
    }
    </nav>
  )
}

export default Navbar