import styles from "@/styles";
import { exploreWorlds, SNSDescription } from "@/utils/data";
import { staggerContainer } from "@/utils/motion";
import { ExploreCard, TitleText, TypingText } from "@/utils/otherExport";
import { motion } from "framer-motion";
import React, { useState } from "react";

import CalendarContainer from "./CalendarContainer";

const Explore = () => {
  const [active, setActive] = useState<string>("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| SNS" textStyles="text-center" />
        <TitleText
          title={
            <>
              日々の活動を
              <br className="md:block hidden" />
              SNSに投稿しています
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {SNSDescription.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
