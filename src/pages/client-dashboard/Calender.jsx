
import  { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import
{ Modal }
from
"antd"
;
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

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  const allEvents = [...regularTasks, ...futureTasks];

  return (
    <div className="p-8 font-poppins">

      <div className="pb-4" onClick={showModal}>
        <button className="px-8 py-3 rounded-lg bg-primary text-white font-poppins font-medium ">Add Task</button>
      </div>

      <Modal
        title="Add your task"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: false }}
        cancelButtonProps={{ disabled: false }}
      >
        <div className="flex flex-col gap-2 font-poppins">
          <input type="date" name="" id="" />

          <div className="pt-4 w-full">
            <textarea className="w-full h-32 rounded-lg border px-4 py-2" name="" id=""></textarea>
          </div>
        </div>
      </Modal>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={allEvents}
        style={{ height: "70vh" }}
      />
    </div>
  );
};

export default Calender;

