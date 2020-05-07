import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Schedule() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(date.getTime());
  // console.log(typeof date);
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <h1>Schedule</h1>
      <Calendar onChange={onChange} value={date} />
      {/* {date.toString()} */}
      <p>Month: {date.getMonth() + 1}</p>
      <p>Date: {date.getDate()}</p>
      <p>Start Time: {time.toString()}</p>
    </div>
  );
}

export default Schedule;
