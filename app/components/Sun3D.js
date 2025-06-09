"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Sun3D({ onClick }) {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }} style={{ cursor: 'pointer' }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={1.2} />
      <mesh onClick={onClick} castShadow receiveShadow>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFA500" metalness={0.5} roughness={0.3} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
} 