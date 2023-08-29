import React from "react";
import styles from "../styles/Footer.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import LINE from "public/svg/LINEIcon.svg";

const Footer1 = () => {
  const date = new Date();
  const footerNav = ["home", "blog", "contact", "お知らせ", "部員限定ページ"];
  const SNSItems = [
    {
      name: "TikTok",
      icon: "ic:outline-tiktok",
      url: "https://www.tiktok.com/",
    },
    { name: "YouTube", icon: "ci:youtube", url: "https://www.youtube.com/" },
    {
      name: "Twitter",
      icon: "mdi:twitter",
      url: "https://twitter.com/TUS_Piakai",
    },
    {
      name: "TikTok",
      icon: "mdi:instagram",
      url: "https://www.instagram.com/tus_piakai/",
    },
    { name: "LINE", icon: LINE, url: "" },
  ];
  return (
    <div className={styles.container}>
      {/* <div className={styles.footerNav}>
        <ul className={styles.list}>
          {footerNav.map((nav, index) => {
            return (
              <li key={index}>
                <a href="">{nav}</Link>
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className={styles.snsIcons}>
        {SNSItems.map((SNSItem, index) => {
          return (
            <div className={styles.icon} key={index}>
              <Link href={SNSItem.url}>
                {SNSItem.name === "LINE" ? (
                  <LINE />
                ) : (
                  //@ts-ignore
                  <Icon icon={SNSItem.icon} className={styles.iconSize} />
                )}
                <p className={styles.iconName}>{SNSItem.name}</p>
              </Link>
            </div>
          );
        })}
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

import LOGO from "public/svg/circleLogo.svg";
const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer p-8 bg-base-200 text-base-content w-[100vw] justify-center gap-40 border-t">
      <div>
        <LOGO />
        <p>
          東京理科大学 ピアノの会
          <br />
          {`Copyright © ${date.getFullYear()} - All right reserved`}
        </p>
      </div>
      <div>
        <span className="footer-title">Navigation</span>
        <Link href="/activity">Activity</Link>
        <Link href="/news">News</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/sponsor">Sponsor</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <span className="footer-title">SNS</span>
        <Link href="/">TikTok</Link>
        <Link href="/">YouTube</Link>
        <Link href="/">Twitter</Link>
        <Link href="/">Instagram</Link>
      </div>
      <div>
        <span className="footer-title">OTHER</span>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Producer</Link>
      </div>
    </footer>
  );
};

export default Footer;
