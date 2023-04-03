import React from "react";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import styles from "@/styles";
import { ForDeskTopNavigation, ForMobileNavigation } from "./navigation";

import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const Navbar = () => {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 px-10 `}
      >
        {/* {!isDesktop && (
          <>
            <div
              className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
            >
              <h2 className="font-extrabold text-[24px] leading-[30px]  text-white m-auto">
                <Link href="/">東京理科大 ピアノの会</Link>
              </h2>
            </div>
          </>
        )} */}
        <div
              className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
            >
              <h2 className="font-extrabold text-[24px] leading-[30px]  text-white m-auto">
                <Link href="/">東京理科大 ピアノの会</Link>
              </h2>
            </div>
        {isDesktop && <ForDeskTopNavigation />}
        {!isDesktop && (
          <div style={{ zIndex: 100 }}>
            <ForMobileNavigation />
          </div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
