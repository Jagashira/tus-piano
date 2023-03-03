//@ts-nocheck
import React, { Suspense, useCallback, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "react-three-fiber";
import circleImg from "public/img/circle.png";
import styles from "../styles/Ripple.module.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const CameraControls = () => {
  const { camera, gl } = useThree<any>();
  const controlsRef = useRef();
  useFrame(() => controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      autoRotate
    />
  );
};

const Points = () => {
  const imgTex = useLoader(THREE.TextureLoader, "/img/circle.png");
  const bufferRef = useRef();

  const count = 100;
  const sep = 3;
  let t = 0;
  let f = 0.002;
  let a = 3;
  const graph = useCallback(
    (x: number, z: number) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    },
    [t, f, a]
  );
  let positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  useFrame(() => {
    t += 15;

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        ></bufferAttribute>
      </bufferGeometry>
      <CameraControls />
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00aaff}
        size={0.5}
        transparent={false}
        sizeAttenuation
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
};
const AnimationCanvas = () => {
  return (
    <Canvas camera={{ position: [100, 10, 0], fov: 75 }} legacy={false}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
};

const Ripple = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
};

export default Ripple;
