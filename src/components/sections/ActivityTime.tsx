// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { NewFeatures, TitleText, TypingText } from "@/utils/otherExport";
import { newFeatures } from "@/utils/data";

const ActivityTime = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| 活動日程・時間" />
          {/* <TitleText title={<>What&apos;s new about Metaversus</>} /> */}
          <div className="mt-[48px] flex  flex-wrap justify-between gap-[24px]">
            {/* {newFeatures.map((feature, index) => (
              <NewFeatures key={feature.title} {...feature} />
            ))} */}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          {/* <Image
            src="/img/whats-new.png"
            alt="get-started"
            width={500}
            height={500}
            className="w-[90%] h-[90%] object-contain"
          /> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ActivityTime;
