import React, { useState } from 'react'
import "../Css/Navbar.css"
import { Link } from 'react-router-dom'
import memoji from '../Images/memoji.png' 
import {AiOutlineUser} from "react-icons/ai"
import {BsCodeSlash} from "react-icons/bs"
import {IoCallOutline,IoDocumentTextOutline,IoReorderThreeOutline} from "react-icons/io5"
import {RxCross1} from "react-icons/rx"
import { IconContext } from 'react-icons'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {

  const[isClicked,setIsClicked] = useState(false);
  const HandleClick = () =>{
    setIsClicked(!isClicked);
  }

  return (
    <nav className='navbarContainer'>
    <span><img onClick={()=>window.scrollTo(0,0)} src={memoji} /></span>
    <ul className='enabled'>
      <li><NavHashLink to='/#About'>About</NavHashLink></li>
      <li><NavHashLink to='/#Project'>Project</NavHashLink></li>
      <li><NavHashLink to='/#Contact'>Contact</NavHashLink></li>
      <li><NavHashLink to="/Resume">Resume</NavHashLink></li>
    </ul>
    <ul className='disabled'>
      <IconContext.Provider value={{ className: 'iconsDisplay' }}> 
      <li><NavHashLink to='/#About'><AiOutlineUser /></NavHashLink></li>
      <li><NavHashLink to='/#Project'><BsCodeSlash /></NavHashLink></li>
      <li><NavHashLink to='/#Contact'><IoCallOutline /></NavHashLink></li>
      <li><NavHashLink to="/Resume"><IoDocumentTextOutline /></NavHashLink></li>
      </IconContext.Provider>
    </ul>
    { !isClicked && (
    <IoReorderThreeOutline className='menuIcon' onClick={HandleClick} /> 
    )}

    { isClicked && (
    <RxCross1 className='iconsDisplay' onClick={HandleClick} />
    )}
    { isClicked && (
      <ul>
      <li>About</li>
      <li>Project</li>
      <li>Contact</li>
      <li>Resume</li>
      </ul>
    )
    }
    </nav>
  )
}

export default Navbar