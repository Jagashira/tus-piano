import { Pagination } from "@/components/news/Pagination";
import { clientBlog } from "@/modules/lib/client";
import { Content, getCMSType } from "@/modules/types/microCmsTypes";
import Link from "next/link";

interface Props {
  blog: getCMSType;
  totalCount: number;
}
export default function Home({ blog, totalCount }: any) {
  return (
    <div>
      <ul>
        {blog.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`/blog/id/${blog.id}`}>{blog.title}</Link>
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
