import React from "react";
import styles from "../styles/Footer.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import LINE from "public/img/LINEIcon.svg";
const Footer = () => {
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
                <a href="">{nav}</a>
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

export default Footer;
