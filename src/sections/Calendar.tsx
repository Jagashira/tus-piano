// @ts-nocheck
import React, { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "@/utils/otherExport";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const CalendarComponent = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
      >
        <TypingText title="| カレンダー" textStyles="text-center" />

        <TitleText
          title={<>年間の日程を下記にまとめました</>}
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Calendar onChange={setDate} value={date} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CalendarComponent;
