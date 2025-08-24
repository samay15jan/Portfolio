"use client";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { extendBVH } from "../lib/extendBVH";

function RayVisualizer({ meshRef }) {
  const { camera } = useThree();
  const [rays, setRays] = useState([]);

  useEffect(() => {
    extendBVH();
    if (meshRef.current) {
      meshRef.current.geometry.computeBoundsTree();
    }
  }, [meshRef]);

  useFrame(() => {
    if (!meshRef.current) return;

    const origin = new THREE.Vector3(0, 0, 5); // start point in front of camera
    const count = 50; // how many rays
    const newRays = [];

    for (let i = 0; i < count; i++) {
      // random direction
      const dir = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ).normalize();

      const raycaster = new THREE.Raycaster(origin, dir);
      raycaster.firstHitOnly = true;

      const hits = raycaster.intersectObject(meshRef.current, true);
      if (hits.length) {
        newRays.push({ origin: origin.clone(), end: hits[0].point.clone() });
      } else {
        // if no hit, just draw the ray far out
        newRays.push({
          origin: origin.clone(),
          end: origin.clone().add(dir.multiplyScalar(10)),
        });
      }
    }
    setRays(newRays);
  });

  return (
    <>
      {rays.map((r, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([
                r.origin.x, r.origin.y, r.origin.z,
                r.end.x, r.end.y, r.end.z,
              ])}
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="hotpink" />
        </line>
      ))}
    </>
  );
}

function BoxTarget({ meshRef }) {
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}

export default function SceneWithRays() {
  const meshRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} />

      <BoxTarget meshRef={meshRef} />
      <RayVisualizer meshRef={meshRef} />

      <OrbitControls />
    </Canvas>
  );
}
