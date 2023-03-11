import React from "react";
import { motion } from "framer-motion";

import styles from "@/styles";
import { TypingText } from "@/utils/otherExport";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Link from "next/link";
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
          は、
          <br />
          東京理科大学野田キャンパスをメインに活動している部活です。
          <br />
          現在の主な活動は、
          <span className="font-extrabold text-white">定期発表会</span>
          に向けて練習です。また、
          <span className="font-extrabold text-white">BBQ</span>や
          <span className="font-extrabold text-white">合宿</span>
          等の交流の場もあるので、
          <span className="font-extrabold text-white">上下の関わりも多い</span>
          部活です。 詳しくは
          <span className="font-extrabold text-white">
            <Link href="/activity">Activity</Link>
          </span>
          を参照してください。
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
