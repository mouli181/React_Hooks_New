import React, { useEffect, useState } from 'react'

function Clock() {
const [time,setTime] = useState(new Date())

useEffect(()=>{
    let intervel = setInterval(()=>{
        setTime(new Date())
    },1000)

    return () => {
        clearInterval(intervel)
    }
},[])

function currentTime(){
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return(
        `${hours}:${minutes}:${seconds}`
    )
}

  return (
    <div>
        {currentTime()}
    </div>
  )
}

export default Clock