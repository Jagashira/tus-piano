import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import styles from "@/styles";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import Link from "next/link";

const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto `}
        style={{ maxWidth: "900px" }}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className=" lg:max-[370px] sm:p-8 p-4 rounded-[32px] gradient-05 border-[1#6a6a6a] relative"
        >
          <div className="" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              まだ入部されてない方へ
            </h4>
            {/* <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
              Founder | Metaversus
            </p> */}
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            東京理科大学ピアノの会に入部を考えている方は
            <Link href="/blog/as">こちら（入部手続きの手順）</Link>
            にて説明しています。
          </p>
        </motion.div>
        {/* <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        ></motion.div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute left-[10%] top-[3%]"
        ></motion.div> */}
      </motion.div>
    </section>
  );
};

export default Feedback;
