import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function DiningTableModel(props) {
  // Try to load GLB model, fallback to primitive dining table if not available
  try {
    const { scene } = useGLTF('/models/dining-table.glb');
    const group = useRef();
    
    return (
      <group ref={group} {...props} dispose={null}>
        <primitive object={scene} />
      </group>
    );
  } catch (error) {
    // Fallback primitive dining table model
    return (
      <group {...props} dispose={null}>
        {/* Table top */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2.5, 0.1, 1.5]} />
          <meshStandardMaterial color="#8B4513" metalness={0.4} roughness={0.3} />
        </mesh>
        
        {/* Table legs */}
        <mesh position={[1.1, 0, 0.6]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
          <meshStandardMaterial color="#5D4037" metalness={0.3} roughness={0.5} />
        </mesh>
        <mesh position={[-1.1, 0, 0.6]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
          <meshStandardMaterial color="#5D4037" metalness={0.3} roughness={0.5} />
        </mesh>
        <mesh position={[1.1, 0, -0.6]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
          <meshStandardMaterial color="#5D4037" metalness={0.3} roughness={0.5} />
        </mesh>
        <mesh position={[-1.1, 0, -0.6]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
          <meshStandardMaterial color="#5D4037" metalness={0.3} roughness={0.5} />
        </mesh>
      </group>
    );
  }
}

// Preload model if available
try {
  useGLTF.preload('/models/dining-table.glb');
} catch (error) {
  // Ignore preload error for fallback
}