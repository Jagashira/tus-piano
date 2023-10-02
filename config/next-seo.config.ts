import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Tokyo University of Science Piano Club HP",
  titleTemplate: "%s | 東京理科大学ピアノの会のホームページ",
  description: "東京理科大学ピアノの会のホームページです",
  canonical: "https://tus-piano.vercel.app/",
  openGraph: {
    url: "https://tus-piano.vercel.app",
    type: "website",
    title: "東京理科大学ピアノの会のホームページ",
    description: "東京理科大学ピアノの会のホームページです",
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
