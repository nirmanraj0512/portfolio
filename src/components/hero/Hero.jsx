import React, { Suspense } from "react";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import { animate, easeInOut } from "motion";
import { Canvas } from "@react-three/fiber";
import Shape from "./Shape";
import ResumeButton from "./ResumeButton";

const awardVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const followVariant = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I'm Nirman!</span>
        </motion.h1>
        {/* Award */}
        <motion.div
          variants={awardVariant}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <h1>Web Engineer</h1>
          <p>Bridging creativity and technology—one line of code at a time.</p>
          <motion.div variants={awardVariant} className="awardList">
            {/* <motion.img variants={awardVariant} src="/award1.png" alt='Award1'/>
                    <motion.img variants={awardVariant} src="/award2.png" alt='Award1'/>
                    <motion.img variants={awardVariant} src="/award3.png" alt='Award1'/> */}
          </motion.div>
        </motion.div>
        {/* Resume Downloader*/}
        {/* <motion.a 
  href="https://drive.google.com/file/d/1LyXjvMcWhGLEx0Il-IsAI99svG5mz5g-/view?usp=drive_link" 
  target="_blank" 
  rel="noopener noreferrer"
  className="resumeButton"
  whileHover={{ scale: 1.1 }}
>
  <img 
    src="/download.svg" 
    alt="Download Resume" 
    className="resumeIcon"
  />
</motion.a> */}
<ResumeButton/>
      </div>
      <div className="hSection right">
        {/* FOLLow */}
        {/* Social Media Links */}
        <motion.div
          variants={followVariant}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a
            variants={followVariant}
            href="https://www.instagram.com/nirmanraj0512"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/insta.svg" alt="Instagram" className="social-icon" />
          </motion.a>
          <motion.a
            variants={followVariant}
            href="https://github.com/nirmanraj0512"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/git.svg" alt="GitHub" className="social-icon" />
          </motion.a>
          <motion.a
            variants={followVariant}
            href="https://x.com/nirmanraj_0512"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" alt="Twitter" className="social-icon" />
          </motion.a>
          <motion.div variants={followVariant} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* Buuble */}
        <Speech />

        {/* Conatct Button */}
        <motion.a
          href="mailto:nirmanraj0512@gmail.com?subject=Hiring Inquiry&body=Hi, I'm interested in hiring you. Please Contact me on this email"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            whileHover={{ rotate: 0, scale: 1.1 }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3D */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/Me2.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
