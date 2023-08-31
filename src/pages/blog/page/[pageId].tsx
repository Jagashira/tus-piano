import ArticleListItem from "@/components/Blog/BlogListItem";
import { Pagination } from "@/components/Pagination/Pagination";
import { clientBlog } from "@/modules/lib/client";
import { BigTitle } from "@/modules/lib/textStyle";
import { Content, getCMSType } from "@/modules/types/microCmsTypes";
import { staggerContainer, textVariant } from "@/utils/motion";
import Link from "next/link";
import { motion } from "framer-motion";

const PER_PAGE = 5;

// pages/blog/[id].js
interface Props {
  blog: getCMSType;
  totalCount: number;
}
export default function BlogPageId({ blog, totalCount }: any) {
  console.log(JSON.stringify(blog, null, 2));
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

// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await clientBlog.get({ endpoint: "blog" });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context: any) => {
  const id = context.params.pageId;
  console.log(id);

  const data = await clientBlog.get({
    endpoint: "blog",
    queries: { offset: (id - 1) * 5, limit: 5 },
  });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
