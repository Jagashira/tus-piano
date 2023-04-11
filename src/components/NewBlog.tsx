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

const NewBlog = ({ blog }: any) => {
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
        <TypingText title={"|新着 Blog"} textStyles="text-center" />
        <NoneScrollBar>
          <SheetContainer variants={fadeIn("up", "tween", 0.2, 1)} style={{}}>
            {blog.map((blog: any) => (
              <div key={blog.id} style={{ zIndex: 10, paddingRight: "20px" }}>
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
                    {blog.title}
                  </BlogContainer>
                </Link>
              </div>
            ))}
          </SheetContainer>
        </NoneScrollBar>
      </motion.div>
      ;
    </>
  );
};

export default NewBlog;
