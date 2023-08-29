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
    <div>
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
            display: "flex",
            flexDirection: "column",
            width: "60vw",
            margin: "auto",
          }}
        >
          {blog.map((blog: any) => {
            return (
              <ArticleListItem blog={blog} />
              // <div key={blog.id} style={{ margin: "20px" }}>
              //   <Link href={`/blog/id/${blog.id}`}>
              //     <div style={{ display: "flex", flexDirection: "row" }}>
              //       <div
              //         style={{
              //           width: "300px",
              //           height: "200px",
              //           overflow: "hidden",
              //         }}
              //       >
              //         {blog.image ? (
              //           <Image
              //             src={blog.image.url}
              //             alt="思い出"
              //             width={300}
              //             height={200}
              //           />
              //         ) : (
              //           <div
              //             style={{
              //               width: "300px",
              //               height: "200px",
              //               backgroundColor: "black",
              //             }}
              //           ></div>
              //         )}
              //       </div>
              //     </div>
              //     <div>
              //       {blog.title}
              //       <div>{FormatDate(blog.publishedAt)} </div>
              //     </div>
              //   </Link>
              // </div>
            );
          })}
        </div>

        <Pagination totalCount={totalCount} contentType={"blog"} />
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

// {blog.map((blog: any) => {
//   return (
//     <div key={blog.id} style={{ zIndex: 10 }}>
//       <Link href={`/blog/id/${blog.id}`}>
//         <BlogContainer>
//           <div
//             style={{
//               borderRadius: "5% 5% 0% 0%",
//               overflow: "hidden",
//             }}
//           >
//             {blog.image && (
//               <Image
//                 src={blog.image.url}
//                 alt="piano"
//                 width={310}
//                 height={230}
//               />
//             )}
//           </div>
//           {/*     <div
//   style={{
//     margin: "10px",
//     backgroundColor: "black",
//     width: "100%",
//     // height: "100%",
//   }}
// >
//   2023
// </div> */}
//           {blog.title}
//         </BlogContainer>
//       </Link>
//     </div>
//   );
// })}
