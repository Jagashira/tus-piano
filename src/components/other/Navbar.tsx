import React from "react";
import { calcLength, motion } from "framer-motion";

import Image from "next/image";
import { navVariants } from "@/utils/motion";
import styles from "@/styles";

const Navbar = () => {
  return (
    <div>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <Image
            src="/img/search.svg"
            alt="search"
            width={24}
            height={24}
            objectFit="contain"
            className="w-[24px] h-[24px] object-contain text-white"
          />
          <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
            METAVERSE
          </h2>
          <Image
            src="/img/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
