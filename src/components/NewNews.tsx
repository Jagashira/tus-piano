import { clientNews } from "@/modules/lib/client";
import { BlogContainer } from "@/modules/lib/textStyle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "./other/TypingText";
import { fadeIn, staggerContainer } from "@/utils/motion";

const NewNews = ({ news }: any) => {
  return (
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` mx-auto flex-col`}
    >
      <TypingText title={"|新着 News"} textStyles="text-center" />
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
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
                {news.title}
              </BlogContainer>
            </Link>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default NewNews;
