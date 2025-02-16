
import  { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calender = () => {
  const [regularTasks, setRegularTasks] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      title: "Daily Standup Meeting",
    },
    {
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      title: "Code Review Session",
    },
  ]);

  const [futureTasks, setFutureTasks] = useState([
    {
      start: moment().add(3, "days").toDate(),
      end: moment().add(4, "days").toDate(),
      title: "Update Vairclound on Project Status",
      description: "A hands-on session on UI/UX principles."
    },
    {
      start: moment().add(7, "days").toDate(),
      end: moment().add(8, "days").toDate(),
      title: "Prepare Presentation for Client Meeting",
      description: "A hands-on session on UI/UX principles."

    },
  ]);

  const allEvents = [...regularTasks, ...futureTasks];

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={allEvents}
        style={{ height: "80vh" }}
      />
    </div>
  );
};

export default Calender;

