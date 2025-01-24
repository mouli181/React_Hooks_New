import React, { useState } from 'react'

function Checkbox() {
    const [selected,setSelected]=useState(false)

    function handleClick(e){
        setSelected(e.target.checked)
    }
  return (
    <div>
        <label htmlFor="">
        <input type="checkbox" value={selected} onChange={handleClick}  />
        I like this
        </label>
        <p>You {selected ? 'liked':'did not like'} this</p>
    </div>
  )
}

export default Checkbox