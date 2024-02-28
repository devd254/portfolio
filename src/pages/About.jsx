import React from 'react';
import SmallBubble from '../models/SmallBubble';
import Bubble from '../models/Bubble';

const About = ({ isOpen }) => {
  //Bubble rows
  const small_bubbles1 = [];
  const small_bubbles2 = [];
  const small_bubbles3 = [];
  const small_bubbles4 = [];
  const small_bubbles5 = [];
  const small_bubbles6 = [];
  const small_bubbles7 = [];
  const small_bubbles8 = [];
  let delay = 0.2;
  // Choosing Bubble
  let left = 'bubble-swirl-left';
  let right = 'bubble-swirl-right';
  let numIteration = 0;
  let choose;
  const minCeiled = Math.ceil(2.0);
  const maxFloored = Math.floor(6.0);
  //Randomize duration(speed)
  for (let i = -100; i <= 1800; i += 150) {
      choose = numIteration % 2 == 0 ? left : right; 
      numIteration += 1
      small_bubbles1.push(<SmallBubble x_position={i}
                                       delay={delay} 
                                       direction={choose} 
                                       duration={Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                          />);
  }
  numIteration = 0;
  delay += 0.1;
  for (let i = 0; i <= 1900; i += 150) {
      choose = numIteration % 2 == 0 ? left : right; 
      numIteration += 1
      small_bubbles2.push(<SmallBubble x_position={i}
                                       delay={delay} 
                                       direction={choose}
                                       duration={Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                          />);
  }
  numIteration = 0;
  delay += 0.1;
  for (let i = -100; i <= 1800; i += 150) {
      choose = numIteration % 2 == 0 ? left : right; 
      numIteration += 1
      small_bubbles3.push(<SmallBubble x_position={i}
                                       delay={delay}
                                       direction={choose}
                                       duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                          />);
  }
  numIteration = 0;
  delay += 0.1;
  for (let i = 0; i <= 1900; i += 150) {
      choose = numIteration % 2 == 0 ? left : right; 
      numIteration += 1
      small_bubbles4.push(<SmallBubble x_position={i}
                                       delay={delay}
                                       direction={choose}
                                       duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                          />);
  }
  numIteration = 0;
  delay += 0.1;
  for (let i = -100; i <= 1800; i += 150) {
      choose = numIteration % 2 == 0 ? left : right; 
      numIteration += 1
      small_bubbles5.push(<SmallBubble x_position={i}
                                       delay={delay}
                                       direction={choose}
                                       duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                          />);
  }
  numIteration = 0;
  delay += 0.1;
  for (let i = 0; i <= 1800; i += 150) {
      choose = numIteration % 2 == 0 ? left : right; 
      numIteration += 1
      small_bubbles6.push(<SmallBubble x_position={i}
                                       delay={delay}
                                       direction={choose}
                                       duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                          />);
  }
  numIteration = 0;
  delay += 0.1;
  for (let i = -100; i <= 1800; i += 150) {
      choose = numIteration % 2 == 0 ? left : right; 
      numIteration += 1
      small_bubbles7.push(<SmallBubble x_position={i}
                                       delay={delay}
                                       direction={choose}
                                       duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                          />);
  }
  numIteration = 0;
  delay += 0.1;
  for (let i = 0; i <= 1800; i += 150) {
      choose = numIteration % 2 == 0 ? left : right; 
      numIteration += 1
      small_bubbles8.push(<SmallBubble x_position={i}
                                       delay={delay}
                                       direction={choose}
                                       duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                          />);
  }
  
  // Random variables: amplitude(side to side), speed rise, size bubble
  return (
    <section className="prevent-scroll h-screen flex bg-gradient-to-b to-yellow-100 from-cyan-300">
      <Bubble />
      {small_bubbles1}
      {small_bubbles2}
      {small_bubbles3}
      {small_bubbles4}
      {small_bubbles5}
      {small_bubbles6}
      {small_bubbles7}
      {small_bubbles8}
    </section>
  )
}

export default About