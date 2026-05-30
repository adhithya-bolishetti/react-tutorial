import React from 'react'

let array = ["Apple", "Mango", 24, {userName:"adhithya-bolishetti"}]

let players = [
    {
        cricket:"Dhoni",
        tennis:"Sania",
        chess:"Anand",
        hockey:"Dyan chand"
    }
]
const SampleArray = () => {
  return (
    <div>
        {players.map((item) => {
            return(
                <div>
                    {item.cricket}
                </div>
            )
        })}
        {players[0].chess}
        {players[0].hockey}
    </div>
  )
}

export default SampleArray