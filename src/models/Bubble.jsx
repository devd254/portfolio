import React from "react"
import Portrait from "../models/Portrait"

const Bubble = ({ position, size }) => {
    const [width, height] = size;
    const {x, y} = position;
    return(
        <div className={`relative flex w-80 h-80 top-60 left-60 z-40`}
        >
            <div className="rise">
                <div className="bubble">
                    <Portrait />
                </div> 
            </div>
            
                
        </div>
            
    )
}

export default Bubble;