import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { sidebar } from "@/modules/motion/sider";
import { Navigation } from "./MenuItem";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "@/modules/lib/useDimention";
import { Li } from "@/modules/lib/motionStyled";
import Link from "next/link";

export const ForDeskTopNavigation = () => {
  const navigationElement = [
    { name: "Home", url: "/" },
    { name: "Activity", url: "/activity" },
    { name: "Blog", url: "/blog" },
    { name: "News", url: "/news" },
    { name: "Sponsor", url: "/sponsor" },
  ];
  return (
    <div className="flex flex-row  text-white w-[80%] m-auto z-10 pt-[15px]">
      {navigationElement.map((element) => {
        return (
          <Link
            href={element.url}
            key={element.name}
            className="flex-1 text-center"
          >
            <p>{element.name}</p>
          </Link>
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
      className="inset-0 absolute "
    >
      <motion.div
        className="absolute inset-0 w-[300px] h-[100vh] bg-gray-800 z-9"
        style={{
          opacity: "30%",
          filter: "blur(10px)",
          borderBottomRightRadius: "40px",
        }}
        variants={sidebar}
      />
      <AnimatePresence>
        {isOpen ? <Navigation toggle={() => toggleOpen()} /> : null}
      </AnimatePresence>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
