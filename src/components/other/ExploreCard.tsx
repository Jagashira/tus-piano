import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import styles from "@/styles";
import Link from "next/link";

interface Props {
  id: string;
  imgUrl: string;
  url: string;
  title: string;
  index: number;
  active: string;
  handleClick: any;
}

const ExploreCard = ({
  id,
  imgUrl,
  url,
  title,
  index,
  active,
  handleClick,
}: Props) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={` relative ${
        active === id ? "lg;flex-[3.5] flex-[10]" : "lg;flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        layout="fill"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col  rounded-b-[24px]">
          <Link href={url}>
            <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
              Enter SNS
            </p>
            <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
              {title}
            </h2>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
