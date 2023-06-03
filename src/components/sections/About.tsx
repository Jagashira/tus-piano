import React from "react";
import { motion } from "framer-motion";

import styles from "@/styles";
import { TypingText } from "@/utils/otherExport";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Link from "next/link";
const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      {/* <div className="gradient-02 z-0" /> */}
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
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-slate-300 leading-9"
        >
          東京理科大学の
          <span className="font-extrabold text-white">
            ピアノの会は、音楽を愛する仲間たちが集まり、演奏や交流を楽しむサークル
          </span>
          です。ピアノを中心に、様々な楽器の演奏や合唱も行っています。また、
          <span className="font-extrabold text-white">
            BBQや合宿などのイベントも定期的に開催
          </span>
          し、親睦を深めています。初心者から上級者まで、どなたでも参加できますので、
          <span className="font-extrabold text-white">
            音楽を通じた新しい出会いを楽し
          </span>
          みましょう。
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
