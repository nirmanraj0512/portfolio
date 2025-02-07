import React from 'react'
import "./Services.css"
import MacbookContainer from './computer/MacbookContainer'
import Counter from './Counter';
import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js';
import { animate, stagger } from 'motion';
import { motion, useInView } from 'motion/react';
import { useRef,useState,useEffect } from 'react';

const textVariant={
    initial:{
        x:-100,
        y:-100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
        }
    }
};

const listVariant={
    initial:{
        x:-100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:1,
        }
    }
};

const services = [
    {
      id: 1,
      img: "/service1.png",
      title: "Web Development",
      counter: 2,
    },
    {
      id: 2,
      img: "/service2.png",
      title: "Product Design",
      counter: 0,
    },
    {
      id: 3,
      img: "/service3.png",
      title: "UI/UX",
      counter: 1,
    },
  ];

const Services=()=>{
    const [currentServiceId,setCurrentServiceId]=useState(1);

    //This is for whenever we come to thos page animation will relaod it self
    const ref=useRef();
    const isInView=useInView(ref,{margin:"-200px"});
    return (
    <div className='services' ref={ref}>
        <div className="sSection left">
            <motion.h1 
            variants={textVariant}
            initial="initial" 
            //yahi us ko parit kar rahe hai isINVIEW Wala code ko
            animate={isInView ? "animate":"initial"} 
            className='sTitle'>How do I help?</motion.h1>
            <motion.div
             variants={listVariant}
             initial="initial" 
             animate={isInView ? "animate":"initial"} 
             className='serviceList'>
                {services.map((service)=>(
                    <div className='service' key={service.id} onClick={()=>setCurrentServiceId(service.id)}>
                        <div className='serviceIcon'>
                            <img src={service.img} alt='Service'/>
                        </div>
                        <div className='serviceInfo'>
                            <h2>{service.title}</h2>
                            <h3>{service.counter}</h3>
                        </div>
                    </div>
                ))}
            </motion.div>
            <div className='counterList'>
                <Counter from={0} to={3} text="Project Completed" />
                <Counter from={0} to={0} text="Happy Clients" />
            </div>
        </div>
        <div className="sSection right">
            {currentServiceId===1? (<MacbookContainer/>):null}
            {/* {currentServiceId===2? (<HondaContainer/>):null} */}
        </div>
    </div>
    )
}

export default Services