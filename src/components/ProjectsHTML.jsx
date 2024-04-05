import React from 'react';

import BubbleTransition from '../components/BubbleTransition';
import BubbleLink from '../models/BubbleLink';

import EmojiIcon from '../assets/emoji.png';
import DiscordIcon from '../assets/discord.png';

import { Html } from '@react-three/drei';

const ProjectsHTML = () => {
  //Different website links
  const Emoji = () => {
    return(
      <a href="https://github.com/devd254?tab=repositories" target="_blank" rel="noopener noreferrer">
        <button className='relative rounded-full bg-white h-40 w-40'>
          <img src={EmojiIcon} alt="Link to Projects" />
        </button>
      </a>
    )
  };
  const DiscordClone = () => {
    return(
      <a href="https://github.com/devd254/discord_clone" target="_blank" rel="noopener noreferrer">
      <button className='relative rounded-full bg-indigo-200 h-40 w-40'>
        <img src={DiscordIcon} alt="Discord-Clone Logo" />
      </button>
    </a>
    )
  };
  const discord_clone = "Discord";
  const project_repo = "Projects";
  return (
    <Html className='absolute h-full w-full'>
      <section className='h-full w-full'>
        <BubbleLink button={Emoji} type={project_repo}/>
        <BubbleLink button={DiscordClone} type={discord_clone}/>
        <BubbleTransition />
      </section>
    </Html>
  )
}

export default ProjectsHTML