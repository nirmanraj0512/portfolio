import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'

const Speech =()=>{
    return (
    <motion.div animate={{opacity:[0,1]}}
    transition={{duration:1}}
    className='bubbleContainer'>
        <div className='bubble'>
        <TypeAnimation
      sequence={[
        1000,
       " Same substring at the start will only be typed out once, initially",
        1000,
        'We produce food for Hamsters',
        1000,
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
      //Change font style addd meainig ful text
    />
        </div>
        <img src='/man.png' alt='Man'/>
    </motion.div>
    )

}

export default Speech