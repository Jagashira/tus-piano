import MainPage from "@/components/MainPage";
import Head from "next/head";

import { Footer, Navbar } from "@/utils/otherExport";
import { About, Explore, Feedback, Hero, Insights } from "@/utils/uiExport";
import Slider from "@/components/sections/SideImg";
import FirstView from "@/components/sections/FirstView";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import BackGround from "@/components/sections/BackGround";

export default function Home() {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      <div className="overflow-hidden">
        <div style={{ top: "10vh", position: "fixed" }} />{" "}
        <div className="relative">
          <FirstView />
        </div>
        {/* <Slider /> */}
        <div className="relative">
          <div style={{ marginTop: "250px" }}>
            <About />
          </div>
          {/* <div className="gradient-03 z-0" /> */}
          <Explore />
        </div>
      </div>
    </>
  );
}
