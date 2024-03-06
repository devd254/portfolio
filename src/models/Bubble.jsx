import React from "react"
import Portrait from "../models/Portrait"

const Bubble = () => {
    
    return(
        <div>
            <div className={`relative flex w-80 h-80 bottom-40 left-[-35rem]`}
            >
                <div className="rise">
                    <div className="bubble">
                        <Portrait />
                    </div> 
                </div>  
            </div>           
        </div>
            
    )
}

export default Bubble;