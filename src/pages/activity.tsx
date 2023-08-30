import Feedback from "@/components/sections/Feedback";
import Activities from "@/components/sections/Activities";
import Insights from "@/components/sections/Insights";
import React from "react";
import { motion } from "framer-motion";
import { BigTitle } from "@/modules/lib/textStyle";
import { staggerContainer, textVariant } from "@/utils/motion";
const Activity = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative"
      >
        <motion.h1
          variants={textVariant(1.1)}
          style={{
            textAlign: "center",
            color: "black",
            zIndex: 10,

            margin: "0 20px 0 20px",
          }}
        >
          <BigTitle>Activity</BigTitle>
          今後の部活動の予定やイベントの情報、部活動の紹介など、
          <br />
          部員たちの活動に関する最新情報を掲載していきます。
        </motion.h1>
      </motion.div>
      <Activities />
      <Insights />
      <Feedback />
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
