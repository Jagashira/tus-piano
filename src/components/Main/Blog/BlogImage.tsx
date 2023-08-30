import Image from "next/image";
import React from "react";

const BlogImage = ({ blog }: any) => {
  return (
    <>
      {blog.image.url ? (
        <div
          style={{
            borderRadius: "5% 5% 0% 0%",
            overflow: "hidden",
            width: "310px",
            height: "230px",
          }}
        >
          <Image
            src={blog.image.url}
            alt={blog.title}
            width={310}
            height={230}
          />
        </div>
      ) : (
        <div
          style={{
            width: "310px",
            height: "230px",
            overflowY: "hidden",
          }}
        >
          <Image
            src="/img/no_image/noimage.png"
            alt="思い出"
            width={310}
            height={230}
          />
        </div>
      )}
    </>
  );
};

export default BlogImage;
