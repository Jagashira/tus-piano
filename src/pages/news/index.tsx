import { Pagination } from "@/components/Pagination/Pagination";
import { clientNews } from "@/modules/lib/client";
import { BigTitle, BlogContainer } from "@/modules/lib/textStyle";
import { Content, getCMSType } from "@/modules/types/microCmsTypes";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";

interface Props {
  blog: getCMSType;
  totalCount: number;
}
export default function Home({ news, totalCount }: any) {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 500px)" });
  return (
    <div>
      <div style={{ position: "fixed" }}>
        <BigTitle>News</BigTitle>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative"
      >
        <motion.h1
          variants={textVariant(1.1)}
          style={{
            textAlign: "center",
            color: "white",
            zIndex: 10,
            paddingTop: "225px",
            margin: "0 20px 0 20px",
          }}
        >
          今後の部活動の予定やイベントの情報、部活動の紹介など、
          <br />
          部員たちの活動に関する最新情報を掲載していきます。
        </motion.h1>
      </motion.div>

      <div
        style={{
          padding: "20px 50px 50px 50px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
        }}
      >
        {news.map((news: any) => (
          <div key={news.id} style={{ zIndex: 10 }}>
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
