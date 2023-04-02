import { BigTitle, BigTitleActivity } from "@/modules/lib/textStyle";
import Feedback from "@/sections/Feedback";
import Activities from "@/sections/Activities";
import Insights from "@/sections/Insights";
import ActivityTime from "@/sections/ActivityTime";
import CalendaComponentr from "@/sections/Calendar";
import React from "react";
import styles from "../styles/Activity.module.css";
import CalendarComponent from "@/sections/Calendar";

const Activity = () => {
  return (
    <>
      <div style={{ position: "fixed" }}>
        <BigTitleActivity>Activity</BigTitleActivity>
      </div>
      <div className="relative">
        <Activities />
        <Insights />
        {/* <div className="gradient-04 z-0" /> */}
        <ActivityTime />
      </div>
      <CalendarComponent />
      <div className="relative">
        {/* <div className="gradient-04 z-0" /> */}
        <Feedback />
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
