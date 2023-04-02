import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { BigName, BigTitle } from "@/modules/lib/textStyle";
const FirstView = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.h1
        variants={textVariant(1.1)}
        style={{
          color: "white",
          zIndex: 10,
          paddingTop: "10vh",
          paddingLeft: "10vw",
        }}
      >
        <BigName>
          東京理科大学
          <br />
          ピアノの会
        </BigName>
      </motion.h1>
    </motion.div>
  );
};

export default FirstView;
