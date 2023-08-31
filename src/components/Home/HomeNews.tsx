import {
  NewsContainer,
  NoneScrollBar,
  SheetContainer,
} from "@/modules/lib/textStyle";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "../other/TypingText";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { useWindowSize } from "@/modules/lib/useWindowSize";
import { FormatDate } from "@/modules/lib/formattedData";
import { MoreArrowSvgNews, TagSvg } from "@/modules/lib/tagSvg";
import styles from "@/styles/Home/NewNews.module.css";

const HomeNews = ({ newsGroup }: any) => {
  const [width] = useWindowSize();
  return (
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` mx-auto `}
    >
      <TypingText title={"News"} textStyles="text-center text-[36px]" />
      <TypingText title={"お知らせ"} textStyles="text-center text-[13px] " />
      <div style={{ paddingTop: "10vh" }}>
        <NoneScrollBar>
          <SheetContainer variants={fadeIn("up", "tween", 0.2, 1)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60vw",
                margin: "auto",
                backgroundColor: "rgba(255,255,255,0.5)",
                padding: "20px 0",
                borderRadius: "20px",
              }}
            >
              {" "}
              {newsGroup.map((news: any, index: number) => {
                return (
                  <li key={news.id} style={{ zIndex: 10, listStyle: "none" }}>
                    <Link href={`/news/id/${news.id}`}>
                      <NewsContainer>
                        <div className={styles.date}>
                          <p style={{ padding: "0 1vw", fontSize: "16px" }}>
                            {FormatDate(news.publishedAt)}
                          </p>
                        </div>
                        {/* <TagSvg tag="重要" /> */}
                        <div className={styles.title}>
                          <p>{news.title}</p>
                        </div>
                      </NewsContainer>
                    </Link>
                  </li>
                );
              })}
              <Link href="/news" style={{ marginLeft: "1vw" }}>
                <MoreArrowSvgNews />
              </Link>
            </div>
          </SheetContainer>
        </NoneScrollBar>
      </div>
    </motion.div>
  );
};

export default HomeNews;
