import React from "react";
import styles from "../styles/Footer.module.css";
import { Icon } from "@iconify/react";
const Footer = () => {
  const date = new Date();
  const footerNav = ["home", "blog", "contact", "お知らせ", "部員限定ページ"];
  return (
    <div className={styles.container}>
      <div className={styles.footerNav}>
        <ul className={styles.list}>
          {footerNav.map((nav, index) => {
            return (
              <li key={index}>
                <a href="">{nav}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.snsIcons}>
        <div className={styles.icon}>
          <Icon icon="ic:outline-tiktok" className={styles.iconSize} />
          <p className={styles.iconName}>tiktok</p>
        </div>

        <div className={styles.icon}>
          <Icon icon="ci:youtube" className={styles.iconSize} />
          <p className={styles.iconName}>YouTube</p>
        </div>
        <div className={styles.icon}>
          <Icon icon="mdi:twitter" className={styles.iconSize} />
          <p className={styles.iconName}>Twitter</p>
        </div>
        <div className={styles.icon}>
          <Icon icon="mdi:instagram" className={styles.iconSize} />
          <p className={styles.iconName}>Instagram</p>
        </div>
      </div>
      <div className={styles.name}>
        <h1>東京理科大学　ピアノの会</h1>
      </div>
      <div
        className={styles.copyright}
      >{`Copyright © ${date.getFullYear()} - All right reserved`}</div>
    </div>
  );
};

export default Footer;
