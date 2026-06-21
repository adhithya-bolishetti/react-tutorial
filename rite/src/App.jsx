import React from 'react'
import FirstPage from './routing/FirstPage'
import SecondPage from './routing/SecondPage'
import ThirdPage from './routing/ThirdPage'
import FourthPage from './routing/FourthPage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element = {<FirstPage />} />
        <Route path='/login' element = {<SecondPage />} />
      </Routes>
      {/* <FirstPage/>
      <SecondPage />
      <ThirdPage />
      <FourthPage /> */}
    </div>
  )
}

export default App