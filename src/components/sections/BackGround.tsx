import React from "react";
import Image from "next/image";
import styles from "@/styles/Background.module.css";

const BackGround = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "auto",
            height: "100%",
            transform: "translateX(-50%)",
            left: "50%",
          }}
        />
        <Image
          src="/img/background/background_piano_mono.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BackGround;
