// pages/news/[id].js

import { clientNews } from "@/modules/lib/client";
import { FormatDate } from "@/modules/lib/formattedData";

export default function newsId({ news }: any) {
  //const date = FormatDate(news.publishedAt, "YYYY-MM-DD-HH-mm");
  return (
    <main>
      <h1>{news.title}</h1>
      <p>{FormatDate(news.publishedAt)}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${news.content}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await clientNews.get({ endpoint: "news" });

  const paths = data.contents.map((content: any) => `/news/id/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.newsId;
  const data = await clientNews.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};
