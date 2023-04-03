import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navigation/Navbar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div style={{ backgroundColor: "#242423" }}>
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          width: "100vw",
        }}
      >
        <Navbar />
      </div>
      <div style={{ paddingTop: "10vh", backgroundColor: "#242423" }} />
      {children}
      <div style={{ zIndex: 10, position: "relative" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
