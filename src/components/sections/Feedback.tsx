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
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div>
              <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-black text-center">
                入部を考えている方へ
              </h4>
            </div>
            <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-black">
              東京理科大学ピアノの会に入部を考えている方は
              <Link
                href="/blog/id/hd-_07l4gq"
                style={{ borderBottom: "2px solid #000" }}
              >
                こちら（入部手続きの手順）
              </Link>
              にて説明しています。
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
