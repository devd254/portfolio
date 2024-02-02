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
            <mesh position={[-10, 20, 1]} scale={[2.3, 2.3, 2.3]}>
                <primitive object={scene} />
            </mesh>
        </group>        
    )
}

export default Ray;