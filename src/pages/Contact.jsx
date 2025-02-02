import React from 'react';
import { Canvas } from '@react-three/fiber';

import ContactHTML from '../components/ContactHTML';
import Turtle from '../models/Turtle';

const Contact = () => {
  return (
    <div className='relative w-full h-screen prevent-scroll flex bg-gradient-to-b to-blue-200 from-cyan-300'>
      <Canvas
        className='flex w-full h-full top-0 left-0'
        camera={{ position: [-2.5, 3, 2.5], near: 0.1, far: 1000 }}
      >
        <directionalLight
          position={[0.0, 10.0, 0.0]}
          castShadow
          intensity={Math.PI * 2}
        />
        <Turtle />
        <ContactHTML />
      </Canvas>
    </div>
  )
}

export default Contact