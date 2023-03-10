import React, { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { sidebar } from "@/modules/motion/sider";
import { Navigation } from "./MenuItem";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "@/modules/lib/useDimention";
import { Li } from "@/modules/lib/motionStyled";

export const ForDeskTopNavigation = () => {
  const navigationElement = ["Home", "Activity", "Blog", "News", "Sponsor"];
  return (
    <div className="flex flex-row  text-white w-[80%] m-auto">
      {navigationElement.map((element) => {
        return (
          <p className="flex-1" key={element}>
            {element}
          </p>
        );
      })}
    </div>
  );
};

export const ForMobileNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="inset-0 absolute"
    >
      <motion.div
        className="absolute inset-0 bg-white w-[300px] h-[100vh]"
        variants={sidebar}
      />
      {isOpen ? <Navigation toggle={() => toggleOpen()} /> : null}
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
