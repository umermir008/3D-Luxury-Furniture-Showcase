import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function SofaModel(props) {
  // Try to load GLB model, fallback to primitive sofa if not available
  try {
    const { scene } = useGLTF('/models/sofa.glb');
    const group = useRef();
    
    return (
      <group ref={group} {...props} dispose={null}>
        <primitive object={scene} />
      </group>
    );
  } catch (error) {
    // Fallback primitive sofa model
    return (
      <group {...props} dispose={null}>
        {/* Sofa base */}
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[2.5, 0.3, 1]} />
          <meshStandardMaterial color="#4A2C2A" metalness={0.2} roughness={0.5} />
        </mesh>
        
        {/* Sofa back */}
        <mesh position={[0, 0.4, -0.4]}>
          <boxGeometry args={[2.5, 0.8, 0.1]} />
          <meshStandardMaterial color="#4A2C2A" metalness={0.2} roughness={0.5} />
        </mesh>
        
        {/* Sofa arms */}
        <mesh position={[1.3, 0, 0]}>
          <boxGeometry args={[0.2, 0.5, 1]} />
          <meshStandardMaterial color="#4A2C2A" metalness={0.2} roughness={0.5} />
        </mesh>
        <mesh position={[-1.3, 0, 0]}>
          <boxGeometry args={[0.2, 0.5, 1]} />
          <meshStandardMaterial color="#4A2C2A" metalness={0.2} roughness={0.5} />
        </mesh>
        
        {/* Sofa cushions */}
        <mesh position={[-0.7, 0.1, 0.2]}>
          <boxGeometry args={[0.7, 0.2, 0.7]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.1} roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.1, 0.2]}>
          <boxGeometry args={[0.7, 0.2, 0.7]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.1} roughness={0.7} />
        </mesh>
        <mesh position={[0.7, 0.1, 0.2]}>
          <boxGeometry args={[0.7, 0.2, 0.7]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.1} roughness={0.7} />
        </mesh>
      </group>
    );
  }
}

// Preload model if available
try {
  useGLTF.preload('/models/sofa.glb');
} catch (error) {
  // Ignore preload error for fallback
}