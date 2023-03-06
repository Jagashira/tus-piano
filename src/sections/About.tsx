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
        <TypingText title={"| About Metaverse"} textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-slate-300"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it&apos;s really real, you can feel what you feel in this
          metaverse world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let&apos;s{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
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
