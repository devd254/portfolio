import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import whale from "../assets/animated_whale.glb";

const Whale = () => {
    const { scene, animations } = useGLTF(whale);
    return(
        <mesh position={[-10, 20, 1]} scale={[2.3, 2.3, 2.3]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Whale;