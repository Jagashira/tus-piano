import React from "react";
import Image from "next/image";
import styles from "@/styles/Contact.module.css";
import { Icon } from "@iconify/react";

const ContactHero = () => {
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
          <div className={styles.gmail}>
            <Icon icon="mdi:gmail" />
            <p>Gmail</p>
          </div>
          <p>example@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
