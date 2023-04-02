import React from "react";
import { motion } from "framer-motion";

import styles from "@/styles";
import Image from "next/image";
import { footerVariants } from "@/utils/motion";
import { socials } from "@/utils/data";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 `}>
        <div className="flex items-center justify-between flex-wrap gap-5 ">
          <h4
            className="font-bo
         md:text-[64px] text-[44px] text-white"
          >
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="flex
           items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px] "
          >
            <Image
              src="/img/headset.svg"
              width={24}
              height={24}
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              ENTER METAVERSE
            </span>
          </button>
          <div className="flex flex-col w-[100vw]">
            <div className="mb-[50px] h-[2px] bg-white opacity-10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h4 className="font-extrabold text-[24px] text-white">
                  Metaversus
                </h4>
                <p className="font-normal text-[14px] text-white opacity-50">
                  Copyright
                </p>
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <Image
                      src={social.url}
                      alt={social.name}
                      width={20}
                      height={20}
                      key={social.name}
                      className="w-[24px] h-[24px] object-contain cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
