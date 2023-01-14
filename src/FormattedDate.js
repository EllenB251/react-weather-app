import React from "react";

export default function FormattedDate(props) {
  let dayIndex = props.date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[dayIndex];
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let currentYear = props.date.getFullYear();
  let currentMonth = months[props.date.getMonth()];
  let currentDate = props.date.getDate();

  return `${day} ${currentDate}/${currentMonth}/${currentYear}`;
}
