import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'
import "./Speech.css"

const Speech =()=>{
    return (
    <motion.div animate={{opacity:[0,1]}}
    transition={{duration:1}}
    className='bubbleContainer'>
        <div className='bubble'>
        <TypeAnimation
      sequence={[
        1000,
        "Building seamless and scalable web applications.",
        2000,
        "MERN, Next.js, and TypeScript enthusiast!",
        2000,
        "Let's build something together!",
        2000,
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
      //Change font style addd meainig ful text
    />
        </div>
        <img src='/me.png' alt='Man'/>
    </motion.div>
    )

}

export default Speech