/* eslint-disable react/no-unknown-property */
// THIS IS JUST ESLINT BEING STUPID
// https://github.com/jsx-eslint/eslint-plugin-react/issues/3423

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Layer_1: THREE.Mesh;
  };
  materials: {
    ["Layer 1 Merged Material"]: THREE.MeshStandardMaterial;
  };
};

export function FSK(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./3d/fsk3d.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Layer_1.geometry}
        material={materials["Layer 1 Merged Material"]}
        position={[0, 0.45, 0]}
        scale={0.5}
      />
    </group>
  );
}

useGLTF.preload("./3d/fsk3d.glb");
