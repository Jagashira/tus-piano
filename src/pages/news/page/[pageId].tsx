import { Pagination } from "@/components/news/Pagination";
import { clientNews } from "@/modules/lib/client";
import Link from "next/link";

const PER_PAGE = 5;

// pages/news/[id].js
export default function newsPageId({ news, totalCount }) {
  return (
    <div>
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>{news.title}</Link>
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

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/news/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
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
