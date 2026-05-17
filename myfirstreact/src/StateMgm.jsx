import React from 'react'
import { useState, useEffect } from 'react'

const StateMgm = () => {
    const[city, setCity] = useState("Hyderabad");

    useEffect(() => {
        if(city === "Chennai") {
            setCity("Delhi")
        } else {
            setCity("Bangalore")
        }
    }, [])
  return (
    <div>{city}</div>
  )
}

export default StateMgm