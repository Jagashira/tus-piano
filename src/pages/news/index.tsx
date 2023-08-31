import { Pagination } from "@/components/Pagination/Pagination";
import { clientNews } from "@/modules/lib/client";
import { BigTitle, NewsContainer } from "@/modules/lib/textStyle";
import { getCMSType } from "@/modules/types/microCmsTypes";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { FormatDate } from "@/modules/lib/formattedData";
import styles from "@/styles/News/News.module.css";

interface Props {
  blog: getCMSType;
  totalCount: number;
}
export default function Home({ news, totalCount }: any) {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 500px)" });
  console.log(news);
  return (
    <div className="overflow-hidden">
      <motion.div
        //@ts-ignore
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
            color: "black",
            zIndex: 10,

            margin: "0 20px 0 20px",
          }}
        >
          <BigTitle>NEWS</BigTitle>
          今後の部活動の予定やイベントの情報、部活動の紹介など、
          <br />
          部員たちの活動に関する最新情報を掲載していきます。
        </motion.h1>
      </motion.div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60vw",
          margin: "30px auto",
          backgroundColor: "rgba(255,255,255,0.5)",
          padding: "20px 0",
          borderRadius: "20px",
        }}
      >
        {news.map((news: any, index: number) => {
          return (
            <li key={news.id} style={{ zIndex: 10, listStyle: "none" }}>
              <Link href={`/news/id/${news.id}`}>
                <NewsContainer>
                  <div className={styles.date}>
                    <p style={{ padding: "0 1vw", fontSize: "16px" }}>
                      {FormatDate(news.publishedAt)}
                    </p>
                  </div>
                  {/* <TagSvg tag="重要" /> */}
                  <div className={styles.title}>
                    <p>{news.title}</p>
                  </div>
                </NewsContainer>
              </Link>
            </li>
          );
        })}
        <Pagination totalCount={totalCount} contentType={"news"} />
      </div>
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
