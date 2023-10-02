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
import SEO from "@/../config/next-seo.config";
import { DefaultSeo } from "next-seo";

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
      <DefaultSeo {...SEO} />
      <GoogleAnalytics />

      {isLoading ? (
        <div style={{ overflow: "hidden" }}>
          <SplashScreen />
        </div>
      ) : (
        <div className={styles.feedIn}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      )}
    </>
  );
}
