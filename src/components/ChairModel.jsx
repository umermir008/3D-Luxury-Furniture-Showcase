import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function ChairModel(props) {
  // Try to load GLB model, fallback to primitive chair if not available
  try {
    const { scene } = useGLTF('/models/chair.glb');
    const group = useRef();
    
    return (
      <group ref={group} {...props} dispose={null}>
        <primitive object={scene} />
      </group>
    );
  } catch (error) {
    // Fallback primitive chair model
    return (
      <group {...props} dispose={null}>
        {/* Chair seat */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.1, 1.5]} />
          <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Chair back */}
        <mesh position={[0, 0.7, -0.6]}>
          <boxGeometry args={[1.5, 1.2, 0.1]} />
          <meshStandardMaterial color="#8B4513" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Chair legs */}
        <mesh position={[0.6, -0.5, 0.6]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
          <meshStandardMaterial color="#5D4037" metalness={0.2} roughness={0.6} />
        </mesh>
        <mesh position={[-0.6, -0.5, 0.6]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
          <meshStandardMaterial color="#5D4037" metalness={0.2} roughness={0.6} />
        </mesh>
        <mesh position={[0.6, -0.5, -0.6]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
          <meshStandardMaterial color="#5D4037" metalness={0.2} roughness={0.6} />
        </mesh>
        <mesh position={[-0.6, -0.5, -0.6]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
          <meshStandardMaterial color="#5D4037" metalness={0.2} roughness={0.6} />
        </mesh>
      </group>
    );
  }
}

// Preload model if available
try {
  useGLTF.preload('/models/chair.glb');
} catch (error) {
  // Ignore preload error for fallback
}