import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import listPlugin from "@fullcalendar/list";
import styled from "styled-components";
const CalendarComponent = () => {
  const CalendarStyled = styled.div`
    background-color: white;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 65vw;
    padding: 3vh;
    margin: auto;
    overflow: hidden;
  `;
  return (
    <CalendarStyled>
      <div>
        <FullCalendar
          plugins={[
            timeGridPlugin,
            googleCalendarPlugin,
            dayGridPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          googleCalendarApiKey="AIzaSyDYjgMkDJlR0dFXJ5pWw6p2l56j5TrOyFE"
          eventSources={[
            {
              googleCalendarId:
                "873ed3ec6ebd0884b08819ed82d23e25ff9951d8d2c48090031e53e9891313c3@group.calendar.google.com",
            },
          ]}
        />
      </div>
    </CalendarStyled>
  );
};

export default CalendarComponent;
