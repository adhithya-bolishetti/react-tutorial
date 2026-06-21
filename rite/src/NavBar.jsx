import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div className="navSection">
            <div className="ul">
                <Link to={"./signup"}>
                <li>FirstPage</li>
                </Link>

                <Link to={"./login"}>
                <li>SecondPage</li>
                </Link>

                <Link to={"./profile"}>
                <li>ThirdPage</li>
                </Link>
                
                <Link to={"./home"}>
                <li>FourthPage</li>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar