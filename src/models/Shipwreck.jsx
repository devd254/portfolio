/*
Author: compost the second (https://sketchfab.com/compostthesecond)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shipwreck-low-poly-dc14bf79a89042b097f04ab83102e856
Title: shipwreck low poly
*/

import React from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import shipwreck from "../assets/shipwreck_low_poly.glb";

const Shipwreck = () => {
    const { scene, animations } = useGLTF(shipwreck);
    const { ref, actions, names } = useAnimations(animations);
    
    return(
        <group ref={ref} dispose={null}>
            <mesh position={[-150, -20, 400]}
                  scale={[20.3, 20.3, 20.3]}
                  rotation={[-5, -4.75, 5]}      
            >
                <primitive object={scene} />
            </mesh>
        </group>
    )
}

export default Shipwreck;