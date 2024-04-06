/*
Author: Rayaa (https://sketchfab.com/blondel.lisa)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/corals-by-rayaa-b412d11cdd3e4fe381e1be0ea15cecb6
Title: Corals by Rayaa
*/

import React from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import coral1 from "../assets/corals_by_rayaa.glb";

const Coral1 = () => {
    const { scene, animations } = useGLTF(coral1);
    const { ref, actions, names } = useAnimations(animations);
    
    return(
        <group ref={ref} dispose={null}>
            <mesh position={[50, -25, 40]}
                  scale={[40.3, 40.3, 40.3]}
                  rotation={[-5, -4.75, 5]}      
            >
                <primitive object={scene} />
            </mesh>
        </group>
    )
}

export default Coral1;