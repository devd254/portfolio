import React, { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import whale from "../assets/animated_whale2.glb";

const Whale = () => {
    const { scene, animations } = useGLTF(whale);
    const { ref, actions, names } = useAnimations(animations);
    
    useEffect(() => {
        actions[names[0]].play()
        return () => actions[names[0]]
    }, [actions, names])


    function animate() {
        scene.rotation.y += 0.002;
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    return(
        <group ref={ref} dispose={null}>
            <mesh 
                scale={[2.3, 2.3, 2.3]}
                position={[-10, 20, 1]}
            >
                <primitive object={scene} />
            </mesh>
        </group>        
    )
}

export default Whale;