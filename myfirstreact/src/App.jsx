import React from 'react'
import './App.css'
import FirstComp from './propsContainer/FirstComp'
import SecondComp from './propsContainer/SecondComp'
import ThirdComp from './propsContainer/ThirdComp'
import FourthComp from './propsContainer/FourthComp'
import StateMgm from './StateMgm'
import { useState } from 'react'
import ClickEvent from './ClickEvent'
import Resize from './Chat'
import FormExample from './FormExample'
import SampleArray from './SampleArray'

const myCar = {
  brand : "Tata",
  year : 2023,
  model : "curve",
  color : "black"
};

function App() {
  
  return (
    <div className='container'>
      <SampleArray />
    </div>
  )
}

export default App