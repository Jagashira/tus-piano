import { clientNews } from "@/modules/lib/client";
import {
  BlogContainer,
  NoneScrollBar,
  SheetContainer,
} from "@/modules/lib/textStyle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "./other/TypingText";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { useWindowSize } from "@/modules/lib/useWindowSize";
import { Icon } from "@iconify/react";
const NewNews = ({ newsGroup }: any) => {
  const [width] = useWindowSize();
  return (
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` mx-auto flex-col`}
    >
      <TypingText title={"News"} textStyles="text-center" fontSize={36} />
      <TypingText title={"お知らせ"} textStyles="text-center" fontSize={13} />
      <div style={{ paddingTop: "10vh" }}>
        <NoneScrollBar>
          <SheetContainer variants={fadeIn("up", "tween", 0.2, 1)}>
            {newsGroup.map((news: any, index: number) => {
              return (
                <div key={news.id} style={{ zIndex: 10, paddingRight: "20px" }}>
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
                      {news.title}
                    </BlogContainer>
                  </Link>
                </div>
              );
            })}
          </SheetContainer>
        </NoneScrollBar>
      </div>
    </motion.div>
  );
};

export default NewNews;
