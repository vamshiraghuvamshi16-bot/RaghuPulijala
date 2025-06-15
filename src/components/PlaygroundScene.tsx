import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { Mesh, Vector3 } from 'three';

function FloatingSphere({ position, color, speed, scale = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  speed: number;
  scale?: number;
}) {
  const meshRef = useRef<Mesh>(null);
  const initialPosition = useRef(new Vector3(...position));
  
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    // Create simpler floating motion
    meshRef.current.position.x = initialPosition.current.x + Math.sin(clock.getElapsedTime() * speed) * 0.3;
    meshRef.current.position.y = initialPosition.current.y + Math.cos(clock.getElapsedTime() * speed * 0.5) * 0.3;
    meshRef.current.position.z = initialPosition.current.z;
    
    // Minimal rotation
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.001;
  });

  return (
    <Sphere
      ref={meshRef}
      args={[1, 16, 16]} // Reduced geometry complexity
      position={position}
      scale={scale}
    >
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function InteractiveSphere() {
  const meshRef = useRef<Mesh>(null);
  const vec = new Vector3();

  useFrame(({ mouse, viewport }) => {
    if (!meshRef.current) return;
    
    vec.set(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0
    );
    meshRef.current.position.lerp(vec, 0.1);
    
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Sphere
      ref={meshRef}
      args={[1.5, 24, 24]}
    >
      <meshStandardMaterial
        color="#007AFF"
        transparent
        opacity={0.7}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function BackgroundParticles({ count = 20 }) { // Reduced particle count
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 15;
      temp.push({ position: [x, y, z] });
    }
    return temp;
  }, [count]);

  return (
    <group>
      {particles.map((particle, i) => (
        <FloatingSphere
          key={i}
          position={particle.position as [number, number, number]}
          color={i % 2 === 0 ? "#007AFF" : "#34C759"}
          speed={0.3 + Math.random() * 0.5}
          scale={0.1}
        />
      ))}
    </group>
  );
}

export default function PlaygroundScene() {
  return (
    <Canvas className="w-full h-full">
      <color attach="background" args={['#f8f9fa']} />
      <fog attach="fog" args={['#f8f9fa', 0, 30]} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      
      {/* Background particles */}
      <BackgroundParticles />
      
      {/* Main floating spheres - reduced count */}
      <FloatingSphere position={[-4, 3, -5]} color="#005BB5" speed={0.5} />
      <FloatingSphere position={[4, -3, -3]} color="#007AFF" speed={0.7} />
      <FloatingSphere position={[-3, -4, -4]} color="#34C759" speed={0.6} />
      
      {/* Interactive sphere */}
      <InteractiveSphere />
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}