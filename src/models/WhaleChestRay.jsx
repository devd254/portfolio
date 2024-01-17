import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";

import whaleMore from "../assets/animated_idle_whale.glb";

const WhaleChestRay = (props) => {
  const whaleMoreRef = useRef();

  const { nodes, materials, animations } = useGLTF(whaleMore);
  const { ref, mixer, names, actions, clips } = useAnimations(animations)


  return (
    <a.group ref={whaleMoreRef} {...props}>
      <group {...props} dispose={null}>
        <group scale={0.0003}>
          <group position={[0, -800.333, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_1_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3093.241, -1015.385, 605.242]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3078.763, -1026.656, 579.68]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_2_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3543.097, -1033.497, 592.428]}
              rotation={[0.02, 0.041, -0.014]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_5_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3317.926, -1072.031, 569.664]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_4_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3326.968, -1056.246, 569.664]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_6_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3535.517, -1072.031, 569.832]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_13_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3748.612, -1052.414, 520.047]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_3_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3748.612, -1089.836, 573.51]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_12_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3748.612, -1024.407, 371.253]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_11_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3605.951, -1039.207, 407.242]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_10_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3536.134, -1048.138, 499.353]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_9_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3738.586, -1097.098, -581.579]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_8_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3738.586, -1097.098, -365.714]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_7_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3567.843, -1096.354, -473.742]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_14_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-2684.598, -1552.887, -573.212]}
              rotation={[0.022, 0.011, -0.128]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_15_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-2754.771, -1600.673, -676.428]}
              rotation={[0.022, 0.011, 0.01]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_16_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-2754.771, -1196.58, -676.428]}
              rotation={[0.022, 0.011, -0.6]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_17_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-2958.344, -985.236, -676.428]}
              rotation={[0.022, 0.011, -0.02]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_21_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3013.124, -1029.788, -540.701]}
              rotation={[0.025, -0.001, 0.061]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_20_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3033.854, -1018.202, -606.414]}
              rotation={[0.021, 0.036, 0.017]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_19_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3033.854, -1007.455, -676.428]}
              rotation={[0.022, 0.011, 0.072]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_18_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3033.854, -1034.429, -758.443]}
              rotation={[-0.032, 0.007, 0.012]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_31_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3140.366, -1110.943, -572.566]}
              rotation={[-0.004, -0.002, 0.042]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_27_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3224.504, -1138.744, -588.214]}
              rotation={[-0.004, -0.002, -0.104]}
              scale={[0.964, 0.055, 0.964]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_22_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3153.606, -1050.346, -399.7]}
              rotation={[0.025, -0.001, 0.061]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_23_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3463.08, -1042.209, -351.363]}
              rotation={[0.025, -0.001, 0.004]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_24_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3289.401, -1044.789, 30.503]}
              rotation={[-0.004, -0.002, 0.032]}
              scale={[1.048, 0.059, 1.048]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_25_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3148.324, -1123.172, -110.116]}
              rotation={[-0.004, -0.002, 0.021]}
              scale={[1.09, 0.062, 1.09]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_26_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3160.114, -1104.191, -253.404]}
              rotation={[-0.004, -0.002, -0.041]}
              scale={[1.025, 0.058, 1.025]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_28_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3106.546, -1057.353, -378.468]}
              rotation={[-0.004, -0.002, 0.072]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_29_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3304.611, -1067.32, -78.87]}
              rotation={[-0.004, -0.002, -0.083]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_30_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3248.309, -1069.476, -512.742]}
              rotation={[-0.004, -0.002, -0.143]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_32_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3300.691, -1158.275, -349.079]}
              rotation={[-0.004, -0.002, 0.042]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_33_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3244.095, -1090.392, -193.288]}
              rotation={[-0.004, -0.002, 0.042]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_35_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3095.921, -1038.366, 167.29]}
              rotation={[0.025, -0.001, 0.042]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_34_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3095.921, -1035.21, 167.29]}
              rotation={[0.025, -0.001, 0.042]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_36_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3333.793, -1088.149, -431.514]}
              rotation={[0.025, -0.001, -0.054]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_37_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3233.887, -1088.149, 23.222]}
              rotation={[0.025, -0.001, -0.054]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_38_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3336.376, -1098.265, -591.672]}
              rotation={[0.025, -0.001, 0.033]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_39_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3456.459, -1060.052, -112.26]}
              rotation={[0.025, -0.001, -0.271]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_41_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3356.032, -1151.095, -172.195]}
              rotation={[0.025, -0.001, -0.041]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_40_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3416.755, -1148.792, 3.912]}
              rotation={[0.025, -0.001, -0.041]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_42_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3287.13, -1156.015, 180.019]}
              rotation={[0.025, -0.001, -0.041]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_44_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3157.505, -1136.147, 263.827]}
              rotation={[0.025, -0.001, -0.041]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_43_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3135.626, -1107.867, 346.052]}
              rotation={[0.025, -0.001, -0.054]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_45_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3351.046, -1107.579, 289.674]}
              rotation={[0.025, -0.001, -0.188]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_46_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3497.113, -1116.197, -580.537]}
              rotation={[0.025, -0.001, -0.188]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_47_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3486.826, -1158.878, -424.32]}
              rotation={[0.025, -0.001, -0.188]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_49_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3519.778, -1159.824, -126.861]}
              rotation={[0.025, -0.001, -0.188]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_48_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3463.08, -1135.34, -260.099]}
              rotation={[0.025, -0.001, 0.004]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_52_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3759.06, -1088.275, -7.683]}
              rotation={[0.025, -0.001, -0.147]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_50_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3594.984, -1115.917, 6.376]}
              rotation={[0.025, -0.001, -0.188]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_51_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3691.113, -1072.488, -220.681]}
              rotation={[0.025, -0.001, -0.107]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_54_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3433.893, -1117.27, 139.613]}
              rotation={[0.025, -0.001, -0.188]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_56_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3555.967, -1024.345, 139.613]}
              rotation={[0.025, -0.001, -0.188]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_53_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3555.967, -1093.892, 206.538]}
              rotation={[0.025, -0.001, -0.02]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_55_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3607.476, -1054.707, -132.2]}
              rotation={[0.025, -0.001, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_58_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3546.87, -1054.707, -415.96]}
              rotation={[0.025, -0.001, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_57_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3776.417, -1008.705, -415.96]}
              rotation={[-0.094, 0.004, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_60_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3776.417, -1025.692, -224.261]}
              rotation={[0, 0, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_59_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3776.417, -1025.692, -64.501]}
              rotation={[0, 0, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_61_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3740.937, -1077.686, 91.17]}
              rotation={[0, 0, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_62_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3567.919, -1109.4, -283.52]}
              rotation={[0, 0, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_63_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3567.919, -1053.917, -619.588]}
              rotation={[0.109, -0.004, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_64_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3123.5, -1070.079, 472.967]}
              rotation={[0, 0, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_67_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3634.505, -1074.778, 336.084]}
              rotation={[0, 0, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_65_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3413.602, -1074.778, 336.084]}
              rotation={[0, 0, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_66_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3265.748, -1091.279, 412.636]}
              rotation={[0, 0, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_68_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3749.686, -1055.964, 219.055]}
              rotation={[0, 0, -0.038]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_69_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3749.686, -1055.964, -464.702]}
              rotation={[0, 0, 0.216]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_70_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3677.521, -1081.651, -469.647]}
              rotation={[0, 0, 0.074]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_71_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3413.695, -1024.824, 403.908]}
              rotation={[0, 0, 0.074]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_coin_2_72_coins_0
                  .geometry
              }
              material={materials.coins}
              position={[-3276.48, -1031.563, 515.435]}
              scale={[1.069, 0.061, 1.069]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl24_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-3060.996, -1060.862, -130.201]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl23_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-3018.603, -1021.462, -130.201]}
              rotation={[0, 0, 2.037]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl22_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2962.92, -1028.757, -130.201]}
              rotation={[0.007, 0.017, -1.782]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl21_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2907.878, -1033.95, -129.24]}
              rotation={[-0.113, 0.027, 1.215]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl20_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2870.168, -1066.515, -142.147]}
              rotation={[-2.525, 0.618, 2.478]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl19_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2837.228, -1107.106, -143.737]}
              rotation={[-2.525, 0.618, 2.478]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl18_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2800.797, -1146.458, -142.49]}
              rotation={[-2.525, 0.618, 2.343]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl17_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-3062.179, -1078.178, 293.846]}
              rotation={[2.247, 0.915, -2.028]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl_1_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2782.66, -1246.545, -119.446]}
              rotation={[2.592, 0.904, -3.099]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl1_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2780.883, -1197.176, -145.338]}
              rotation={[-2.691, 0.747, 2.74]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl2_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2758.589, -1285.12, -84.968]}
              rotation={[2.117, -0.319, 2.77]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl3_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2749.272, -1315.864, -39.754]}
              rotation={[2.097, -0.085, 2.843]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl16_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-3050.775, -1027.477, 293.846]}
              rotation={[2.518, 1.063, -2.371]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl15_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2997.724, -1013.757, 292.823]}
              rotation={[1.77, 0.267, -1.678]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl14_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2943.349, -1019.381, 297.578]}
              rotation={[1.514, -0.15, -1.557]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl13_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2895.406, -1044.719, 310.939]}
              rotation={[1.273, -0.584, -1.541]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl12_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2863.063, -1082.718, 312.407]}
              rotation={[0.093, -0.132, -2.705]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl11_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2848.527, -1132.796, 299.464]}
              rotation={[-1.68, 1.381, -0.891]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl4_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2737.292, -1329.666, 12.345]}
              rotation={[1.236, 0.237, 3.07]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl5_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2750.448, -1314.191, 65.133]}
              rotation={[1.319, 0.257, 3.064]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl6_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2750.448, -1294.155, 115.897]}
              rotation={[1.061, 0.268, -2.701]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl7_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2775.957, -1276.631, 158.34]}
              rotation={[0.637, 0.452, -2.733]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl8_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2794.707, -1246.764, 198.491]}
              rotation={[0.797, 0.137, -2.943]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl9_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2810.615, -1213.494, 235.706]}
              rotation={[0.736, 0.125, -2.935]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl10_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-2831.025, -1175.266, 269.257]}
              rotation={[0.637, 0.103, -2.924]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.d_Digital_literacy_assignment_file11mb__1_pearl25_pearls_0
                  .geometry
              }
              material={materials.pearls}
              position={[-3060.996, -1060.862, -130.201]}
              scale={0.278}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .d_Digital_literacy_assignment_file11mb__1_chest_top_chest_lid_0
                  .geometry
              }
              material={materials.chest_lid}
              position={[-3714.139, -668.489, -25576.709]}
              rotation={[-1.573, 0.598, 1.573]}
              scale={[7.135, 5.246, 4.612]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .d_Digital_literacy_assignment_file11mb__1_chest_base_base_of_chest_trimmings_0
                  .geometry
              }
              material={materials.base_of_chest_trimmings}
              position={[-3462.55, -1321.298, -23.573]}
              scale={[9.003, 5.217, 13.467]}
            />
          </group>
          <group
            position={[-3484.131, -743.27, -2768.612]}
            rotation={[-0.309, 1.034, 0.179]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .d_Digital_literacy_assignment_file11mb__1_polySurface16_seaweed_0
                  .geometry
              }
              material={materials.seaweed}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .d_Digital_literacy_assignment_file11mb__1_polySurface17_seaweed_0
                  .geometry
              }
              material={materials.seaweed}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .d_Digital_literacy_assignment_file11mb__1_polySurface18_seaweed_0
                  .geometry
              }
              material={materials.seaweed}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .d_Digital_literacy_assignment_file11mb__1_polySurface19_seaweed_0
                  .geometry
              }
              material={materials.seaweed}
              position={[12.936, -2.334, 22.083]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .d_Digital_literacy_assignment_file11mb__1_polySurface20_seaweed_0
                  .geometry
              }
              material={materials.seaweed}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .d_Digital_literacy_assignment_file11mb__1_polySurface21_seaweed_0
                  .geometry
              }
              material={materials.seaweed}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .d_Digital_literacy_assignment_file11mb__1_polySurface22_seaweed_0
                  .geometry
              }
              material={materials.seaweed}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .d_Digital_literacy_assignment_file11mb__1_polySurface23_seaweed_0
                  .geometry
              }
              material={materials.seaweed}
              position={[20.317, -1.264, 19.504]}
            />
          </group>
          <group
            position={[-2186.654, -4986.596, 2129.035]}
            rotation={[0.374, 0.011, 1.414]}
            scale={1.061}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface1_ray_eyes_0.geometry}
              material={materials.ray_eyes}
              position={[-7.798, 8.593, -16.3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface2_ray_eyes_0.geometry}
              material={materials.ray_eyes}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .d_Digital_literacy_assignment_file11mb__1_ray_high_poly_ray_body_0
                .geometry
            }
            material={materials.ray_body}
            position={[-3883.985, -132.326, 4094.367]}
            rotation={[0.43, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .low_poly_ws_d_Digital_literacy_assignment_file11mb__1_lambert2_0
                .geometry
            }
            material={
              materials.d_Digital_literacy_assignment_file11mb__1_lambert2
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.d_Digital_literacy_assignment_file11mb__1_sand_sand_0.geometry
            }
            material={materials.sand}
            position={[1593.619, -2415.365, 0]}
            scale={[172.794, 105.096, 174.749]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.d_Digital_literacy_assignment_file11mb__1_StarFish_starfish_0
                .geometry
            }
            material={materials.starfish}
            position={[-3244.256, -2279.497, 1118.447]}
            rotation={[1.844, 0.712, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.eyes_whale_shark_eyes_0.geometry}
            material={materials.whale_shark_eyes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bubble_1_bubbles1_0.geometry}
            material={materials.bubbles1}
            position={[-3140.805, -912.093, 280.361]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bubble_2_bubbles1_0.geometry}
            material={materials.bubbles1}
            position={[-2950.652, -700.939, 256.304]}
            scale={0.665}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bubble_3_bubbles1_0.geometry}
            material={materials.bubbles1}
            position={[-2790.992, -537.135, 81.682]}
            scale={0.665}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ray_tongue_ray_tongue1_0.geometry}
            material={materials.ray_tongue1}
            position={[-50.156, -1622.247, 3389.741]}
            rotation={[-1.202, -0.634, 0.039]}
            scale={34.33}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .d_Digital_literacy_assignment_file11mb__1_toungue_whale_shark_tongue1_0
                .geometry
            }
            material={materials.whale_shark_tongue1}
          />
        </group>
      </group>
    </a.group>
  );
}

export default WhaleChestRay;