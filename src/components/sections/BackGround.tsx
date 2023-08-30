import React from "react";
import Image from "next/image";
import styles from "@/styles/Background.module.css";

const BackGround = () => {
  const pathImg = {
    main: "/img/background/background_piano_mono.png",
    news: "/img/background/musicalScore.png",
  };
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
            backgroundImage: `url(${pathImg.news})`,
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default BackGround;
