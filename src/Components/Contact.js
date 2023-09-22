import React from 'react'
import { motion } from 'framer-motion'
import contact from "../Images/contact.png"
import {AiFillMail} from "react-icons/ai"
import "../Css/Contact.css"

const Contact = () => {
  return (
    <div id='Contact'>
      <motion.img 
      initial={{ x: 0, opacity: 0}}
      whileInView={{ x: [-100,0], y:[0], opacity: 1}}
      transition={{ duration: 1 }}
      src={contact} />
      <motion.div className='contactInfoContainer'
      initial={{ x: 0, opacity: 0}}
      whileInView={{ x: [100,0], y:[0], opacity: 1}}
      transition={{ duration: 1 }}>
        <h2>Don't be a Stranger!</h2>
        <p>Shoot me an email if you think we're a great fit and would like to work with me. Let's have a great time while we're at it.</p>
        <h4><AiFillMail/> reachanuuu@gmail.com</h4>
        <a href="mailto:reachanuuu@gmail.com"><span>Get In Touch</span></a>
      </motion.div>
    </div>
  )
}

export default Contact