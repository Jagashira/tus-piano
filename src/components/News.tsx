import React from "react";
import styles from "../styles/News.module.css";

const News = () => {
  const newsObjects = [
    { at: "2023/3/2", title: "本日からピア会のホームページを開設しました。" },
    {
      at: "2023/3/2",
      title:
        "本日からピア会のホームページを開設しました。本日からピア会のホームページを開設しました。本日からピア会のホームページを開設しました。本日からピア会のホームページを開設しました。",
    },
    {
      at: "2023/3/2",
      title:
        "本日からピア会のホームページを開設しました。本日からピア会のホームページを開設しました。本日からピア会のホームページを開設しました。本日からピア会のホームページを開設しました。",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.newsHeadline}>お知らせ</h1>

      <div className={styles.newsList}>
        {newsObjects.map((news, index) => {
          return (
            <div key={index} className={styles.news}>
              <div className={styles.newsAt}>{news.at}</div>
              <div className={styles.newsTitle}>{news.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
