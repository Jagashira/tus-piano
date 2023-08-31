import NewMember from "@/components/Activity/NewMember";
import Activities from "@/components/Activity/Activities";
import ActivityDetail from "@/components/Activity/ActivityDetail";
import React from "react";
import { motion } from "framer-motion";
import { BigTitleActivity } from "@/modules/lib/textStyle";
import { staggerContainer, textVariant } from "@/utils/motion";
import styles from "@/styles/Activity/Activity.module.css";
const Activity = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.headerContainer}
      >
        <motion.h1 variants={textVariant(1.1)}>
          <BigTitleActivity>Activity</BigTitleActivity>
          今後の部活動の予定やイベントの情報、部活動の紹介など、
          <br />
          部員たちの活動に関する最新情報を掲載していきます。
        </motion.h1>
      </motion.div>
      <Activities />
      <ActivityDetail />
      <NewMember />
    </div>
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
