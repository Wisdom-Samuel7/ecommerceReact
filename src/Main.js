import React from 'react'
import { motion, spring } from "framer-motion";

export default function Main() {
  const btnFramer ={
    nothing:{
      y: -500
    },
    visible:{
      y: 0
    }
  }
  return (
    <div className='main' 
      style={{
        backgroundImage: "url('black-friday-elements-assortment.jpg')",
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
    >
      <div className='intro'>

        <motion.h1
          initial={{
            x:1000,
            opacity:0
          }}
          animate={{
            opacity:1,
             x:0
          }}

          transition={{
            type:"spring",
            stiffness:260,
            
          }}
        >
           We've got <span>YOU</span> covered <span>...</span>
        </motion.h1>

        <motion.button
          variants={btnFramer}
          initial="nothing"
          animate="visible"

          transition={{
            type:"spring",
            stiffness:160,
            duration: 2,
        
          }}
        >
         <a href='/items'>GET YOUR BOX</a> 
        </motion.button>


      </div>

    </div>
  )
}
