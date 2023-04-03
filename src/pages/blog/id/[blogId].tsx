// pages/blog/[id].js

import { clientBlog } from "@/modules/lib/client";
import { FormatDate } from "@/modules/lib/formattedData";
import { Content } from "@/modules/types/microCmsTypes";

export default function BlogId({ blog }: any) {
  //const date = FormatDate(blog.publishedAt, "YYYY-MM-DD-HH-mm");
  return (
    <div
      style={{
        color: "white",
        zIndex: 10,
        position: "relative",
        textAlign: "center",
        width: "70%",
        margin: "50px auto",
      }}
    >
      <p style={{ fontWeight: "800", fontSize: "26px", marginBottom: "5px" }}>
        {blog.title}
      </p>
      <hr style={{ margin: "10px" }} />
      <p style={{ textAlign: "start", fontSize: "13px" }}>
        {FormatDate(blog.publishedAt)}
      </p>
      <div
        style={{ lineHeight: "3", marginTop: "20px" }}
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
