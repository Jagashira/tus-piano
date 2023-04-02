import { Pagination } from "@/components/Pagination/Pagination";
import { clientBlog } from "@/modules/lib/client";
import { BigTitle, BlogContainer } from "@/modules/lib/textStyle";
import { Content, getCMSType } from "@/modules/types/microCmsTypes";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

interface Props {
  blog: getCMSType;
  totalCount: number;
}
export default function Home({ blog, totalCount }: any) {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 500px)" });
  return (
    <div>
      <BigTitle>Blog</BigTitle>
      <div
        style={{
          padding: "50px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {blog.map((blog: any) => (
          <div key={blog.id}>
            <Link href={`/blog/id/${blog.id}`}>
              <BlogContainer>
                <div
                  style={{
                    borderRadius: "5% 5% 0% 0%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/img/piano.jpg"
                    alt="piano"
                    width={310}
                    height={230}
                  />
                </div>
                {/*     <div
          style={{
            margin: "10px",
            backgroundColor: "black",
            width: "100%",
            // height: "100%",
          }}
        >
          2023
        </div> */}
                {blog.title}
              </BlogContainer>
            </Link>
          </div>
        ))}
      </div>
      <Pagination totalCount={totalCount} contentType={"blog"} />
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
