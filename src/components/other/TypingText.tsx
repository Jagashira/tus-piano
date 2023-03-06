import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

interface TypingTextProps {
  title: any;
  textStyles: string;
}
interface TitleTextProps {
  title: React.ReactNode;
  textStyles?: any;
}

export const TypingText = ({ title, textStyles }: TypingTextProps) => {
  return (
    <motion.p
      variants={textContainer}
      className={`${textStyles} font-normal text-[14px] text-white`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {/* @ts-ignore */}
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
export const TitleText = ({ title, textStyles }: TitleTextProps) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
};
