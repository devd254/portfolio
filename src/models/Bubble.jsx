import React from "react"

const Bubble = ({ position, size }) => {
    const [width, height] = size;
    const {x, y} = position;
    return(
        <div className={`relative w-${width} h-${height} bottom-0 left-0`}
        >
            <div className="bubble"/>

        </div>
            
    )
}

export default Bubble;