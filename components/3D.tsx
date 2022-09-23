/* eslint-disable react/no-unknown-property */
// THIS IS JUST ESLINT BEING STUPID
// https://github.com/jsx-eslint/eslint-plugin-react/issues/3423

import * as THREE from "three";
import React from "react";
import { useGLTF, Html, useProgress } from "@react-three/drei";
import { GLTF } from "three-stdlib";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <p className="font-swampwitch text-3xl text-red-600">
        {progress}% loaded
      </p>
    </Html>
  );
}

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
