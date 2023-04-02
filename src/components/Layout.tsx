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
      <div style={{ paddingTop: "10vh" }} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
