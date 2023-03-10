//@ts-nocheck
import React, { FC, useState } from "react";
import {
  AnimatePresence,
  calcLength,
  motion,
  useAnimation,
  useCycle,
  useDragControls,
  useReducedMotion,
} from "framer-motion";

import Image from "next/image";
import { navVariants } from "@/utils/motion";
import styles from "@/styles";
import {
  ForDeskTopNavigation,
  ForMobileNavigation,
} from "./Navigation/navigation";
import { prepare } from "@react-three/fiber/dist/declarations/src/core/renderer";
import { useScroll } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative `}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          {/* <Image
            src="/img/search.svg"
            alt="search"
            width={24}
            height={24}
            objectFit="contain"
            className="w-[24px] h-[24px] object-contain text-white"
          /> */}
          <h2 className="font-extrabold text-[24px] leading-[30px]  text-white m-auto">
            東京理科大 ピアノの会
          </h2>
          {/* <Image
            src="/img/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="object-contain"
          /> */}
        </div>
        {isDesktop && <ForDeskTopNavigation />}
        {!isDesktop && <ForMobileNavigation />}
      </motion.nav>
    </div>
  );
};

export default Navbar;
