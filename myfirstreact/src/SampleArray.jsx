import React from 'react'
import { userData } from './data'

let array = ["Apple", "Mango", 24, {userName:"adhithya-bolishetti"}]

let players = [
    {
        cricket:"Dhoni",
        tennis:"Sania",
        chess:"Anand",
        hockey:"Dyan chand"
    }
]

console.log(userData)
const SampleArray = () => {
  return (
    <div>
        {
            userData.map((user) => {
                return(
                    <div style={{border: "1px solid black"}}>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div>{user.address.street}</div>
                    </div>
                )
            }
        )}
    </div>
  )
}

export default SampleArray