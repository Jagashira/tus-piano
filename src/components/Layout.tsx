import { getLastPathSegment, UpperCase } from "@/modules/lib/formatText";
import { BigTitle, BigTitleActivity } from "@/modules/lib/textStyle";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";
import Navbar from "./Navigation/Navbar";
import BackGround from "./sections/BackGround";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();

  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });

  const background = () => {
    if (router.pathname === "/") {
      console.log(router.pathname);
      return (
        <div style={{ zIndex: -100 }}>
          <div className={isDesktop ? "fixed top-0" : "fixed top-[10vh]"}>
            <BackGround />
          </div>
        </div>
      );
    } else {
      console.log(UpperCase(getLastPathSegment(router.pathname)));
      return (
        <>
          <div style={{ position: "fixed", width: "100vw" }}>
            {getLastPathSegment(router.pathname) === "activity" ? (
              <BigTitleActivity>
                {UpperCase(getLastPathSegment(router.pathname))}
              </BigTitleActivity>
            ) : (
              <BigTitle>
                {UpperCase(getLastPathSegment(router.pathname))}
              </BigTitle>
            )}
          </div>
        </>
      );
    }
  };

  return (
    <div style={{ backgroundColor: "#242423" }}>
      {background()}
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
      <div>{children}</div>
      <div
        style={{
          zIndex: 10,
          position: "relative",
          overflowY: "auto",
          bottom: 0,
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
