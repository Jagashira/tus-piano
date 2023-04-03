import { BigTitle, BigTitleActivity } from "@/modules/lib/textStyle";
import Feedback from "@/components/sections/Feedback";
import Activities from "@/components/sections/Activities";
import Insights from "@/components/sections/Insights";
import ActivityTime from "@/components/sections/ActivityTime";
import CalendaComponentr from "@/components/sections/CalendarContainer";
import React from "react";
import styles from "../styles/Activity.module.css";
import CalendarContainer from "@/components/sections/CalendarContainer";
import styled from "styled-components";

const Activity = () => {
  return (
    <>
      <Activities />

      <Insights />

      {/* <ActivityTime /> */}

      {/* 
        <CalendarContainer /  >
       */}

      {/* <Feedback /> */}
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
