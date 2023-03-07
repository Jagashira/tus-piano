// pages/blog/[id].js

import { clientBlog } from "@/modules/lib/client";
import { FormatDate } from "@/modules/lib/formattedData";

export default function BlogId({ blog }: any) {
  //const date = FormatDate(blog.publishedAt, "YYYY-MM-DD-HH-mm");
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{FormatDate(blog.publishedAt)}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
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
  const id = context.params.id;
  const data = await clientBlog.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
