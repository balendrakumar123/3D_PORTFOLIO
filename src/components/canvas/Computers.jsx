import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");
//   const hitman = useGLTF("./hitman/scene.gltf");
//   const coolman = useGLTF("./cool2/scene.gltf");
//   const coolman2 = useGLTF("./cool_man/scene.gltf");
//   const man = useGLTF("./man/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />

//       <primitive
//         object={hitman.scene}
//         scale={isMobile ? 0.7 : 2.75}
//         position={isMobile ? [0, -3, -1] : [-5, -4.25, -1]}
//         rotation={[-0.01, Math.PI / 2, -0.1]} // Facing left
//       />

//       <primitive
//         object={coolman.scene}
//         scale={isMobile ? 0.7 : 2.75}
//         position={isMobile ? [0, -3, -1] : [-3, -4.25, -3]} // Positioned to the left of hitman
//         rotation={[-0.01, Math.PI / 2, -0.1]} // Facing left
//       />

//       <primitive
//         object={coolman2.scene}
//         scale={isMobile ? 0.7 : 2.75}
//         position={isMobile ? [0, -3, -1] : [-3, -4.25, -1]} // Positioned to the right of hitman
//         rotation={[-0.01, Math.PI / 2, -0.1]} // Facing left
//       />

//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -1.5] : [0, -3.25, -1.25]}
//         rotation={[-0.01, Math.PI - 0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const hitman = useGLTF("./hitman/scene.gltf");
  const coolman = useGLTF("./cool2/scene.gltf");
  const coolman2 = useGLTF("./cool_man/scene.gltf");

  const [rotationState, setRotationState] = useState({
    left: 0, // Left character rotation state
    middle: 0, // Middle character rotation state
    right: 0, // Right character rotation state
  });

  useEffect(() => {
    // Timed sequence for each person's animation
    const interval = setInterval(() => {
      setRotationState((prevState) => {
        if (prevState.left < 2) {
          return { ...prevState, left: prevState.left + 0.1 };
        } else if (prevState.middle < 2) {
          return { ...prevState, middle: prevState.middle + 0.1 };
        } else if (prevState.right < 2) {
          return { ...prevState, right: prevState.right + 0.1 };
        } else {
          // Reset all states after all animations are done
          return { left: 0, middle: 0, right: 0 };
        }
      });
    }, 200); // Adjust animation frame timing

    return () => clearInterval(interval);
  }, []);

  const calculateRotation = (defaultRotation, rotationProgress, isRightTurn) => {
    if (rotationProgress < 1) {
      // Turn animation
      return [
        defaultRotation[0],
        defaultRotation[1] + (isRightTurn ? -Math.PI / 6 : Math.PI / 6) * rotationProgress,
        defaultRotation[2],
      ];
    } else if (rotationProgress < 2) {
      // Return animation
      return [
        defaultRotation[0],
        defaultRotation[1] +
          (isRightTurn ? -Math.PI / 6 : Math.PI / 6) * (2 - rotationProgress),
        defaultRotation[2],
      ];
    } else {
      // Original position
      return defaultRotation;
    }
  };

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      {/* Left character */}
      <primitive
        object={coolman.scene}
        scale={isMobile ? 2 : 2.75}
        position={isMobile ? [-2, -4, -3] : [-5, -4.25, -3]}
        rotation={calculateRotation([-0.01, Math.PI / 2, -0.1], rotationState.right, true)}
      />

      {/* Middle character */}
      <primitive
        object={hitman.scene}
        scale={isMobile ? 2 : 2.75}
        position={isMobile ? [-2, -4, -2] : [-5, -4.25, -1]}
        rotation={calculateRotation([-0.01, Math.PI / 2, -0.1], rotationState.left, false)}
      />

      {/* Right character */}
      <primitive
        object={coolman2.scene}
        scale={isMobile ? 2 : 2.75}
        position={isMobile ? [-3, -4, -3] : [-3, -4.25, -1]}
        rotation={calculateRotation([-0.01, Math.PI / 2, -0.1], rotationState.right, true)}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -1.5] : [0, -3.25, -1.25]}
        rotation={[-0.01, Math.PI - 0.2, -0.1]}
      />
    </mesh>
  );
};



// Component for animated camera movement
const CameraAnimation = () => {
  useFrame(({ camera, clock }) => {
    const time = clock.getElapsedTime(); // Time in seconds
    const radius = 7; // Even smaller radius for closer view
    const speed = 0.05; // Slow rotation speed

    // Slow and smooth circular camera movement
    camera.position.x = Math.sin(time * speed) * radius;
    camera.position.z = Math.cos(time * speed) * radius;

    // Ensure the camera always looks at the origin
    // camera.lookAt(0, 0, 0);
  });

  return null;
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 85 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <CameraAnimation /> {/* Add camera animation here */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
