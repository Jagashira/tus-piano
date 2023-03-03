import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Three from "@/components/Three";
import { useEffect, useState } from "react";
import InitPage from "@/components/InitPage";
import RainyBackground from "@/components/water";
import styles from "@/styles/Home.module.css";
import Ripple from "@/components/Ripple";

export default function App({ Component, pageProps }: AppProps) {
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  useEffect(() => {
    const isLoad = sessionStorage.getItem("iconify-version");
    console.log(isLoad);
    const date = String(new Date());
    sessionStorage.setItem("isLoad", date);
    if (isLoad !== "") {
      setInitialLoad(true);
    } else {
    }
  }, []);

  return (
    <>
      {initialLoad ? (
        // <div className={styles.feedIn}>
        //   <Layout>
        //     <Component {...pageProps} />
        //     <div
        //       style={{
        //         height: "100vh",
        //         width: "100vw",
        //         zIndex: -1,
        //         position: "fixed",
        //         top: 0,
        //         left: 0,
        //       }}
        //     >
        //       <Three />
        //     </div>
        //   </Layout>
        // </div>
        <Ripple />
      ) : (
        // <InitPage />
        // <RainyBackground />
        <Ripple />
      )}
    </>
  );
}
