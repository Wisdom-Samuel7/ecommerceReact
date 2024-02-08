import React, { useState } from 'react'
import "./App.css"

export default function Search() {
    const [data ,setData] = useState("")

    function submitHandler(e){
       e.preventDefault()
         alert(data)
    }

  return (
    <div className='search'>
     
     <input 
         placeholder='Search'
         onChange={e=>{setData(e.target.value)}}
      />
      <input type='submit' onClick={submitHandler} />
    
    </div>
  )
}
