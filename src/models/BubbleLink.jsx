import React from "react"

const BubbleLink = ({button: SiteLink, type}) => {
    let style;
    if(type.localeCompare("Github") == 0){//Github
        style = `absolute flex w-80 h-60 bottom-10 left-[10rem]`;
    }
    else if(type.localeCompare("Projects") == 0){//Projects Repo
        style = `absolute flex w-80 h-60 bottom-10 right-[10rem]`;
    }
    else{//LinkedIn
        style = `absolute flex w-80 h-60 top-10 left-[25rem]`;
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