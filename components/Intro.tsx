/* eslint-disable react/no-unknown-property */
// THIS IS JUST ESLINT BEING STUPID
// https://github.com/jsx-eslint/eslint-plugin-react/issues/3423

import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import { FSK, Loader } from "./3D";
import useMediaQuery from "../utils/hooks/useMediaQuery";

// DOM components
const DOM = () => {
  return (
    <>
      <div className="overflow-hidden top-0 left-0 absolute w-screen h-screen">
        <Navbar />
      </div>
    </>
  );
};

// Canvas components
const R3F = () => {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <div className="flex h-screen">
      {!isWindowSizeSmall ? (
        <div className="w-5/12 h-5/6 relative m-auto">
          <Canvas
            style={{
              position: "absolute",
              touchAction: "none",
              top: 0,
            }}
            camera={{ near: 0.1, far: 100, position: [0, 0.7, 4] }}
          >
            <pointLight position={[100, 100, 100]} />
            <ambientLight />
            <Suspense fallback={<Loader />}>
              <Bounds fit clip observe margin={1.2}>
                <FSK />
              </Bounds>
            </Suspense>
            <OrbitControls
              enableZoom={false}
              rotateSpeed={0.5}
              autoRotate={true}
              autoRotateSpeed={8}
              makeDefault={true}
              enablePan={false}
            />
          </Canvas>
        </div>
      ) : (
        <div className="w-screen h-3/6 relative m-auto">
          <Canvas
            style={{
              position: "absolute",
              touchAction: "none",
              top: 0,
            }}
            camera={{ near: 0.1, far: 100, position: [0, 0.7, 4] }}
          >
            <pointLight position={[100, 100, 100]} />
            <ambientLight />
            <Suspense fallback={<Loader />}>
              <Bounds fit clip observe margin={1.2}>
                <FSK />
              </Bounds>
            </Suspense>
            <OrbitControls
              enableZoom={false}
              rotateSpeed={0.5}
              autoRotate={true}
              autoRotateSpeed={8}
              makeDefault={true}
              enablePan={false}
            />
          </Canvas>
        </div>
      )}
    </div>
  );
};

// Page
const Intro: NextPage = () => {
  return (
    <>
      <DOM />
      <R3F />
    </>
  );
};

export default Intro;
