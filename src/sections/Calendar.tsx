import CalendarHeader from "@/components/Calendar/CalendarHeader";
import Month from "@/components/Calendar/Month";
import { getMonth } from "@/modules/lib/dayUtil";
import React, { useContext, useEffect, useState } from "react";
import { MonthKey } from "@/modules/recoil/calendarMonth";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const CalendarStyled = styled.div`
  background-color: white;
  width: 80vw;
  border-radius: 40px;
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
      <div className="h-[80vh] flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currentMonth} />
        </div>
      </div>
    </CalendarStyled>
  );
};
