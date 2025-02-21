import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { Alert, Modal } from "antd";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DatePicker } from "antd";

const localizer = momentLocalizer(moment);

const Calender = () => {
  const [message, setMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [error, setError] = useState("");



  const [futureTasks, setFutureTasks] = useState([
    {
      start: moment().add(3, "days").toDate(),
      end: moment().add(4, "days").toDate(),
      title: "Update Vairclound on Project Status",
      description: "A hands-on session on UI/UX principles.",
    },
    {
      start: moment().add(7, "days").toDate(),
      end: moment().add(8, "days").toDate(),
      title: "Prepare Presentation for Client Meeting",
      description: "A hands-on session on UI/UX principles.",
    },
  ]);

  const addFutureTask = (date, message) => {
    const newTask = {
      start: moment(date).toDate(),
      end: moment(date).add(1, "days").toDate(), // Task lasts one day
      title: message,
      description: "Scheduled Task",
    };
    setFutureTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    if (!selectedDate || !message) {
      setError("Please select a future date and enter a task message.");
      return;
    }

    addFutureTask(selectedDate, message)

    console.log(selectedDate , message);
    setSelectedDate(null);
    setMessage("");
    setError("");
    setOpen(false);
  };

  const handleCancel = (e) => {
    console.log("event", e);
    setOpen(false);
  };

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
    setError("");
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setError("");
  };

  const allEvents = [...futureTasks];

  return (
    <div className="p-8 font-poppins">

      
      <div className="pb-4 w-fit" onClick={showModal}>
        <button className="px-8 py-3  rounded-lg bg-primary text-white font-poppins font-medium ">
          Add Task
        </button>
      </div>
     
      <Modal
        title="Add your task"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: false }}
        cancelButtonProps={{ disabled: false }}
      >
        <div className="flex flex-col gap-2 py-4">
        {error && <Alert message={error} type="error" showIcon className="mb-2" />}
          <DatePicker
            className="w-fit font-poppins"
            onChange={handleDateChange}
            needConfirm
            value={selectedDate ? moment(selectedDate) : null}
          />
          <div className="pt-4 w-full">
            <textarea
              onChange={handleMessageChange}
              value={message}
              placeholder="Enter your task message..."
              className="w-full h-32 rounded-lg border px-4 py-2"
            ></textarea>
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
