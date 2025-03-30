import { Pagination } from "@/components/Pagination/Pagination";
import { clientBlog } from "@/modules/lib/client";
import { BigTitle, BlogContainer } from "@/modules/lib/textStyle";
import { getCMSType } from "@/modules/types/microCmsTypes";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import BlogListItem from "@/components/Blog/BlogListItem";
import styles from "@/styles/Blog/Blog.module.css";

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
        className={styles.motionContainer}
      >
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.headlineContainer}
        >
          <BigTitle>BLOG</BigTitle>
          <p>
          サークルの活動記録をお届けします。
          </p>
        </motion.h1>

        <div className={styles.blogContainer}>
          {blog.map((blog: any) => {
            return <BlogListItem blog={blog} key={blog.id} />;
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
    queries: { offset: 0, limit: 5 },
  });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
