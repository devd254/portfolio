/*
Author: Jasmine_Sheppard (https://sketchfab.com/Jasmine_Sheppard)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/whale-shark-cute-character-ed442e9c331345cb8135beea155be354
Title: Whale Shark Cute Character
*/

import React, { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import chest from "../assets/animated_chest2.glb";

const Chest = () => {
    const { scene, animations } = useGLTF(chest);
    const { ref, actions, names } = useAnimations(animations);
    
    useEffect(() => {
        actions[names.forEach(name => {
            actions[name].play();
        })]
        return () => actions[names[2]]
    }, [actions, names])
    
    return(
        <group ref={ref} dispose={null}>
            <mesh position={[-20, -23, -100]}
                  scale={[1.3, 1.3, 1.3]}
                  rotation={[-5, 4.7, 1.2]}      
            >
                <primitive object={scene} />
            </mesh>
        </group>
    )
}

export default Chest;