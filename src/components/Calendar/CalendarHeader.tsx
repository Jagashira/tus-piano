import Image from "next/image";
import React, { useContext } from "react";
import GoogleCalendarLogo from "public/img/googleCalendar.svg";
import { Icon } from "@iconify/react";
import { useRecoilState } from "recoil";
import { MonthKey } from "@/modules/recoil/calendarMonth";
import dayjs from "dayjs";
import styled from "styled-components";

const CalendarHeader = () => {
  const [monthIndex, setMonthIndex] = useRecoilState(MonthKey);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleTodayMonth = () => {
    setMonthIndex(dayjs().month());
  };

  return (
    <header className="px-4 py-2 items-center">
      {/* <GoogleCalendarLogo /> */}
      <div className="flex justify-between">
        {/* <h1 className="mr-10 my-auto text-xl text-gray-500 font-bold">
          Calendar
        </h1> */}
        <button
          className="bordre rounded py-2 px-2 mr-5 md:text-2xl"
          onClick={handleTodayMonth}
        >
          Today
        </button>
        <div className="my-auto md:text-2xl">
          <button
            className="cursor-pointer text-gray-600 mx-2"
            onClick={handlePrevMonth}
          >
            <Icon icon="material-symbols:arrow-back-ios-rounded" />
          </button>
          <button
            className="cursor-pointer text-gray-600 mx-2"
            onClick={handleNextMonth}
          >
            <Icon icon="material-symbols:arrow-forward-ios-rounded" />
          </button>
        </div>
      </div>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalendarHeader;
