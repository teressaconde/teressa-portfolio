"use client";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { extend } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';
import * as THREE from 'three';

extend({ TextGeometry });

export default function AnimatedShape({ letter }) {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  const extrudeSettings = {
    steps: 1,
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 3
  };

  const material = new MeshStandardMaterial({
    color: '#8B5CF6',
    metalness: 0.7,
    roughness: 0.2,
    envMapIntensity: 1
  });

  const getLetterShape = () => {
    switch (letter) {
      case 'M':
        return [
          new THREE.Vector2(0, 0),
          new THREE.Vector2(0, 1),
          new THREE.Vector2(0.25, 0.5),
          new THREE.Vector2(0.5, 1),
          new THREE.Vector2(0.75, 0.5),
          new THREE.Vector2(1, 1),
          new THREE.Vector2(1, 0),
          new THREE.Vector2(0.75, 0.5),
          new THREE.Vector2(0.5, 0),
          new THREE.Vector2(0.25, 0.5),
          new THREE.Vector2(0, 0)
        ];
      case 'T':
        return [
          new THREE.Vector2(0, 1),
          new THREE.Vector2(1, 1),
          new THREE.Vector2(0.8, 1),
          new THREE.Vector2(0.8, 0),
          new THREE.Vector2(0.6, 0),
          new THREE.Vector2(0.6, 1),
          new THREE.Vector2(0.4, 1),
          new THREE.Vector2(0.4, 0),
          new THREE.Vector2(0.2, 0),
          new THREE.Vector2(0.2, 1),
          new THREE.Vector2(0, 1)
        ];
      default:
        return [];
    }
  };

  const points = getLetterShape();
  if (!points || points.length < 3) return null;
  const shape = new THREE.Shape(points);

  return (
    <group ref={groupRef} scale={[1.2, 1.2, 1.2]} position={[letter === 'T' ? 1 : -1, 0, 0]}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <primitive object={material} attach="material" />
      </mesh>
    </group>
  );
} 