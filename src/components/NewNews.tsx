import { clientNews } from "@/modules/lib/client";
import { BlogContainer } from "@/modules/lib/textStyle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewNews = ({ news }: any) => {
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
      {news.map((news: any) => (
        <div key={news.id} style={{ zIndex: 10 }}>
          <Link href={`/news/id/${news.id}`}>
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
              {news.title}
            </BlogContainer>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewNews;
