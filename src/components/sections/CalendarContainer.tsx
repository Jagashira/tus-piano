// @ts-nocheck
import React, { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "@/utils/otherExport";
import { Calendar } from "./Calendar";
import { RecoilRoot } from "recoil";

const CalendarContainer = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <section className={`z-10 text-center`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex flex-col gap-8`}
      >
        <TypingText title="| カレンダー" textStyles="text-center" />

        <TitleText
          title={<>年間の日程を下記にまとめました</>}
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative flex "
        >
          <RecoilRoot>
            <div style={{ width: "100%" }}>
              <Calendar />
            </div>
          </RecoilRoot>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CalendarContainer;
