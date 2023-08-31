import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { activityDetailDate } from "@/utils/data";
import { TypingText } from "../other/TypingText";
import ActivityDetailCard from "./ActivityDetailCard";

const ActivityDetail = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        // @ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
      >
        <TypingText title="| 詳しく" textStyles="text-center" />
        {/* <TitleText
          title={<>Insight about metaverse</>}
          textStyles="text-center"
        /> */}
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {activityDetailDate.map((date, index) => {
            return (
              <ActivityDetailCard
                key={`insight-${index}`}
                {...date}
                index={index + 1}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ActivityDetail;
