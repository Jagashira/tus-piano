import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import styles from "@/styles/Home/Home.module.css";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import { pageview } from "@/modules/lib/gtag";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
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

    const handleRouterChange = (url: any) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>東京理科大学ピアノの会</title>
        <meta
          name="description"
          content="こちらは東京理科大学ピアノの会のホームページです。"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0"
        />
        <link rel="shutcut/icon" href="public/icon/piano_circle.ico" />
      </Head>
      <GoogleAnalytics />

      {isLoading ? (
        <SplashScreen />
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
