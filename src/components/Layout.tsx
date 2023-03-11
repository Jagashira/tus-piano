import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-gray-800">
      <div className="z-10">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
