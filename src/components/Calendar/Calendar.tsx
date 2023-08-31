import CalendarHeader from "@/components/Calendar/CalendarHeader";
import Month from "@/components/Calendar/Month";
import { getMonth } from "@/modules/lib/dayUtil";
import React, { useContext, useEffect, useState } from "react";
import { MonthKey } from "@/modules/recoil/calendarMonth";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const CalendarStyled = styled.div`
  background-color: white;
  border-radius: 40px;
  margin: 20px 10vw;
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow: hidden;
`;

export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth);
  const monthIndex = useRecoilValue(MonthKey);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <CalendarStyled>
      <CalendarHeader />
      <div className="flex flex-1 ">
        <Month month={currentMonth} />
      </div>
    </CalendarStyled>
  );
};
