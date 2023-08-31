import React from "react";
import { useRive } from "@rive-app/react-canvas";

const SplashScreen = () => {
  const { RiveComponent } = useRive({
    src: "/rive/wave_circle_logo.riv",
    autoplay: true,
  });
  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <RiveComponent />
      </div>
    </>
  );
};

export default SplashScreen;
