// @ts-nocheck
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import CalendarComponent from "../Calendar/CalendarComponent";
import { TypingText } from "../other/TypingText";

const HomeCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <section className={`relative z-10 text-center`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex flex-col `}
      >
        <TypingText title={"Calendar"} textStyles="text-center text-[36px]" />
        <TypingText title={"カレンダー"} textStyles="text-center text-[13px]" />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative flex mt-3"
        >
          <CalendarComponent />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeCalendar;
