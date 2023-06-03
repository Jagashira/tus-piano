import { clientNews } from "@/modules/lib/client";
import {
  BlogContainer,

  NewsContainer,
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
import { FormatDate } from "@/modules/lib/formattedData";
import { MoreArrowSvgNews, TagSvg } from "@/modules/lib/tagSvg";
const NewNews = ({ newsGroup }: any) => {
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
      <TypingText title={"News"} textStyles="text-center text-[36px]"  />
      <TypingText title={"お知らせ"} textStyles="text-center text-[13px]"  />
      <div style={{ paddingTop: "10vh" }}>
        <NoneScrollBar>
          <SheetContainer variants={fadeIn("up", "tween", 0.2, 1)}>
           <div style={{display:"flex",flexDirection:"column",width:"80%",margin:"auto"}}> {newsGroup.map((news: any, index: number) => {
              return (
                <li  key={news.id} style={{ zIndex: 10 ,listStyle:"none",}}>
                  
                  <Link href={`/news/id/${news.id}`}>
                   <NewsContainer>
                    <p style={{padding:'0 1vw'}}>{FormatDate
                    (news.publishedAt)}</p>
                    <TagSvg tag="重要"/>
                    <p>{news.title}</p>
                    
                   </NewsContainer>
                  </Link>
                
                </li>
              );
            })}
            <Link href="/news" style={ {marginLeft:'1vw'}}><MoreArrowSvgNews/></Link></div>
            
          </SheetContainer>
        </NoneScrollBar>
      </div>
    </motion.div>
  );
};

export default NewNews;
