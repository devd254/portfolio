import React from 'react';
import { Canvas } from '@react-three/fiber';

import AboutHTML from '../components/AboutHTML';
import Fish from '../models/Fish';

const About = ({ isOpen }) => {
  return (
    <div className='relative w-full h-screen prevent-scroll flex bg-gradient-to-b to-blue-200 from-cyan-300'>
      <Canvas
        className='w-full h-full absolute top-0 left-0'
        camera={{ position: [-120.0, 30, 120.0], near: 0.1, far: 1000 }}
      >
        <Fish />
        <AboutHTML />
      </Canvas>
    </div>
  )
}

export default About