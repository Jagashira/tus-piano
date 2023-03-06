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

export default function Home() {
  return (
    <>
      <Head>
        <title>東京理科大学ピアノの会</title>
        <meta
          name="description"
          content="こちらは東京理科大学ピアノの会のホームページです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="overflow-hidden  bg-gray-800">
        <Navbar />
        <Hero />
        <div className="relative">
          <div style={{ marginTop: "250px" }}>
            <About />
          </div>
          <div className="gradient-03 z-o" />
          <Explore />
        </div>
        <div className="relative">
          <GetStarted />
          <div className="gradient-04 z-0" />
          <WhatsNew />
        </div>
        <World />
        <div className="relative">
          <Insights />

          <div className="gradient-04 z-0" />
          <Feedback />
        </div>
        <Footer />
      </div>
    </>
  );
}
