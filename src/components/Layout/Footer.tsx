import React from "react";
import Link from "next/link";
import LOGO from "public/svg/circleLogo.svg";
import styles from "@/styles/Layout/Footer.module.css";

const Footer = () => {
  const date = new Date();
  return (
    <footer className={styles.wrapper}>
      <div className={styles.logo}>
        <LOGO />
        <p>
          東京理科大学 ピアノの会
          <br />
          <div
            className={styles.copyright}
          >{`Copyright © ${date.getFullYear()} - All right reserved`}</div>
        </p>
      </div>
      <hr className={styles.hr} />
      <div className={styles.navigation}>
        <span className={styles.footerTitle}>Navigation</span>
        <Link href="/activity">Activity</Link>
        <Link href="/news">News</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/sponsor">Sponsor</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <hr className={styles.hr} />

      <div className={styles.navigation}>
        <span className={styles.footerTitle}>
          SNS<span className={styles.ignore}>agation</span>
        </span>
        <Link href="/">TikTok</Link>
        <Link href="/">YouTube</Link>
        <Link href="/">Twitter</Link>
        <Link href="/">Instagram</Link>
      </div>
      <hr className={styles.hr} />

      <div className={styles.navigation}>
        <span className={styles.footerTitle}>
          OTHER<span className={styles.ignore}>ition</span>
        </span>
        <Link href="/">Producer</Link>
      </div>
      <span
        className={styles.copyrightLast}
      >{`Copyright © ${date.getFullYear()} - All right reserved`}</span>
    </footer>
  );
};

export default Footer;
