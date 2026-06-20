import React, { useState } from 'react'

const Circuit = () => {

    const[game, setGame] = useState(true)

    const MyGame = () => {
        return(
            <div className="div">
                <h2>I Like Cricket</h2>
            </div>
        )
    }
  return (
    <div>
        {game && <MyGame />}
    </div>
  )
}

export default Circuit