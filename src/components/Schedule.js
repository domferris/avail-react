import React, { useState } from "react";
// DATEPICKER
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// TIMEPICKER
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Schedule() {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const onDateChange = (date) => {
    setDate(date);
    console.log(date);
  };

  return (
    <div>
      <h1>Schedule</h1>
      <Calendar onChange={onDateChange} value={date} />
      <p>Month: {date.getMonth() + 1}</p>
      <p>Date: {date.getDate()}</p>
      <p>Start Time: {startTime.toTimeString()}</p>
      <DatePicker
        selected={startTime}
        onChange={(startTime) => setStartTime(startTime)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      <p>End Time: {endTime.toTimeString()}</p>
      <DatePicker
        selected={endTime}
        onChange={(endTime) => setEndTime(endTime)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    </div>
  );
}

export default Schedule;
