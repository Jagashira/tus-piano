import { Pagination } from "@/components/Pagination/Pagination";
import { clientNews } from "@/modules/lib/client";
import { Content, getCMSType } from "@/modules/types/microCmsTypes";
import Link from "next/link";
import { motion } from "framer-motion";
import { BigTitle, NewsContainer } from "@/modules/lib/textStyle";
import { staggerContainer, textVariant } from "@/utils/motion";
import { FormatDate } from "@/modules/lib/formattedData";
import styles from "@/styles/News/News.module.css";

const PER_PAGE = 5;
interface Props {
  news: getCMSType;
  totalCount: number;
}

// pages/news/[id].js
export default function newsPageId({ news, totalCount }: any) {
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
