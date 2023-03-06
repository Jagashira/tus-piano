import styles from "@/styles";
import { exploreWorlds } from "@/utils/data";
import { staggerContainer } from "@/utils/motion";
import { ExploreCard, TitleText, TypingText } from "@/utils/otherExport";
import { motion } from "framer-motion";
import React, { useState } from "react";

import World from "./World";

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
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" />
              to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
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
