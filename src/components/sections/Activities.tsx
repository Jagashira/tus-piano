// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { StartSteps, TitleText, TypingText } from "@/utils/otherExport";
import { ActivitiesDesc, startingFeatures } from "@/utils/data";
import ImageContainer from "../ImageContainer";

const Activities = () => {
  const imageInfo = {
    imgUrl: "/img/animePiano.png",
    alt: "get-started",
    width: 500,
    height: 500,
    classname: " object-contain",
  };
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} `}
      >
        <TypingText title="| 活動内容" textStyles="text-center" />

        <div className="mx-auto flex lg:flex-row flex-col gap-8 ">
          <motion.div
            variants={planetVariants("left")}
            className={`flex-1 ${styles.flexCenter}`}
          >
            <div
              style={{
                borderRadius: "10%",
                overflow: "hidden",
              }}
            >
              <ImageContainer {...imageInfo} />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <TitleText title={<>ピアノの会の主な活動内容</>} />
            <div className="mt-[31px] flex flex-col max-w-[400px] gap-[24px]">
              {ActivitiesDesc.map((feature, index) => (
                <StartSteps
                  key={feature}
                  number={`${index < 10 ? "0" : ""}${index + 1}`}
                  text={feature}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Activities;
