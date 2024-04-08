/*
Author: cheli_sanjuan (https://sketchfab.com/jl_sanjuan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/octopus-27c322f512514830b03eeeb489ed12ac
Title: Octopus
*/

import React, {useEffect} from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import octopus from "../assets/octopus.glb";

const Octopus = () => {
    const { scene, animations } = useGLTF(octopus);
    const { ref, actions, names } = useAnimations(animations);
    
    useEffect(() => {
        actions[names[0]].play()
        return () => actions[names[0]]
    }, [actions, names])

    return(
        <group ref={ref} dispose={null}>
            <mesh position={[-200, -25, -60]}
                  scale={[100.3, 100.3, 100.3]}
                  rotation={[-5, -4.75, 5]}      
            >
                <primitive object={scene} />
            </mesh>
        </group>
    )
}

export default Octopus;