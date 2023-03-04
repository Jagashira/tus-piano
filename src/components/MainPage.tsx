import React from "react";
import styles from "../styles/MainPage.module.css";
import LeftContent from "./LeftContent";
import News from "./News";
import RIghtContent from "./RIghtContent";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>東京理科大学　ピアノの会</h1>
      </div>
      <div>
        <News />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.left}>
          <LeftContent />
        </div>
        <div className={styles.right}>
          <RIghtContent />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
