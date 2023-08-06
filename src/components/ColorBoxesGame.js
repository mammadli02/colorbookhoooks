
import React, { useState } from 'react'
const colors=["red", "orange", "black", "brown", "blue", "gray", "green"]
const ColorBoxesGame=()=>{
    const [color, setColor] = useState(null)
    const randomMethod = () => {
        let randomNumber=Math.floor(Math.random() * colors.length)
        setColor(colors[randomNumber])
    };
   
    return(
        <div 
        style={{
            width: '150px',
            height: '150px',
            background: color || 'white', 
            
          }}
           onClick={randomMethod}>ColorBoxesGame</div>
    )
}




export default ColorBoxesGame