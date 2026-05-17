import React from 'react'
import { useState, useEffect } from 'react'

const ClickEvent = () => {

    const[number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1)
    }

    const decerement = () => {
        number <= 0 ? alert("Maximum decrement limit reached") : setNumber(number - 1);
    }

    const reset = () => {
        setNumber(0)
    }

  return (
    <div className='number-container'>
        <h1>{number}</h1>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decerement}>Decrement</button>
        </div>
        <button className='reset-btn' onClick={reset}>Reset</button>
    </div>
  )
}

export default ClickEvent