import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

export default function RotatingGlobe() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1.2] }} // Closer camera
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 2, 1]} intensity={0.7} />
        <Sphere args={[1.8, 64, 64]}> {/* Increased radius */}
          <meshStandardMaterial color="#db2777" wireframe />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}
