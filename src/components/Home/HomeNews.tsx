import { NoneScrollBar, SheetContainer } from "@/modules/lib/textStyle";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "../other/TypingText";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { useWindowSize } from "@/modules/lib/useWindowSize";
import { FormatDate } from "@/modules/lib/formattedData";
import { MoreArrowSvgNews, TagSvg } from "@/modules/lib/tagSvg";
import styles from "@/styles/Home/HomeNews.module.css";

const HomeNews = ({ newsGroup }: any) => {
  const [width] = useWindowSize();
  return (
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={styles.wrapper}
    >
      <TypingText title={"News"} textStyles="text-center text-[36px]" />
      <TypingText title={"お知らせ"} textStyles="text-center text-[13px] " />
      <div style={{ paddingTop: "10vh" }}>
        <NoneScrollBar>
          <SheetContainer variants={fadeIn("up", "tween", 0.2, 1)}>
            <div className={styles.newsContainer}>
              {newsGroup.map((news: any, index: number) => {
                return (
                  <li key={news.id} className={styles.listStyle}>
                    <Link href={`/news/id/${news.id}`}>
                      <div className="">
                        <p className={styles.date}>
                          {FormatDate(news.publishedAt)}
                        </p>

                        {/* <TagSvg tag="重要" /> */}

                        <p className={styles.title}>{news.title}</p>
                      </div>
                    </Link>
                    <hr className={styles.hrStyle} />
                  </li>
                );
              })}
              <Link href="/news" style={{ marginLeft: "20px" }}>
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
