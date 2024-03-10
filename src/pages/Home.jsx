/*
References:
https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
https://github.com/pmndrs/drei
*/

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Transition } from '@headlessui/react';

import { OrbitControls } from '@react-three/drei';

import Loader from '../components/Loader';
import Whale from '../models/Whale';
import Ray from '../models/Ray';
import SandScene from '../models/SandScene';

const Home = ({ isOpen }) => {

  return (
    <section className='bg-gradient-to-b to-blue-200 from-cyan-300 w-full h-screen relative'>
        <Canvas 
          className='w-full h-screen bg-transparent'
          camera={{ position: [-120.0, 30, 120.0], near: 0.1, far: 1000 }}
        >
            <OrbitControls />
            <Suspense fallback={<Loader />}>
              <ambientLight
                position={[0.0, 10.0, 0.0]}
                castShadow
                intensity={Math.PI * 2}
              />
              <SandScene />
              <Ray />
              <Whale />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home;