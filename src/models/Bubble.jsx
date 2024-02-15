import React from "react"

const Bubble = ({ position, size }) => {
    const [width, height] = size;
    const {x, y} = position;
    return(
        <div className={`w-${width} h-${height}`}
        >
            <div className="bubble"/>

        </div>
            
    )
}

export default Bubble;