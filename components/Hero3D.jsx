"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireframeKnot({ reduceMotion }) {
  const group = useRef();
  const mesh = useRef();
  const [assembled, setAssembled] = useState(false);
  const start = useRef(performance.now());

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.6, 1), []);

  // scatter starting positions for each vertex, used only for the assemble-in animation
  const scatter = useMemo(() => {
    const pos = geometry.attributes.position;
    const arr = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [geometry]);

  const target = useMemo(() => geometry.attributes.position.array.slice(), [geometry]);

  useFrame((state) => {
    if (!mesh.current) return;
    const pos = mesh.current.geometry.attributes.position;

    if (!assembled) {
      const elapsed = performance.now() - start.current;
      const t = reduceMotion ? 1 : Math.min(elapsed / 1400, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      for (let i = 0; i < pos.count * 3; i++) {
        pos.array[i] = scatter[i] + (target[i] - scatter[i]) * eased;
      }
      pos.needsUpdate = true;
      if (t >= 1) setAssembled(true);
    }

    if (!reduceMotion && group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
    }
  });

  return (
    <group ref={group}>
      <lineSegments ref={mesh}>
        <edgesGeometry args={[geometry]} attach="geometry" />
        <lineBasicMaterial color="#4f7cff" transparent opacity={0.8} />
      </lineSegments>
      <mesh geometry={geometry}>
        <meshBasicMaterial color="#4f7cff" transparent opacity={0.04} />
      </mesh>
    </group>
  );
}

export default function Hero3D({ reduceMotion }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <WireframeKnot reduceMotion={reduceMotion} />
    </Canvas>
  );
}
