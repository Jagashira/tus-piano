import MainPage from "@/components/MainPage";
import Head from "next/head";

import { Footer, Navbar } from "@/utils/otherExport";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "@/utils/uiExport";
import Slider from "@/sections/SideImg";
import FirstView from "@/sections/FirstView";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function Home() {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      <Head>
        <title>東京理科大学ピアノの会</title>
        <meta
          name="description"
          content="こちらは東京理科大学ピアノの会のホームページです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo.png" />
      </Head>

      <div className="overflow-hidden">
        <div style={{ top: "10vh", position: "fixed" }} />

        <div className={isDesktop ? "fixed top-0" : "fixed top-[10vh]"}>
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
        <div className="relative">
          <GetStarted />
          {/* <div className="gradient-04 z-0" /> */}
          <WhatsNew />
        </div>
        <World />
        <div className="relative">
          <Insights />

          {/* <div className="gradient-04 z-0" /> */}
          <Feedback />
        </div>
        <Footer />
      </div>
    </>
  );
}
