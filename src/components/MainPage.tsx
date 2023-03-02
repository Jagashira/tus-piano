import React from "react";
import styles from "../styles/MainPage.module.css";
import LeftContent from "./LeftContent";
import RIghtContent from "./RIghtContent";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <LeftContent />
      </div>
      <div className={styles.right}>
        <RIghtContent />
      </div>
    </div>
  );
};

export default MainPage;
