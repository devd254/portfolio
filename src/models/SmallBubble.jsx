import React from "react"

const SmallBubble = ({ x_position, delay }) => {
    const x = x_position;
    const d = delay;
    return(
        <div>
            <div className={`relative flex w-40 h-40 above-screen bubble-small-rise`} style={{ left:`${x}px`}}
            >
                {/* Works when side-float div is removed */}
                {/* <div className="side-float"> */}
                    <div className="bubble-small" style={{ animationDelay: `${d}s` }}>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default SmallBubble;