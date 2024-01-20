/*
References:
https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
https://github.com/pmndrs/drei
*/

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/Loader';

import { OrbitControls } from '@react-three/drei';

import Whale from '../models/Whale';
import SandScene from '../models/SandScene';

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
        <Canvas 
          className='w-full h-screen bg-transparent'
          camera={{ near: 0.1, far: 1000 }}
        >
            <OrbitControls />
            <Suspense fallback={<Loader />}>
                    <ambientLight
                      position={[0.0, 10.0, 0.0]}
                      castShadow
                      intensity={Math.PI * 2}
                    />
                <SandScene />
                
                <Whale />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home;