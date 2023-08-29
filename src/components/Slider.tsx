import Image from "next/image";
import React from "react";
import styles from "@/styles/slider.module.css";

const Slider = () => {
  return (
    <div>
      <div className={styles.slider}>
        <div className={styles.list}>
          <div className={styles.item}>
            <Image
              src="/img/slider/1.jpg"
              objectFit="cover"
              layout="fill"
              alt="1"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/img/slider/2.jpg"
              objectFit="cover"
              layout="fill"
              alt="2"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/img/slider/3.jpg"
              objectFit="cover"
              layout="fill"
              alt="1"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/img/slider/4.jpg"
              objectFit="cover"
              layout="fill"
              alt="1"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/img/slider/5.jpg"
              objectFit="cover"
              layout="fill"
              alt="1"
            />
          </div>
          <div className={styles.item}>
            <Image
              src="/img/slider/6.jpg"
              objectFit="cover"
              layout="fill"
              alt="1"
            />
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
      <ul className="dots">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Slider;
