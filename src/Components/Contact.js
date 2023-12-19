import React from 'react'
import { motion } from 'framer-motion'
import contact from "../Images/contact.png"
import {AiFillMail} from "react-icons/ai"
import "../Css/Contact.css"

const Contact = () => {
  return (
    <div className='contactContainerWrapper' id='Contact'>
      <motion.img 
      initial={{ x: 0, opacity: 0}}
      whileInView={{ x: [-100,0], y:[0], opacity: 1}}
      transition={{ duration: 1 }}
      src={contact} />

      <motion.div className='contactInfoContainer'
      initial={{ x: 0, opacity: 0}}
      whileInView={{ x: [100,0], y:[0], opacity: 1}}
      transition={{ duration: 1 }}>

        <h2 className='gradient'>Don't be a Stranger!</h2>
        <p>Shoot me an email if you think we're a great fit and would like to work with me. Let's have a great time while we're at it.
          <br/><br/>
          <AiFillMail className='contactSectionMailIcon'/> reachanuuu@gmail.com
        </p>
        <a href="mailto:reachanuuu@gmail.com">Get In Touch</a>

      </motion.div>
    </div>
  )
}

export default Contact