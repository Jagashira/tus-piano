import React from "react";
import styles from "../styles/Activity.module.css";

const Activity = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.name}>
          <h1>東京理科大学　ピアノの会へようこそ</h1>
        </div>
        <div className={styles.introBack}>
          <div className={styles.introDesc}>
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
        </div>
      </div>
    </>
  );
};

export default Activity;

/*
home
お知らせ
ブログ
カレンダー
SNS
新入生へ（blog）

activity
　　　　 部活紹介、活動目標
　　　       活動内容(　＝＾＞　活動報告別のページでもいいかも)
　　　　　一年間の流れ＾
　　　　　　　ルール
　　　　活動日　　アクセス
 

blog

news



blogに新入生のアクセスガイドを作成

https://rikadaisofttennis.jimdofree.com/
https://tushandball2012.wixsite.com/2020    

https://dev.classmethod.jp/articles/launching-a-map-app-using-react-google-maps-api-locally/


nav home activity news blog sponsour ログイン
*/
