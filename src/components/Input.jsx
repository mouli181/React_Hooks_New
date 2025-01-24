import React, { useRef } from 'react'

function Input() {
   const input = useRef()
  return (
    
    <div>
        <input type="text" ref={input} />
        <button onClick={()=>{input.current.focus()}}>Click me</button>
    </div>
  )
} 

export default Input