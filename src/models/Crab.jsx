/*
Author: cubemelongames (https://sketchfab.com/cubemelongames)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/crab-claw-attack-dcf0e226564b4ec3b18dd5a93e6e8110
Title: Crab Claw Attack
*/

import React, {useEffect} from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import crab from "../assets/crab_claw_attack.glb";

const Crab = () => {
    const { scene, animations } = useGLTF(crab);
    const { ref, actions, names } = useAnimations(animations);
    
    useEffect(() => {
        actions[names[0]].play()
        return () => actions[names[0]]
    }, [actions, names])

    return(
        <group ref={ref} dispose={null}>
            <mesh position={[-10, -25, 40]}
                  scale={[20.3, 20.3, 20.3]}
                  rotation={[-5, -4.75, 5]}      
            >
                <primitive object={scene} />
            </mesh>
        </group>
    )
}

export default Crab;