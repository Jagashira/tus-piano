// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { ActivitiesDesc, startingFeatures } from "@/utils/data";
import ImageContainer from "../other/ImageContainer";
import ActivityContent from "./ActivityContent";
import { TitleText, TypingText } from "../other/TypingText";
import styles from "@/styles/Activity/Activity.module.css";

const Activities = () => {
  const imageInfo = {
    imgUrl: "/img/animePiano.png",
    alt: "get-started",
    width: 500,
    height: 500,
    classname: " object-contain",
  };
  return (
    <section className={styles.activitiesWrapper}>
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} `}
      >
        <TypingText title="| 活動内容" textStyles="text-center" />

        <div className={styles.activitiesGroup}>
          <motion.div
            variants={planetVariants("left")}
            className={styles.activitiesImageContainer}
          >
            <div className={styles.activitiesImage}>
              <ImageContainer {...imageInfo} />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <TitleText
              title={<>ピアノの会の主な活動内容</>}
              textStyles="text-center"
            />
            <div className={styles.activitiesDesc}>
              {ActivitiesDesc.map((feature, index) => (
                <ActivityContent
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
