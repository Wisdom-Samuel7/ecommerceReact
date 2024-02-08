import React from 'react'
import {motion} from "framer-motion"
import "./App.css"
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function Pick({items}) {
    const {id,name} = useParams()
    const [number,setNumber] = useState('')
    const [location,setLocation] = useState('')
    
    function handlesubmit(e){
      e.preventDefault()
        const address = location.toUpperCase()
        const message = `${number} ${name} has been added to cart from ${location} `
        alert(message)
      }   

  return (
    <div className='picks'>
      <div className='h1'>{name}</div>
     <div>
     <img src={`${items[id].image}`} />
     </div>
    
    <a href='/'>
    <motion.button
       className='price'
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
      <div>{items[id].price}</div> 
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="yellow" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
        </svg>
      </span>
    </motion.button>
    </a>


     <div className='item-info'>
         <div className='lg'>
           <input onChange={(e)=>{setNumber(e.target.value)}} type='number' placeholder='Quantity'/>
           <input onChange={(e)=>{setLocation(e.target.value)}} type='text' placeholder='Your location'/>
           <input onClick={handlesubmit} type='submit' value="ADD TO CART"/>
         </div>

         <div className='amount'>
           <p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" class="bi bi-backpack4-fill" viewBox="0 0 16 16">
              <path d="M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4v.5a.5.5 0 0 0 1 0V7h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2m1 2a1 1 0 0 0-2 0zm-4 9v2h6v-2h-1v.5a.5.5 0 0 1-1 0V11z"/>
              <path d="M14 7.599A3 3 0 0 1 12.5 8H9.415a1.5 1.5 0 0 1-2.83 0H3.5A3 3 0 0 1 2 7.599V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
              </svg> <span>2 left</span></p>


           <p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
               <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
               </svg> <span>xxxxxxx</span></p>

           <p> Description: </p>

           <main>{name} 2024</main>

         </div>

     </div>

    </div>
  )
}
