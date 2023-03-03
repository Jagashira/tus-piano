import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Three from "@/components/Three";
import { useEffect, useState } from "react";
import InitPage from "@/components/InitPage";
import RainyBackground from "@/components/water";
import styles from "@/styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      {loading ? (
        <div className={styles.feedIn}>
          <Layout>
            <Component {...pageProps} />
            <div
              style={{
                height: "100vh",
                width: "100vw",
                zIndex: -1,
                position: "fixed",
                top: 0,
                left: 0,
              }}
            >
              <Three />
            </div>
          </Layout>
        </div>
      ) : (
        // <InitPage />
        <RainyBackground />
      )}
    </>
  );
}
