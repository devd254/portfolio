import React from 'react';
import BubblePortrait from '../models/BubblePortrait';
import BubbleMap from '../models/BubbleMap';
import { Html } from '@react-three/drei';

const AboutHTML = () => {  
  return (
    <Html className='absolute h-full w-full'>
      <section className='h-full w-full'>
        <BubblePortrait />
        <BubbleMap />
      </section>
    </Html>
  )
}

export default AboutHTML