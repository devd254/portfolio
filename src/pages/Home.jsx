/*
References:
https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
https://github.com/pmndrs/drei
*/

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { OrbitControls } from '@react-three/drei';

import Loader from '../components/Loader';
import BubbleTransition from '../components/BubbleTransition';
import { Html } from '@react-three/drei';

import Whale from '../models/Whale';
import Ray from '../models/Ray';
import Chest from '../models/Chest';
import SandScene from '../models/SandScene';
import Shipwreck from '../models/Shipwreck';
import Crab from '../models/Crab';
import Coral1 from '../models/Coral1';
import Octopus from '../models/Octopus';
import Coral2 from '../models/Coral2';

const Home = () => {

  return (
    <section className='bg-gradient-to-b to-blue-200 from-cyan-300 w-full h-screen relative'>
        <Canvas 
          className='w-full h-screen bg-transparent'
          camera={{ position: [-50.0, 20, 50.0], near: 0.1, far: 1000 }}
        >
            <fog attach="fog" color="lightblue" near={1} far={500} />
            <OrbitControls 
              enableZoom={false}
              maxPolarAngle={Math.PI / 2.3}
              minPolarAngle={Math.PI / 2.3}
            />
            <Html>
              <BubbleTransition />
            </Html>
            <Suspense fallback={<Loader />}>
              <directionalLight
                position={[-10.0, 10.0, 0.0]}
                castShadow
                intensity={Math.PI * 2}
              />
              <directionalLight
                position={[10.0, 10.0, 0.0]}
                castShadow
                intensity={Math.PI * 2}
              />
              <SandScene />
              <Ray />
              <Whale />
              <Chest />
              <Shipwreck />
              <Crab />
              <Coral1 />
              <Coral2 />
              <Octopus />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home;