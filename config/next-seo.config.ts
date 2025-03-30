import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "東京理科大学ピアノの会",
  titleTemplate: "%s",
  description: "東京理科大学ピアノの会は、葛飾・野田キャンパスで活動中！グランドピアノを備えた環境で、自由に演奏を楽しめます。",
  canonical: "https://tus-piano.vercel.app/",
  openGraph: {
    url: "https://tus-piano.vercel.app",
    type: "website",
    title: "東京理科大学ピアノの会",
    description: "東京理科大学ピアノの会は、葛飾・野田キャンパスで活動中！グランドピアノを備えた環境で、自由に演奏を楽しめます。",
    images: [
      {
        url: "https://tus-piano.vercel.app/svg/circleLogo.svg",
        alt: "東京理科大学ピアノの会のホームページ",
      },
    ],
    locale: "ja_JP",
    site_name: "東京理科大学ピアノの会のホームページ",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "@TUS_Piakai",
    handle: "TUS_Piakai",
  },

};

export default config;
