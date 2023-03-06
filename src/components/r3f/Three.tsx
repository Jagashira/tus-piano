// @ts-nocheck
import * as THREE from "three";
import React, { Suspense, useRef, useMemo, useEffect } from "react";
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame,
} from "@react-three/fiber";
import { BakeShadows, OrbitControls, Sky, Effects } from "@react-three/drei";
import { Water, UnrealBloomPass } from "three-stdlib";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

extend({ Water });
extend({ UnrealBloomPass });

function Ocean() {
  const loadingManager = new THREE.LoadingManager();
  useEffect(() => {
    loadingManager.onProgress = function (url, loaded, total) {};
    console.log("start");
  }, []);
  const textureImage = "img/Water_2_M_Normal.jpg";
  //   const textureImage = "img/water.jpg";
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, textureImage);
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}

function Box() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime) * 6;
    ref.current.rotation.x =
      ref.current.rotation.y =
      ref.current.rotation.z +=
        delta;
  });
  return (
    <mesh ref={ref} scale={6}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}
const Piano = () => {
  const obj = useLoader(OBJLoader, "obj/piano.obj");
  return (
    <primitive
      object={obj}
      position={[0, 0, 0]}
      rotation={[Math.PI / 2, Math.PI, Math.PI]}
      scale={0.007}
    />
  );
};

export default function Three() {
  return (
    <Canvas camera={{ position: [-40, 40, -40] }}>
      <pointLight position={[100, 100, 100]} />
      <pointLight position={[-100, -100, -100]} />
      <Suspense fallback={null}>
        <Ocean />
        <Piano />
      </Suspense>
      {/* <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} /> */}
      <Effects disableGamma>
        <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
      </Effects>
      <OrbitControls autoRotate />
    </Canvas>
  );
}
