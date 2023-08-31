import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../other/TypingText";
import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "../styles/Home/HomeActivity.module.css";
import Slider from "./SideImg";

const HomeActivity = () => {
  return (
    <>
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto `}
      >
        <TypingText title={"Activity"} textStyles="text-center text-[36px]" />
        <TypingText title={"活動"} textStyles="text-center text-[13px]" />
        <div style={{ paddingTop: "10vh" }}>
          <Slider />
        </div>
      </motion.div>
    </>
  );
};

export default HomeActivity;
