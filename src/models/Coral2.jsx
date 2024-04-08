/*
Author: Valery.Li (https://sketchfab.com/Valery.Li)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fan-coral-med-f438cf7717284f9ea70b8fbff89dc836
Title: Fan Coral Med
*/

import React from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import coral2 from "../assets/fan_coral_med.glb";

const Coral2 = () => {
    const { scene, animations } = useGLTF(coral2);
    const { ref, actions, names } = useAnimations(animations);
    
    return(
        <group ref={ref} dispose={null}>
            <mesh position={[250, -25, 40]}
                  scale={[550.3, 550.3, 550.3]}
                  rotation={[-5, -4.75, 5]}      
            >
                <primitive object={scene} />
            </mesh>
        </group>
    )
}

export default Coral2;