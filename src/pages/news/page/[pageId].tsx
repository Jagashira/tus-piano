import { Pagination } from "@/components/Pagination/Pagination";
import { clientNews } from "@/modules/lib/client";
import { Content, getCMSType } from "@/modules/types/microCmsTypes";
import Link from "next/link";

const PER_PAGE = 5;
interface Props {
  news: getCMSType;
  totalCount: number;
}

// pages/news/[id].js
export default function newsPageId({ news, totalCount }: any) {
  return (
    <div className="overflow-hidden">
      <ul>
        {news.map((news: any) => (
          <li key={news.id}>
            <Link href={`/news/id/${news.id}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} contentType="news" />
    </div>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await clientNews.get({ endpoint: "news" });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/news/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context: any) => {
  const id = context.params.pageId;
  console.log(id);

  const data = await clientNews.get({
    endpoint: "news",
    queries: { offset: (id - 1) * 5, limit: 5 },
  });

  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
};
