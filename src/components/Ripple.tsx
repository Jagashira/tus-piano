import React, { Suspense, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "react-three-fiber";
import circleImg from "public/img/circle.png";
import styles from "../styles/Ripple.module.css";

const Points = () => {
  const imgTex = useLoader(THREE.TextureLoader, "/img/circle.png");
  const count = 100;
  const sep = 3;
  let positions = useMemo(() => {
    let positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = 0;
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep]);
  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        ></bufferAttribute>
      </bufferGeometry>
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
