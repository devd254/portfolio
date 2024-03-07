import React from "react"
import AboutText from "../components/AboutText";

const BubbleMap = () => {
    
    return(
        <div>
            <div className={`absolute flex w-[35rem] h-[35rem] top-[-14rem] left-0`}>
                <div className="rise">
                    <div className="bubble-map">
                        <AboutText />
                    </div> 
                </div>  
            </div>           
        </div>
            
    )
}

export default BubbleMap;