import React from "react";
import Image from "next/image";
import styles from "@/styles/Background.module.css";

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
        <div
          style={{
            width: "auto",
            height: "100%",
            transform: "translateX(-50%)",
            left: "50%",
          }}
        />
        <Image
          src="/img/background_piano_monochrome.png"
          alt="background"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default BackGround;
