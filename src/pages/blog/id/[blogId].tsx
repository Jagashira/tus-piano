// pages/blog/[id].js

import { clientBlog } from "@/modules/lib/client";
import { FormatDate } from "@/modules/lib/formattedData";
import { Content } from "@/modules/types/microCmsTypes";
import styles from "@/styles/common/Article.module.css";

export default function BlogId({ blog }: any) {
  //const date = FormatDate(blog.publishedAt, "YYYY-MM-DD-HH-mm");

  return (
    <div className={styles.blogContainer}>
      <p className={styles.title}>{blog.title}</p>
      <hr className={styles.line} />
      <p className={styles.date}>{FormatDate(blog.publishedAt)}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await clientBlog.get({ endpoint: "blog" });

  const paths = data.contents.map((content: any) => `/blog/id/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.blogId;
  const data = await clientBlog.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
