/*
Author: sharkingaround (https://sketchfab.com/sharkingaround)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/scalloped-hammerhead-juvenile-low-poly-f5adc17c922b48feae76aaea98552dd4
Title: Scalloped Hammerhead Juvenile (LOW POLY)
*/

import React, { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import shark from "../assets/shark.glb";

const Shark = () => {
    const { scene, animations } = useGLTF(shark);
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

            scene.rotation.y -= 0.009;

        }
    }
    startAnimating(20);

    return(
        <group ref={ref} dispose={null}>
            <mesh position={[-25, -10, 5]}
                  scale={[5.3, 5.3, 5.3]}
                  rotation={[-5, -4.75, 5]}      
            >
                <primitive object={scene} />
            </mesh>
        </group>
    )
}

export default Shark;