import  { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calender = () => {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title"
    },
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some Easy"
    },
  ]);

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default Calender;