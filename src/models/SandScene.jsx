/*
References:
https://github.com/pmndrs/gltfjsx
*/


import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";

import sandScene from "../assets/sand_scene.glb";



export function SandScene(props) {
  const { nodes, materials } = useGLTF(sandScene);
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[1593.619, -2415.365, 0]}
          scale={[172.794, 105.096, 174.749]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sand.geometry}
            material={materials.sand}
            position={[6.692, 0, 9.708]}
            scale={7.438}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.seaweed.geometry}
          material={materials.seaweed}
          position={[-3484.131, -743.27, -2768.612]}
          rotation={[-0.309, 1.034, 0.179]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.starfish.geometry}
          material={materials.starfish}
          position={[-3244.255, -2279.497, 1118.447]}
          rotation={[1.844, 0.712, Math.PI]}
          scale={100}
        />
      </group>
    </group>
  );
}

export default SandScene;