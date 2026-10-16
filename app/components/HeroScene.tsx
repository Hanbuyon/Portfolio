import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function Sculpture() {
  const group = useRef<THREE.Group>(null);
  const invalidate = useThree((state) => state.invalidate);
  const isVisible = useRef(true);

  useEffect(() => {
    let frame = 0;
    let start = 0;
    const animate = (now: number) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / 950, 1);
      if (group.current) {
        group.current.scale.setScalar(0.82 + 0.18 * (1 - Math.pow(1 - progress, 3)));
        group.current.rotation.y = -0.3 + progress * 0.3;
      }
      invalidate();
      if (progress < 1 && isVisible.current) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    const onVisibility = () => { isVisible.current = !document.hidden; if (isVisible.current) frame = requestAnimationFrame(animate); };
    document.addEventListener("visibilitychange", onVisibility);
    return () => { cancelAnimationFrame(frame); document.removeEventListener("visibilitychange", onVisibility); };
  }, [invalidate]);

  return (
    <group ref={group} onPointerMove={(event) => {
      if (!group.current) return;
      group.current.rotation.y = THREE.MathUtils.clamp(event.point.x * 0.18, -0.5, 0.5);
      group.current.rotation.x = THREE.MathUtils.clamp(-event.point.y * 0.08, -0.24, 0.24);
      invalidate();
    }}>
      <mesh rotation={[0.35, 0.35, 0]}>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshStandardMaterial color="#18383d" metalness={0.72} roughness={0.28} flatShading />
      </mesh>
      <mesh rotation={[0.25, 0.25, 0]}>
        <icosahedronGeometry args={[1.18, 2]} />
        <meshBasicMaterial color="#50d6c8" wireframe transparent opacity={0.54} />
      </mesh>
      <mesh rotation={[1.2, 0.2, -0.45]}>
        <torusGeometry args={[1.76, 0.012, 7, 80]} />
        <meshBasicMaterial color="#62e3d1" transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[0.4, 1.1, 0.2]}>
        <torusGeometry args={[1.58, 0.009, 7, 80]} />
        <meshBasicMaterial color="#e5fff9" transparent opacity={0.24} />
      </mesh>
      {[[1.65,0.48,0.33],[-1.53,-0.65,0.12],[0.28,1.48,-0.2]].map((position,i)=>(
        <mesh position={position as [number,number,number]} key={i}>
          <octahedronGeometry args={[i === 0 ? 0.14 : 0.09, 0]} />
          <meshStandardMaterial color={i===1?"#ffffff":"#50d6c8"} emissive="#1b766f" emissiveIntensity={0.6} metalness={0.35} roughness={0.2}/>
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas frameloop="demand" dpr={[1, 1.5]} camera={{ position: [0, 0, 6.8], fov: 45 }} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }} aria-hidden="true">
      <ambientLight intensity={2.3} />
      <directionalLight position={[3, 4, 5]} color="#b8fff0" intensity={3.4} />
      <pointLight position={[-3,-2,2]} color="#189e93" intensity={18} />
      <Sculpture />
    </Canvas>
  );
}
