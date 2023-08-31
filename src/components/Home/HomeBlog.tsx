import {
  BlogContainer,
  NoneScrollBar,
  SheetContainer,
} from "@/modules/lib/textStyle";
import Link from "next/link";
import React from "react";
import { TypingText } from "../other/TypingText";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { MoreArrowSvgBlog } from "@/modules/lib/tagSvg";
import BlogImage from "./Blog/BlogImage";
import BlogTitle from "./Blog/BlogTitle";
import styles from "@/styles/Home/HomeBlog.module.css";

const HomeBlog = ({ blogGroup }: any) => {
  return (
    <>
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.wrapper}
      >
        <TypingText title={"Blog"} textStyles="text-center text-[36px]" />
        <TypingText title={"ブログ"} textStyles="text-center text-[13px]" />
        <div className={styles.blogContainer}>
          <NoneScrollBar>
            <SheetContainer
              variants={fadeIn("up", "tween", 0.2, 1)}
              className={styles.sheetContainer}
            >
              {blogGroup.map((blog: any, index: number) => (
                <div key={blog.id} className={styles.blogGroup}>
                  <Link href={`/blog/id/${blog.id}`}>
                    <BlogContainer>
                      <BlogImage blog={blog} />
                      <BlogTitle blog={blog} />
                    </BlogContainer>
                  </Link>
                  {blogGroup.length === index + 1 ? (
                    <div className={styles.blogGroup}>
                      <Link href="/blog">
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
    </>
  );
};

export default HomeBlog;
