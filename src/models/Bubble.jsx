import React from "react"
import Portrait from "../models/Portrait"

const Bubble = () => {
    
    return(
        <div>
            <div className={`fixed flex w-80 h-80 top-60 left-60`}
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