import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const[time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="container">
      <h1>Digital clock</h1>
      <div className="clock">
        {time.toLocaleTimeString()}
      </div>
    </div>
  )
}

export default App