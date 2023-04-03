import { clientNews } from "@/modules/lib/client";
import { BlogContainer } from "@/modules/lib/textStyle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewBlog = ({ blog }: any) => {
  return (
    <div
      style={{
        padding: "20px 50px 50px 50px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 20,
      }}
    >
      {blog.map((blog: any) => (
        <div key={blog.id} style={{ zIndex: 10 }}>
          <Link href={`/news/id/${blog.id}`}>
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
  );
};

export default NewBlog;
