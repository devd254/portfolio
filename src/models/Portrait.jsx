import React from "react"
import portrait from "../assets/circle_portrait.png"

const Portrait = () => {
    return (
        <div className="relative invis opacity-60">
            <div className="fade-in">
                <img src = {portrait}>
                </img>
            </div>

        </div>
    )
}
 
export default Portrait;