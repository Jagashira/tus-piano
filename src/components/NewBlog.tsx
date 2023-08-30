import { clientNews } from "@/modules/lib/client";
import {
  BlogContainer,
  NoneScrollBar,
  SheetContainer,
} from "@/modules/lib/textStyle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypingText } from "./other/TypingText";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Icon } from "@iconify/react";
import { MoreArrowSvgBlog } from "@/modules/lib/tagSvg";
import BlogImage from "./Main/Blog/BlogImage";
import BlogTitle from "./Main/Blog/BlogTitle";

const NewBlog = ({ blogGroup }: any) => {
  return (
    <>
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex-col`}
      >
        <TypingText title={"Blog"} textStyles="text-center text-[36px]" />
        <TypingText title={"ブログ"} textStyles="text-center text-[13px]" />
        <div style={{ paddingTop: "10vh" }}>
          <NoneScrollBar>
            <SheetContainer variants={fadeIn("up", "tween", 0.2, 1)} style={{}}>
              {blogGroup.map((blog: any, index: number) => (
                <div key={blog.id} style={{ zIndex: 10, paddingRight: "20px" }}>
                  <Link href={`/blog/id/${blog.id}`}>
                    <BlogContainer>
                      <BlogImage blog={blog} />
                      <BlogTitle blog={blog} />
                    </BlogContainer>
                  </Link>
                  {blogGroup.length === index + 1 ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Link href="/blog" style={{ width: "9vw" }}>
                        <div>
                          <MoreArrowSvgBlog />
                        </div>
                      </Link>
                    </div>
                  ) : null}
                </div>
              ))}
            </SheetContainer>
          </NoneScrollBar>
        </div>
      </motion.div>
      ;
    </>
  );
};

export default NewBlog;
