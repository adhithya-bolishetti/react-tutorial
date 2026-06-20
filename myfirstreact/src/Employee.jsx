import React, { useState } from 'react'

const Employee = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [dept, setDept] = useState("")

    const empDetails = {name, email, role, dept}

    const empHandler = async(e) => {
        e.preventDefault()
        console.log(empDetails)

        const response = await fetch("http://localhost:3000/api/emp/save", {
            method: "POST",
            headers: {
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(empDetails)
        })

    }

  return (
    <div className="empForm">
        <div className="section">
            <form onSubmit={empHandler}>
                <label>Employee Name</label>
                <input type='text' name='name' onChange={(e) => setName(e.target.value)}/>

                <label>Employee E-mail</label>
                <input type='email' name='mail' onChange={(e) => setEmail(e.target.value)}/>

                <label>Employee Role</label>
                <input type='text' name='role' onChange={(e) => setRole(e.target.value)}/>

                <label>Employee Department</label>
                <input type='text' name='dept' onChange={(e) => setDept(e.target.value)}/>

                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Employee