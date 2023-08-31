import styles from "@/styles";
import React from "react";
interface Props {
  number: number;
  text: string;
}

const ActivityContent = ({ number, text }: Props) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
      >
        <p className="font-bold text-[20px] text-white">{number}</p>
      </div>
      <p className="flex-1 ml-[30px] font-semibold text-[18px] text-black leading-[32px]">
        {text}
      </p>
    </div>
  );
};

export default ActivityContent;
