import { Pagination } from "@/components/Pagination/Pagination";
import { clientNews } from "@/modules/lib/client";
import { Content, getCMSType } from "@/modules/types/microCmsTypes";
import Link from "next/link";

interface Props {
  news: getCMSType;
  totalCount: number;
}
export default function Home({ news, totalCount }: any) {
  return (
    <div>
      <ul>
        {news.map((news: any) => (
          <li key={news.id}>
            <Link href={`/news/id/${news.id}`}>{news.title}</Link>
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
