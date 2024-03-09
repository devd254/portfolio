import React from 'react';

import BubbleLink from '../models/BubbleLink';

import GithubIcon from '../assets/github.png';

import { Html } from '@react-three/drei';

const ContactHTML = () => {
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
        <BubbleTransition />
      </section>
    </Html>
  )
}

export default ContactHTML