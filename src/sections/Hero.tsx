// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import styles from "@/styles";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-0">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            東京理科大
            <br />
            ピアノの会
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}></h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] rounded-top-[140px]  -top-[30px]">
            {/* <Image
              src="/img/piano2.jpg"
              alt="cover"
              width={100}
              height={100}
              className="w-full sm:h[500px] h-[350px] object-contain rounded-tl-[140px]  relative"
            /> */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
