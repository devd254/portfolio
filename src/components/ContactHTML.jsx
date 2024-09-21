import React from 'react';
import BubbleLink from '../models/BubbleLink';

import LinkedInIcon from '../assets/linkedIn.png';
import GithubIcon from '../assets/github.png';
import ContactForm from '../models/ContactForm';

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
  const LinkedIn = () => {
    return(
      <a href="https://www.linkedin.com/in/devondaniels3" target="_blank" rel="noopener noreferrer">
      <button className='relative rounded-full bg-blue-500 h-40 w-40'>
        <img src={LinkedInIcon} alt="LinkedIn Logo" />
      </button>
    </a>
    )
  };
  const linkedin = "LinkedIn";
  const github = "Github";
  return (
    <Html className='absolute h-full w-full'>
      <section className='h-full w-full'>
        <BubbleLink button={Github} type={github}/>
        <BubbleLink button={LinkedIn} type={linkedin}/>
        <ContactForm />
      </section>
    </Html>
  )
}

export default ContactHTML