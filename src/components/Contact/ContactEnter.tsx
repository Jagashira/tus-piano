import React from "react";
import styles from "@/styles/Contact/Contact.module.css";
import Link from "next/link";

const ContactEnter = () => {
  
  return (
    <>
     
        <div 
        className={styles.newMemberContainer}
            
          >
            <div>
              <h4 className={styles.newMemberTitle}>
                入部を考えている方へ
              </h4>
            </div>
            <p className={styles.newMemberDescription}>
              東京理科大学ピアノの会に入部を考えている方は
              <Link
                href="/blog/id/hd-_07l4gq"
                style={{ borderBottom: "2px solid #000" }}
              >
                こちら（入部手続きの手順）
              </Link>
              にて説明しています。
            </p>
       
      </div>
    </>
  );
};

export default ContactEnter;
