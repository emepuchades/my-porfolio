import React from "react";
import earth from "../assets/day.jpg";
import { useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export function Earth() {
  const earthRef = useRef();
  const texture = useLoader(THREE.TextureLoader, earth);
  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });

  return (
    <Sphere ref={earthRef} args={[2.5, 64, 64]}>
      <meshStandardMaterial map={texture} metalness={0.1} roughness={0.7} />
    </Sphere>
  );
}

export default Earth;
