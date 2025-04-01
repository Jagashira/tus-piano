import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/utils/motion";
import Link from "next/link";

interface Props {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
  id: string;
}
const ActivityDetailCard = ({ imgUrl, title, subtitle, index, id }: Props) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <Image
        src={imgUrl}
        alt="piano"
        width={250}
        height={250}
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover "
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-medium lg:text-[42px] text-[26px] text-black">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-black">
            {subtitle}
          </p>
        </div>
        <Link href={`/blog/id/${id}`}>
        <div
          className="lg:flex hidden items-center
         justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-black"
        >
          <Image
            src="/svg/arrow.svg"
            alt="arrow"
            width={30}
            height={30}
            className="w-[40%] h-[40%] object-contain"
          />
        </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ActivityDetailCard;
