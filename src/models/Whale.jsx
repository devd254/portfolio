/*
Author: Jasmine_Sheppard (https://sketchfab.com/Jasmine_Sheppard)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/whale-shark-cute-character-ed442e9c331345cb8135beea155be354
Title: Whale Shark Cute Character
*/

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


    //Set max frame rate(prevents infinite speed up)
    var fpsInterval, startTime, now, then, elapsed;
    function startAnimating(fps) {
        fpsInterval = 1000 / fps;
        then = Date.now();
        startTime = then;
        animate();
    }
    
    function animate() {

        requestAnimationFrame(animate);

        now = Date.now();
        elapsed = now - then;

        if (elapsed > fpsInterval) {

            then = now - (elapsed % fpsInterval);

            scene.rotation.y += 0.001;

        }
    }
    startAnimating(25);

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