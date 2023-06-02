import MainPage from "@/components/MainPage";
import Head from "next/head";

import { Footer, Navbar, NewFeatures } from "@/utils/otherExport";
import { About, Explore, Feedback, Insights } from "@/utils/uiExport";
import Slider from "@/components/sections/SideImg";
import Hero from "@/components/sections/Hero";
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
        <div className="relative h-[100vh]">
          <Hero />
        </div>
        <div className="relative">
          <div className="h-[100vh]" style={{backgroundColor: "rgba(0,0,0,0.3)",paddingTop:"20vh"}}>
            <NewNews newsGroup={news} />
          </div>
          <div className="h-[100vh] pt-[20vh]">
            <NewBlog blogGroup={blog} />
          </div>
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
