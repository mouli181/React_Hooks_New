import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Mouse() {
    const [position,setPosition] = useState({x:0,y:0})

    useEffect(()=>{
        function handleMove(e){
            setPosition({x:e.clientX,y:e.clientY
        });
    }
        window.addEventListener('pointermove',handleMove);
        return() =>{
            window.removeEventListener('pointermove',handleMove)
        };
    },[])

  return (
    <div style={{
        position:'absolute',
        backgroundColor:'light-grey',
        borderRadius:'50%',
        opacity:0.6,
        transform:`translate(${position.x}px,${position.y}px)`,
        pointerEvents :'none',
        left: -30,
      top: -30,
      width: 40,
      height: 40,
    }}>

    </div>
  )
}

export default Mouse