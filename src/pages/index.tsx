import MainPage from "@/components/MainPage";
import Head from "next/head";

import { Footer, Navbar, NewFeatures } from "@/utils/otherExport";
import { About, Explore, Feedback, Hero, Insights } from "@/utils/uiExport";
import Slider from "@/components/sections/SideImg";
import FirstView from "@/components/sections/FirstView";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import BackGround from "@/components/sections/BackGround";
import NewBlog from "@/components/NewBlog";
import NewNews from "@/components/NewNews";
import { clientBlog, clientNews } from "@/modules/lib/client";

export default function Home({ news, blog }: any) {
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
          <NewNews news={news} />
          <NewBlog blog={blog} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const dataNews = await clientNews.get({
    endpoint: "news",
    queries: { offset: 0, limit: 3 },
  });
  const dataBlog = await clientBlog.get({
    endpoint: "blog",
    queries: { offset: 0, limit: 3 },
  });

  return {
    props: {
      news: dataNews.contents,
      blog: dataBlog.contents,
    },
  };
};
