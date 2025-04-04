import React, { useState } from 'react'
import "./Contact.css"
import emailjs, { init } from "@emailjs/browser"
import { useRef } from 'react'
import { motion, useInView } from "motion/react"
import { animate } from 'motion'
import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js'
import ContactSvg from './ContactSvg'

const listVariant={
    initial:{
        x:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.2,
        }
    }
}


const Contact=()=>{
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);
    const form=useRef();
    const ref=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            {
              publicKey: import.meta.env.VITE_PUBLIC_KEY,
            }
          )
          .then(
            () => {
              setSuccess(true);
              setError(false);
            },
            (error) => {
              console.log(error);
              setError(true);
              setSuccess(false);
            }
          );
      };
    

    const isInView=useInView(ref,{margin:"-200px"});
      

    return (
    <div  id="contact" className='contact' ref={ref} onSubmit={sendEmail}>
        <div className="cSection">
            <motion.form ref={form} variants={listVariant} animate={isInView?"animate":"initial"}>
                <motion.h1 variants={listVariant}className='cTitle'>Let's Keep in Touch</motion.h1>
                <motion.div variants={listVariant}className="formItem">
                    <label>Name</label>
                    <input type='text' name="user_username" placeholder='Your Name'/> 
                </motion.div>
                <motion.div variants={listVariant} className="formItem">
                    <label>E-Mail</label>
                    <input type='email' name="user_email" placeholder='abc@gmail.com'/> 
                </motion.div>
                <motion.div variants={listVariant} className="formItem">
                    <label>Message</label>
                    <textarea rows={10} name='message' placeholder='Write Your Message.'/> 
                </motion.div>
                <motion.button  variants={listVariant}className='formButton'>Send</motion.button>
                {success && <span>I recieved your Message will reach out you soon.</span>}
                {error && <span>I can't recieve your Message there is something wrong..</span>}
            </motion.form>
        </div>
        <div className='cSection'><ContactSvg/></div>
    </div>
    )
}

export default Contact