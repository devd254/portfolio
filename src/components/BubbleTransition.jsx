import React from "react";

import SmallBubble from '../models/SmallBubble';


const BubbleTransition = () => {
    //Bubble rows
    let small_bubbles1 = [];
    let small_bubbles2 = [];
    let small_bubbles3 = [];
    let small_bubbles4 = [];
    let small_bubbles5 = [];
    let small_bubbles6 = [];
    let small_bubbles7 = [];
    let small_bubbles8 = [];
    let delay = 0.2;
    // Choosing Bubble
    let left = 'bubble-swirl-left';
    let right = 'bubble-swirl-right';
    let numIteration = 0;
    let choose;
    let minCeiled = Math.ceil(2.0);
    let maxFloored = Math.floor(6.0);
    let key = 0;
    //Randomize duration(speed)
    for (let i = -2900; i <= 2800; i += 150) {
        choose = numIteration % 2 == 0 ? left : right; 
        numIteration += 1
        small_bubbles1.push(<SmallBubble x_position={i}
                                        delay={delay} 
                                        direction={choose} 
                                        duration={Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                                        key={key}
                            />);
        key += 1;
    }
    numIteration = 0;
    delay += 0.1;
    for (let i = -3000; i <= 2900; i += 150) {
        choose = numIteration % 2 == 0 ? left : right; 
        numIteration += 1
        small_bubbles2.push(<SmallBubble x_position={i}
                                        delay={delay} 
                                        direction={choose}
                                        duration={Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                                        key={key}
                            />);
        key += 1;
    }
    numIteration = 0;
    delay += 0.1;
    for (let i = -2900; i <= 2800; i += 150) {
        choose = numIteration % 2 == 0 ? left : right; 
        numIteration += 1
        small_bubbles3.push(<SmallBubble x_position={i}
                                        delay={delay}
                                        direction={choose}
                                        duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                                        key={key}
                            />);
        key += 1;
    }
    numIteration = 0;
    delay += 0.1;
    for (let i = -3000; i <= 2900; i += 150) {
        choose = numIteration % 2 == 0 ? left : right; 
        numIteration += 1
        small_bubbles4.push(<SmallBubble x_position={i}
                                        delay={delay}
                                        direction={choose}
                                        duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                                        key={key}
                            />);
        key += 1;
    }
    numIteration = 0;
    delay += 0.1;
    for (let i = -2900; i <= 2800; i += 150) {
        choose = numIteration % 2 == 0 ? left : right; 
        numIteration += 1
        small_bubbles5.push(<SmallBubble x_position={i}
                                        delay={delay}
                                        direction={choose}
                                        duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                                        key={key}
                            />);
        key += 1;
    }
    numIteration = 0;
    delay += 0.1;
    for (let i = -3000; i <= 2800; i += 150) {
        choose = numIteration % 2 == 0 ? left : right; 
        numIteration += 1
        small_bubbles6.push(<SmallBubble x_position={i}
                                        delay={delay}
                                        direction={choose}
                                        duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                                        key={key}
                            />);
        key += 1;
    }
    numIteration = 0;
    delay += 0.1;
    for (let i = -2900; i <= 2800; i += 150) {
        choose = numIteration % 2 == 0 ? left : right; 
        numIteration += 1
        small_bubbles7.push(<SmallBubble x_position={i}
                                        delay={delay}
                                        direction={choose}
                                        duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                                        key={key}
                            />);
        key += 1;
    }
    numIteration = 0;
    delay += 0.1;
    for (let i = -3000; i <= 2800; i += 150) {
        choose = numIteration % 2 == 0 ? left : right; 
        numIteration += 1
        small_bubbles8.push(<SmallBubble x_position={i}
                                        delay={delay}
                                        direction={choose}
                                        duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                                        key={key}
                            />);
        key += 1;
    }

    // Random variables: amplitude(side to side), speed rise, size bubble

    return(
        <div>
            {small_bubbles1}
            {small_bubbles2}
            {small_bubbles3}
            {small_bubbles4}
            {small_bubbles5}
            {small_bubbles6}
            {small_bubbles7}
            {small_bubbles8}
        </div>
    )
}

export default BubbleTransition