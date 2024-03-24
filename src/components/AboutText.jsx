import React, {useEffect} from "react";

const AboutText = () => {

    useEffect(() => {
        const spans = document.querySelectorAll(".word-fade");
    
        spans.forEach((span, index) => {
          span.style.animation = `text-fade-in 0.8s ${6.1 + index * 0.1}s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
        });
    }, []);

    return ( 
        <div className="h-[35rem] w-[35rem]">
            <div className={`absolute opacity-60 map-image h-[25rem] w-[19.4rem] m-5 left-24 top-14`}>
                <div className="font-caveat text-[19px] relative ml-2 mr-1 mt-6 leading-8 indent-3">
                           
                    <span className="word-fade">Hello!</span>
                    <span className="word-fade">My</span>
                    <span className="word-fade">name</span>
                    <span className="word-fade">is</span>
                    <span className="word-fade">Devon</span>
                    <span className="word-fade">Daniels.</span>
                    <span className="word-fade">I</span>
                    <span className="word-fade">am</span>
                    <span className="word-fade">a</span>
                    <span className="word-fade">Computer</span>
                    <span className="word-fade">Science</span>
                    <span className="word-fade">major</span>
                    <span className="word-fade">at</span>
                    <span className="word-fade">George</span>
                    <span className="word-fade">Mason</span>
                    <span className="word-fade">University</span>
                    <span className="word-fade">graduating</span>
                    <span className="word-fade">in</span>
                    <span className="word-fade">2025.</span>
                    <span className="word-fade">I</span>
                    <span className="word-fade">enjoy</span>
                    <span className="word-fade">full-stack</span>
                    <span className="word-fade">development</span>
                    <span className="word-fade">and</span>
                    <span className="word-fade">am</span>
                    <span className="word-fade">excited</span>
                    <span className="word-fade">to</span>
                    <span className="word-fade">learn</span>
                    <span className="word-fade">all</span>
                    <span className="word-fade">things</span>
                    <span className="word-fade">software.</span>
                    <span className="word-fade">During</span>
                    <span className="word-fade">my</span>
                    <span className="word-fade">time</span>
                    <span className="word-fade">in</span>
                    <span className="word-fade">college</span>
                    <span className="word-fade">I've</span>
                    <span className="word-fade">been</span>
                    <span className="word-fade">able</span>
                    <span className="word-fade">to</span>
                    <span className="word-fade">grow</span>
                    <span className="word-fade">and</span>
                    <span className="word-fade">implement</span>
                    <span className="word-fade">my</span>
                    <span className="word-fade">skills</span>
                    <span className="word-fade">through</span>
                    <span className="word-fade">projects</span>
                    <span className="word-fade">and</span>
                    <span className="word-fade">internships.</span>
                    <span className="word-fade">On</span>
                    <span className="word-fade">the</span>
                    <span className="word-fade">side,</span>
                    <span className="word-fade">I</span>
                    <span className="word-fade">enjoy</span>
                    <span className="word-fade">spending</span>
                    <span className="word-fade">time</span>
                    <span className="word-fade">in</span>
                    <span className="word-fade">nature,</span>
                    <span className="word-fade">weight-lifting,</span>
                    <span className="word-fade">playing</span>
                    <span className="word-fade">sports,</span>
                    <span className="word-fade">and</span>
                    <span className="word-fade">learning</span>
                    <span className="word-fade">piano.</span>
                </div>
            </div>
        </div>
    )
}

export default AboutText;