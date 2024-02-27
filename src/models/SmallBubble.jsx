import React from "react"

const SmallBubble = ({ x_position }) => {
    const x = x_position;
    return(
        <div>
            <div className={`relative flex w-60 h-60 off-up right-10`}
            >
                <div className="bubble-small">
                </div>
            </div>
        </div>
    )
}

export default SmallBubble;