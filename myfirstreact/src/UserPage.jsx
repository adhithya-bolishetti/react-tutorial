import React, { useEffect, useState } from 'react'


const usreDetails = "https://jsonplaceholder.typicode.com/posts"

console.log(usreDetails)

const UserPage = () => {

    const [user, setUser] = useState([])

    const userHandler = async () => {
        const response = await fetch(usreDetails)
        const newData = await response.json()
        setUser(newData)
    }

    useEffect(() => {
        console.log(userHandler())
    },[])
    
  return (
    <div>
        {
            user.map((item) => {
                return(
                    <div className='userSection'>
                        <h2 style={{color: "blue"}}>{item.title}</h2>
                        <h3>{item.body}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}
 
export default UserPage