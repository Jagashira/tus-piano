import React from "react";
import Image from "next/image";
import styles from "@/styles/Contact.module.css";
import { Icon } from "@iconify/react";
import ContactHeroInfo from "./Contact/ContactHeroInfo";

const ContactHero = () => {
  const info = [
    {
      id: 1,
      icon: "mdi:gmail",
      title: "Gmail",
      content: "example@gmail.com",
    },
    {
      id: 2,
      icon: "mdi:phone",
      title: "Phone number",
      content: "080-0000-0000",
    },
    {
      id: 3,
      icon: "mdi:map-marker",
      title: "Address",
      content: "〒278-8510",
    },
  ];
  return (
    <>
      <div className={styles.contactHero}>
        <Image
          src="/img/contact/contact.png"
          width={300}
          height={300}
          alt="contact"
          className={styles.contactImg}
        />
        <div className={styles.heroDetail}>
          {info.map((item) => {
            return <ContactHeroInfo key={item.id} info={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ContactHero;
