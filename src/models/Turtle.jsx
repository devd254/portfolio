/*
Author: PlazaS (https://sketchfab.com/smplaza)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sea-turtle-20-2046dd5b34214b52ac5169bd061eab86
Title: Sea Turtle 2.0
*/

import React, { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import turtle from "../assets/animated_turtle.glb";

const Turtle = () => {
    const { scene, animations } = useGLTF(turtle);
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

            scene.rotation.y -= 0.007;

        }
    }
    startAnimating(15);

    return(
        <group ref={ref} dispose={null}>
            <mesh position={[20, -10, -10]}
                  scale={[0.4, 0.4, 0.4]}
                  rotation={[-5, -4.75, 5]}      
            >
                <primitive object={scene} />
            </mesh>
        </group>
    )
}

export default Turtle;