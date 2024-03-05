import React from "react"

const SmallBubble = ({ x_position, delay, direction, duration }) => {
    const x = x_position;
    const d = delay;
    const direct = direction;
    const time = duration;

    return(
        <div>
            <div className={`fixed flex w-40 h-40 above-screen ${direct}`} style={{ left:`${x}px` }}
            >
                    <div className="bubble-small" style={{ animationDelay: `${d}s`, animationDuration: `${time}s` }}>
                    </div>
            </div>
        </div>
    )
}

export default SmallBubble;