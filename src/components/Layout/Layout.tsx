import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";
import styles from "@/styles/Layout/Layout.module.css";

interface Props {
  children?: ReactNode;
}
const Background = () => {
  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
        <Image
          src={`/img/background/musicalScore_enhance.png`}
          layout={`fill`}
          objectFit={`cover`}
          alt="background image"
        />
      </div>
    </>
  );
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Background />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
