import React from "react"

const BubbleLink = ({button: SiteLink, type}) => {
    let style;
    if(type.localeCompare("Github") == 0){
        style = `absolute flex w-80 h-60 bottom-10 left-[10rem]`;
    }
    else{
        style = `absolute flex w-80 h-60 top-10 right-[10rem]`;
    }

    return(
        <div>
            <div className={style}
            >
                <div className="rise">
                    <div className="bubble">
                        <div className="opacity-60 relative w-60 top-10 left-10">
                            <SiteLink />
                        </div>
                    </div> 
                </div>  
            </div>           
        </div>
            
    )
}

export default BubbleLink;