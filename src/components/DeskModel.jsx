import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

// 3D Card with PNG
function Desk() {
  const meshRef = useRef();
  const texture = useTexture('/pc.png');
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
  });

  const scale = isMobile ? [2.5, 2.5, 2.5] : [2, 2, 2];

  return (
    <mesh ref={meshRef} scale={scale}>
      <boxGeometry args={[1, 1, 0.05]} />

      <meshStandardMaterial
        map={texture}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
}

// Loading spinner
function LoadingFallback() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshBasicMaterial color="#10b981" />
    </mesh>
  );
}

export default function DeskModel() {
  return (
    <div
      style={{
        width: '600%',
        height: '20%',
        minHeight: '400px',
        marginBottom: '50px',
        background: 'transparent',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        dpr={[1, 2]}
        shadows
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <pointLight position={[-2, -2, 2]} intensity={0.5} />

        <Suspense fallback={<LoadingFallback />}>
          <Desk />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
} 