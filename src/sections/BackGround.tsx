import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
const BackGround = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          backgroundColor: "rgba(0,0,0,0.3)",
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          zIndex: -100,
        }}
      >
        <Image
          src="/img/background.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BackGround;
