import * as React from "react";
import { motion } from "framer-motion";
import {
  IconPlaceholder,
  Li,
  TextPlaceholder,
  Ul,
} from "@/modules/lib/motionStyled";
import { Icon } from "@iconify/react";
import Link from "next/link";

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

interface Props {
  item: { name: string; color: string; url: string; icon: string };
  toggle: () => void;
}
const MenuItem = ({ item, toggle }: Props) => {
  const style = { border: `2px solid ${item.color}` };
  return (
    <Link prefetch={true} href={item.url} onClick={toggle}>
      <Li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="m-0 p-0"
      >
        <IconPlaceholder style={style} className="pt-[3.1px] pl-[3px]">
          <Icon icon={item.icon} style={{ fontSize: 30 }} />
        </IconPlaceholder>
        <TextPlaceholder style={style}>{item.name}</TextPlaceholder>
      </Li>
    </Link>
  );
};

const variantsNav = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }: { toggle: () => void }) => (
  <Ul
    variants={variantsNav}
    className="p-[25px] absolute top-[100px] w-[230px]"
  >
    {items.map((item) => (
      <MenuItem item={item} key={item.name} toggle={toggle} />
    ))}
  </Ul>
);

const itemIds = [0, 1, 2, 3, 4];
const items = [
  { name: "home", color: "#FF008C", icon: "material-symbols:home", url: "/" },
  { name: "Activity", color: "#D309E1", icon: "tabler:sum", url: "/activity" },
  { name: "Blog", color: "#9C1AFF", icon: "mdi:post", url: "/blog" },
  { name: "News", color: "#7700FF", icon: "mdi:message-badge", url: "/news" },
  {
    name: "Sponsor",
    color: "#4400FF",
    icon: "mdi:handshake-outline",
    url: "/sponsor",
  },
];
