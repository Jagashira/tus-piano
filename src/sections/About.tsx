import React from "react";
import { motion } from "framer-motion";

import styles from "@/styles";
import { TypingText } from "@/utils/otherExport";
import { fadeIn, staggerContainer } from "@/utils/motion";
const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.flexCenter} ${styles.innerWidth} mx-auto flex-col`}
      >
        <TypingText title={"ピアノの会について"} textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-slate-300"
        >
          <span className="font-extrabold text-white">
            東京理科大学ピアノの会
          </span>
          は、東京理科大学野田キャンパスをメインに活動している部活です。
          現在の主な活動として、 １．ホームページ等を通した会員同士の交流
          ２．練習会や食事会を通した会員同士の交流
          ３．卒業後の演奏活動の場所の提供 を行なっています。
          卒業・就職して離れ離れになった後も、東京理科大学ピアノの会
          ＯＢ会を通じて、会員同士ささやかでも交流を続けて行ければと思っています。
          東京理科大学ピアノの会ＯＢ会に関するお問い合わせは
          piakaitus.entry@gmail.com までお気軽にお問い合わせください。
          <span className="font-extrabold text-white"></span>
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/img/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
