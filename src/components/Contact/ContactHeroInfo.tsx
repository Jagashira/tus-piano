import React from "react";
import styles from "@/styles/Contact/Contact.module.css";
import { Icon } from "@iconify/react";

interface Props {
  info: {
    id: number;
    icon: string;
    title: string;
    content: string;
  };
}
const ContactHeroInfo = ({ info }: Props) => {
  return (
    <div className={styles.gmailContainer}>
      <div className={styles.gmail}>
        <Icon icon={info.icon} />
        <p>{info.title}</p>
      </div>
      <p>{info.content}</p>
    </div>
  );
};

export default ContactHeroInfo;
