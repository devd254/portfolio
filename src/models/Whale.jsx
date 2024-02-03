import React, { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import whale from "../assets/animated_whale.glb";

const Whale = () => {
    const { scene, animations } = useGLTF(whale);
    const { ref, actions, names } = useAnimations(animations);
    
    useEffect(() => {
        actions[names[0]].play()
        return () => actions[names[0]]
    }, [actions, names])

    const origin = 20;

    function animate() {
        console.log(scene.position.x);
        if(scene.position.x <= -200.1){
            scene.position.x = origin;
        }
        scene.position.x += -0.07;
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