import { Pagination } from "@/components/Pagination/Pagination";
import { clientNews } from "@/modules/lib/client";
import { BigTitle, BlogContainer } from "@/modules/lib/textStyle";
import { Content, getCMSType } from "@/modules/types/microCmsTypes";
import Image from "next/image";
import Link from "next/link";

interface Props {
  news: getCMSType;
  totalCount: number;
}
export default function Home({ news, totalCount }: any) {
  return (
    <div>
      <BigTitle>News</BigTitle>
      <div
        style={{
          padding: "50px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {news.map((news: any) => (
          <div key={news.id}>
            <Link href={`/news/id/${news.id}`}>
              <BlogContainer>
                <div
                  style={{
                    borderRadius: "5% 5% 0% 0%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/img/piano.jpg"
                    alt="piano"
                    width={310}
                    height={230}
                  />
                </div>
                {/*     <div
          style={{
            margin: "10px",
            backgroundColor: "black",
            width: "100%",
            // height: "100%",
          }}
        >
          2023
        </div> */}
                {news.title}
              </BlogContainer>
            </Link>
          </div>
        ))}
      </div>
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
