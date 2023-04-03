import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
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
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
