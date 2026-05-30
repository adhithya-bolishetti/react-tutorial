import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const FormExample = () => {
    
    const [userName, setUserName] = useState()

    const [newUserDetails, setNewUserDetails] = useState()

    const notify = () => toast("Your data is uploaded successfully!");

    const getUserName = (event) => {
        setUserName(event.target.value)
    }

    const userDetails = (event) => {
        event.preventDefault()
        setNewUserDetails(userName)
        notify()
    }

  return (
    
    <section className='form-section'>
        <h2>Hello, {newUserDetails}</h2>
        <ToastContainer />
        <div className='input-div'>
           <form onSubmit={userDetails}>
            <input type='text' placeholder='Enter Your Name' onChange={getUserName}/>
            <button type='submit'>Submit</button>
           </form>
        </div>
    </section>
  )
}

export default FormExample