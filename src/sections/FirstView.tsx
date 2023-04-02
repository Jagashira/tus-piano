import React from "react";
import Image from "next/image";
const FirstView = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          backgroundColor: "rgba(0,0,0,0.3)",
          width: "100vw",
          height: "100vh",
          zIndex: 2,
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
      {/* <h1
        style={{ zIndex: 1, position: "absolute", top: "30vh", color: "white" }}
      >
        東京理科大学ピアノの会へようこそ！私たちは音楽を愛する学生たちが集まり、ピアノを通じて共に学び、演奏する場を提供しています。一緒に音楽を奏で、感動を分かち合いましょう。
      </h1> */}
    </div>
  );
};

export default FirstView;
