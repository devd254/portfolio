import React from "react"
import Portrait from "../models/Portrait"

const Bubble = ({ position, size }) => {
    const [width, height] = size;
    const {x, y} = position;
    return(
        <div className={`relative flex w-80 h-80 top-80 left-60`}
        >
            <div className="bubble">
                <Portrait />
            </div>
                
        </div>
            
    )
}

export default Bubble;