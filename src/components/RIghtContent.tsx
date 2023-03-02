import Image from "next/image";
import React from "react";
import styles from "../styles/RightContent.module.css";
import { Icon } from "@iconify/react";

const RIghtContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calendar}>calender </div>
      <div className={styles.imgContainer}>
        <Image src="/img/signup1.jpg" alt="sign-up" layout="fill" />
        <div className={styles.imgTag}>
          <Icon
            icon="twemoji:white-flower"
            style={{ margin: "auto", fontSize: 50 }}
          />
          <p style={{ fontSize: 20 }}>新入生へ</p>
        </div>
      </div>
      <div className={styles.inquiry}>
        <Image src="/img/inquiry.jpg" alt="inquiry" layout="fill" />
        <div className={styles.imgTag}>
          <Icon
            icon="ic:outline-email"
            style={{ margin: "auto", fontSize: 50 }}
          />
          <p style={{ fontSize: 20 }}>お問い合わせ</p>
        </div>
      </div>
    </div>
  );
};

export default RIghtContent;
