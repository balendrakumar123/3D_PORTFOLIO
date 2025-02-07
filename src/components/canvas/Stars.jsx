
import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { lantern } from "../../assets";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import "./Footer.css";


const Stars = (props) => {
  const ref = useRef();
  const asteroidRef = useRef();

  // Generate random positions for stars and asteroids
  const [stars] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  const [asteroids] = useState(() => random.inSphere(new Float32Array(200), { radius: 1.2 }));

  useFrame((state, delta) => {
    // Rotate stars
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    // Rotate asteroids
    if (asteroidRef.current) {
      asteroidRef.current.rotation.x += delta / 20;
      asteroidRef.current.rotation.y += delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Stars */}
      <Points ref={ref} positions={stars} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Asteroids */}
      <Points ref={asteroidRef} positions={asteroids} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.04} // Larger size for asteroids
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};



const Lamps = (props) => {
  const lampGroupRef = useRef();
  const lampTexture = useLoader(TextureLoader, lantern); // Load the lamp texture

  // Generate random positions for lamps
  const [lamps] = useState(() =>
    Array.from({ length: 20 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 2.4, // X position
        (Math.random() - 0.5) * 2.4, // Y position
        (Math.random() - 0.5) * 2.4, // Z position
      ],
    }))
  );

  useFrame((state, delta) => {
    if (lampGroupRef.current) {
      // Apply individual floating animations to lamps
      lampGroupRef.current.children.forEach((lamp, index) => {
        lamp.position.y += Math.sin(state.clock.elapsedTime + index) * 0.001; // Floating effect
      });
    }
  });

  return (
    <group ref={lampGroupRef} {...props}>
      {lamps.map((lamp, index) => (
        <mesh key={index} position={lamp.position}>
          <planeGeometry args={[0.1, 0.1]} /> {/* Adjust size */}
          <meshBasicMaterial map={lampTexture} transparent />
        </mesh>
      ))}
    </group>
  );
};


const StarsCanvas = () => {
  
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
          <Lamps /> {/* Add the Lamp component */}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

