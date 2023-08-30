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
    <div className="navbar bg-base-100 w-[100vw] border-b relative">
      <div className="bg-base-100 absolute top-[-50vh] width-[100vw] height-[50vh] z-10" />
      <div className="navbar-start">
        <div style={{ padding: "0px 20px" }}>
          <Link href="/">
            <WordLogo />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <div
          style={{ display: "flex", flexDirection: "row", marginRight: "20px" }}
        >
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
