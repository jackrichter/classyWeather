import React from "react";
import { getWeatherIcon } from "./App";

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short"
  }).format(new Date(dateStr));
}

export default class Day extends React.Component {
  render() {
    const { date, max, min, code, isToday } = this.props;
    return (
      <li className="day">
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? "Today" : formatDay(date)}</p>
        <p>
          {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
        </p>
      </li>
    );
  }
}
