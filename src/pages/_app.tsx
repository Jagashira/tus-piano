import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Three from "@/components/Three";
import { useEffect, useState } from "react";
import InitPage from "@/components/InitPage";
import RainyBackground from "@/components/water";
import styles from "@/styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (sessionStorage.getItem("access")) {
      //初回じゃない
      setIsLoading(false);
    } else {
      //初回
      setIsLoading(true);
      setTimeout(() => {
        sessionStorage.setItem("access", "firstaccess");
        setIsLoading(false);
      }, 3300); // 3.3秒
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <InitPage />
      ) : (
        <div className={styles.feedIn}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>

        // <RainyBackground />
      )}
    </>
  );
}
