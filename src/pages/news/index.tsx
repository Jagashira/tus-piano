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
    <div className={styles.wrapper}>
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.headlineContainer}
      >
        <motion.h1 variants={textVariant(1.1)} className={styles.headlineH1}>
          <BigTitle>NEWS</BigTitle>
          <p className={styles.headlineContent}>
            今後の部活動の予定やイベントの情報、部活動の紹介など、
            <br />
            部員たちの活動に関する最新情報を掲載していきます。
          </p>
        </motion.h1>
      </motion.div>

      <div className={styles.newsContainer}>
        {news.map((news: any, index: number) => {
          return (
            <li key={news.id} className={styles.listStyle}>
              <Link href={`/news/id/${news.id}`}>
                <div className="">
                  <p className={styles.date}>{FormatDate(news.publishedAt)}</p>

                  {/* <TagSvg tag="重要" /> */}

                  <p className={styles.title}>{news.title}</p>
                </div>
              </Link>
              <hr className={styles.hrStyle} />
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
