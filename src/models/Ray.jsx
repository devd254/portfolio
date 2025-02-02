/*
Author: Jasmine_Sheppard (https://sketchfab.com/Jasmine_Sheppard)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/whale-shark-cute-character-ed442e9c331345cb8135beea155be354
Title: Whale Shark Cute Character
*/

import React, { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import ray from "../assets/animated_ray.glb";

const Ray = () => {
    const { scene, animations } = useGLTF(ray);
    const { ref, actions, names } = useAnimations(animations);
    
    useEffect(() => {
        actions[names[2]].play()
        return () => actions[names[2]]
    }, [actions, names])
    return(
        <group ref={ref} dispose={null}>
            <mesh position={[-20, -50, -100]}
                  scale={[1.3, 1.3, 1.3]}
                  rotation={[-5, -4.75, 5]}      
            >
                <primitive object={scene} />
            </mesh>
        </group>
    )
}

export default Ray;