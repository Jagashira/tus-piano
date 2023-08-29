import { getLastPathSegment, UpperCase } from "@/modules/lib/formatText";
import { BigTitle, BigTitleActivity } from "@/modules/lib/textStyle";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";
import Navbar from "./Navigation/Navbar";
import BackGround from "./sections/BackGround";
import Header from "./Header";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();

  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktopBackground: boolean = useMediaQuery({
    query: "(min-width: 1415px)",
  });

  const background = () => {
    if (router.pathname === "/") {
      console.log(router.pathname);
      return (
        <div style={{ zIndex: -100 }}>
          <div className="fixed top-0">
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
              <><div className="z-1 fixed"><BigTitleActivity>
              {UpperCase(getLastPathSegment(router.pathname))}
            </BigTitleActivity></div>
            <div className="fixed top-0 z-0">
            <BackGround />
          </div>
            </>
              
            ) : (
              <><div className="fixed z-1 top-0"><BigTitle>
              {UpperCase(getLastPathSegment(router.pathname))}
            </BigTitle></div>
            <div className="fixed top-0 z-0">
            <BackGround />
          </div></>
            )}
          </div>
        </>
      );
    }
  };

  return (
    <div style={{}}>
      {background()}
      <div style={{position:"absolute",height:"10vh"}}>
        <Header/>
      </div>
      

      <div style={{minHeight:"80vh"}}>{children}</div>
      <div
        style={{
          zIndex: 10,
          position: "absolute",
          maxHeight:"20vh"
        }}
      >
       <Footer />
      </div>
    </div>
  );
};

export default Layout;
