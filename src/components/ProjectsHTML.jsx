import React from 'react';

import SmallBubble from '../models/SmallBubble';
import BubbleLink from '../models/BubbleLink';

import LinkedInIcon from '../assets/linkedIn.png';
import GithubIcon from '../assets/github.png';

import { Html } from '@react-three/drei';

const ContactHTML = () => {
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
  //Randomize duration(speed)
  for (let i = -900; i <= 1800; i += 150) {
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
  for (let i = -1000; i <= 1900; i += 150) {
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
  for (let i = -900; i <= 1800; i += 150) {
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
  for (let i = -1000; i <= 1900; i += 150) {
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
  for (let i = -900; i <= 1800; i += 150) {
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
  for (let i = -1000; i <= 1800; i += 150) {
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
  for (let i = -900; i <= 1800; i += 150) {
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
  for (let i = -1000; i <= 1800; i += 150) {
      choose = numIteration % 2 == 0 ? left : right; 
      numIteration += 1
      small_bubbles8.push(<SmallBubble x_position={i}
                                       delay={delay}
                                       direction={choose}
                                       duration = {Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)}
                          />);
  }
  
  // Random variables: amplitude(side to side), speed rise, size bubble

  //Different website links

  const Github = () => {
    return(
      <a href="https://github.com/devd254" target="_blank" rel="noopener noreferrer">
        <button className='relative rounded-full bg-white h-40 w-40'>
          <img src={GithubIcon} alt="Github Logo" />
        </button>
      </a>
    )
  };
  const DiscordClone = () => {
    return(
      <a href="https://discordclone-production-dc61.up.railway.app/" target="_blank" rel="noopener noreferrer">
      <button className='relative rounded-full bg-indigo-500 h-40 w-40'>
        <img src={""} alt="Discord-Clone Logo" />
      </button>
    </a>
    )
  };
  const discord_clone = "Discord";
  const github = "Github";
  return (
    <Html className='absolute h-full w-full'>
      <section className='h-full w-full'>
        <BubbleLink button={Github} type={github}/>
        <BubbleLink button={DiscordClone} type={discord_clone}/>
        {small_bubbles1}
        {small_bubbles2}
        {small_bubbles3}
        {small_bubbles4}
        {small_bubbles5}
        {small_bubbles6}
        {small_bubbles7}
        {small_bubbles8}
      </section>
    </Html>
  )
}

export default ContactHTML