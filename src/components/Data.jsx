import React, { createContext, useContext } from 'react'

const userContext = createContext();

function Data() {
  return (
    <userContext.Provider value={"Moulitharan"}>
        <UserName />
    </userContext.Provider>
  )
}

export default Data
 
function UserName(){
    const user = useContext(userContext);
    return <h2>Logged user is {user}</h2>
}