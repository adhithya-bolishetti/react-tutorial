import React from 'react'

const FirstComp = (props) => {
    const {brand, year, model, color} = props.myCar
  return (
    <div>
        <div>{brand}</div>
        <div>{year}</div>
        <div>{model}</div>
        <div>{color}</div>
    </div>
  )
}

export default FirstComp