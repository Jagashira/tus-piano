import { Pagination } from "@/components/news/Pagination";
import { clientNews } from "@/modules/lib/client";
import Link from "next/link";

export default function Home({ news, totalCount }) {
  return (
    <div>
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} contentType={"news"} />
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await clientNews.get({
    endpoint: "news",
    queries: { offset: 0, limit: 5 },
  });

  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
};
