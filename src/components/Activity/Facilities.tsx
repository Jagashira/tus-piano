import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { activityDetailDate } from "@/utils/data";
import { TypingText } from "../other/TypingText";
import ActivityDetailCard from "./ActivityDetailCard";

const Facilities = () => {
  return (
    <section className={`${styles.paddings} relative z-10 mt-10`}>
      <motion.div
        // @ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
      >
        <TypingText title="| 施設" textStyles="text-center" />
       
        <div className="mt-[50px] flex flex-col gap-[30px] text-black/50 text-center">
            Coming soon...
        </div>
      </motion.div>
    </section>
  );
};

export default Facilities;
