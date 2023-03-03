import React from "react";
import styles from "@/styles/InitPage.module.css";

const InitPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.droplet}></div>
        <div className={styles.ripple}></div>
      </div>
    </>
  );
};

export default InitPage;
