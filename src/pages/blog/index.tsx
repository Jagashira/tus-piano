import { Pagination } from "@/components/news/Pagination";
import { clientBlog } from "@/modules/lib/client";
import Link from "next/link";

export default function Home({ blog, totalCount }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} contentType="blog" />
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
