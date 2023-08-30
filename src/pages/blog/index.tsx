import { Pagination } from "@/components/Pagination/Pagination";
import { clientBlog } from "@/modules/lib/client";
import { BigTitle, BlogContainer } from "@/modules/lib/textStyle";
import { Content, getCMSType } from "@/modules/types/microCmsTypes";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { FormatDate } from "@/modules/lib/formattedData";
import ArticleListItem from "@/components/ArticleListItem";
import styles from "@/styles/ArticleListItem.module.css";

interface Props {
  blog: getCMSType;
  totalCount: number;
}
export default function Home({ blog, totalCount }: any) {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 500px)" });

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
          <BigTitle>BLOG</BigTitle>
          ピアノの会の部活のブログページでは、
          <br />
          部員たちの練習やイベントの様子など、部活動に関する情報を共有しています。
        </motion.h1>

        <div
          style={{
            padding: "50px 50px 50px 50px",
            margin: "64px auto",
            display: "flex",
            flexDirection: "column",
            width: "60vw",

            backgroundColor: "white",
            borderRadius: "20px",
            gap: "40px",
          }}
        >
          {blog.map((blog: any) => {
            return <ArticleListItem blog={blog} key={blog.id} />;
          })}
          <Pagination totalCount={totalCount} contentType={"blog"} />
        </div>
      </motion.div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await clientBlog.get({
    endpoint: "blog",
    queries: { offset: 0, limit: 6 },
  });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
