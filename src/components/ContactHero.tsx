import React from "react";
import Image from "next/image";
import styles from "@/styles/Contact.module.css";

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
      </div>
    </>
  );
};

export default ContactHero;
