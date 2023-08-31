import React from "react";
import WordLogo from "public/svg/wordLogo.svg";
import CircleLogo from "public/svg/circleLogo.svg";
import { Icon } from "@iconify/react";
import Link from "next/link";
import LINE from "public/svg/LINEIcon.svg";
import styles from "../styles/Header.module.css";
const Header = () => {
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
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <div className={styles.wordlogo}>
          <div>
            <Link href="/">
              <WordLogo />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.snsContainer}>
        <div className={styles.snsItemContainer}>
          {SNSItems.map((SNSItem, index) => {
            return (
              <div className={styles.icon} key={index}>
                <Link href={SNSItem.url}>
                  {/* @ts-ignore */}
                  <Icon icon={SNSItem.icon} className={styles.iconSize} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-between",
    //     width: "100vw",
    //     position: "absolute",
    //     top: "50%",
    //     transform: "translateY(-50%)",
    //   }}
    // >
    //   <div style={{ display: "flex" }}>
    //     <CircleLogo />
    //     <WordLogo />
    //   </div>

    // </div>
  );
};

export default Header;
