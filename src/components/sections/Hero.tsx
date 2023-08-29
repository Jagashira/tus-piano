import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { BigName, BigTitle, CircleName } from "@/modules/lib/textStyle";
import Styled from "styled-components";
import { useDimensions } from "@/modules/lib/useDimention";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const FirstView = () => {
  const isLarge = useMediaQuery({ query: "(min-width: 1460px)" });
  const isMiddle = useMediaQuery({ query: "(min-width: 1216px)" });

  const fontSize = () => {
    if (isLarge) {
      return 36;
    } else if (isMiddle) {
      return 20;
    } else {
      return 18;
    }
  };
  return (
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.h1
        variants={textVariant(1.1)}
        style={{
          zIndex: 10,
          inset: 0,
          paddingLeft: "20vw",
          display: "flex",
          flexDirection: "column",
          width: "40vw",
          textAlign: "center",
        }}
      >
        <div
          style={{
            paddingTop: "20vh",
          }}
        >
          {/* <div
            style={{
              paddingLeft: "0px",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: `30px`,
              
              letterSpacing: "0.01em",
              color: "#000000",
            }}
          >
            <CircleName>
              東京理科大学
              <br />
              ピアノの会
            </CircleName>
          </div> */}

          <div
            style={{
              listStyle: "none",
              color: "#000000",

              textAlign: "center",
              paddingTop: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link href="/activity">
              <li style={{ padding: "15px 0px" }}>Activity</li>
            </Link>
            <Link href="/news">
              <li style={{ padding: "15px 0px" }}>News</li>
            </Link>
            <Link href="/blog">
              <li style={{ padding: "15px 0px" }}>Blog</li>
            </Link>
            <Link href="/sponsor">
              <li style={{ padding: "15px 0px" }}>Sponsor</li>
            </Link>
            <Link href="/contact">
              <li style={{ padding: "15px 0px" }}>Contact</li>
            </Link>
          </div>
        </div>
      </motion.h1>
    </motion.div>
  );
};

export default FirstView;
