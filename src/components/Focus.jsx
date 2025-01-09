import React from 'react'
import { useRef } from 'react';

function Focus() {
    const input = useRef(null)
  return (
    <div>
        <input type="text" ref={input} />
        <button></button>
        <button onClick={()=>{input.current.focus()}}>Focus</button>
    </div>
  )
}

export default Focus;