import React from "react"

const BubbleLink = ({button: SiteLink}) => {
    return(
        <div>
            <div className={`relative flex w-80 h-80 bottom-40 left-[-35rem]`}
            >
                <div className="rise">
                    <div className="bubble">
                        <SiteLink />
                    </div> 
                </div>  
            </div>           
        </div>
            
    )
}

export default BubbleLink;