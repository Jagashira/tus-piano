import CalendarHeader from "@/components/Calendar/CalendarHeader";
import Month from "@/components/Calendar/Month";
import { getMonth } from "@/modules/lib/dayUtil";
import React, { useContext, useEffect, useState } from "react";
import { MonthKey } from "@/modules/recoil/calendarMonth";
import { useRecoilValue } from "recoil";

export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth);
  const monthIndex = useRecoilValue(MonthKey);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <div style={{ backgroundColor: "white", width: "80vw" }}>
      <React.Fragment>
        <div className="h-[80vh] flex flex-col">
          <CalendarHeader />
          <div className="flex flex-1">
            <Month month={currentMonth} />
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};
