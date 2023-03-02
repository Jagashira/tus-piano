import React from "react";
import styles from "../styles/LeftContent.module.css";

const LeftContent = () => {
  const newsObjects = [
    { at: "2023/3/2", title: "本日からピア会のホームページを開設しました。" },
    { at: "2023/3/2", title: "本日からピア会のホームページを開設しました。" },
    { at: "2023/3/2", title: "本日からピア会のホームページを開設しました。" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <h1>東京理科大学　ピアノの会へようこそ</h1>
      </div>
      <div className={styles.introduction}>
        新入生の皆さん、ご入学おめでとうございます。今年も新歓の時期がやってきました！
        新歓の日程が決まりましたのでお伝えします。
        ４/８（土）　　課外活動ガイダンス　：コミュニケーション棟
        ４/１３（木）　新歓ご飯会　：コミュニケーション棟　１８：３０～　
        ４/２１（金）　新歓飲み会　：SHANTY　柏　　（１８：３０講義棟一階に集合です）
        ４/１１（火）＆４/１９（水）　新歓コンサート　：コミュニケーション棟　防音室　１８：３０～
        です！
        ピアノの会はピアノ経験者はもちろん、ピアノ初心者、他の楽器を演奏する人もたくさん所属しています。
        気になったことがある方や、わからないことがある方はお気軽にご質問ください♪
        東京理科大　ピアノの会Twitter　：@TUS_Piakai
        東京理科大　ピアノの会ホームページ　 http://www.ed.tus.ac.jp/~piano/
      </div>
      <div>
        <div className={styles.newsHeadline}>
          <h1>お知らせ</h1>
        </div>
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
      <div className={styles.activityDetail}></div>
    </div>
  );
};

export default LeftContent;
