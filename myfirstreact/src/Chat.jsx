import React, { useEffect, useState } from 'react'

const Resize = () => {

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const updateScreenSize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

  return (
    <div>
        <h1>ScreenSize</h1>
        <h2>Adjust the screensize</h2>
        <h2 style={{color: "blue"}}>width: {screenSize.width}</h2>
        <h2 style={{color: "blue"}}>Height: {screenSize.height}</h2>
    </div>
  )
}

export default Resize