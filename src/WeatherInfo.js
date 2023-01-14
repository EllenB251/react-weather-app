import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="paralellogram">
      <div className="today">
        <h1>{props.data.city}</h1>
        <div className="row">
          <h3 className="col-3">
            <FormattedDate date={props.data.date} />
            <div />
            <br />
            <FormattedTime time={props.data.time} />
          </h3>
          <h3 className="col-3">
            <strong>
              <span className="digits"></span>
              <span className="units"></span>
            </strong>
            <span className="units">
              <strong>
                <WeatherTemperature celcius={props.data.temperature} />
              </strong>
              °C{" "}
            </span>
          </h3>
          <WeatherIcon img={props.data.icon} />
          <h4 className="col-2 description">{props.data.description}</h4>
          <h3 className="col-3"></h3>
          <h4 className="col-2 humidity">
            Humidity: <span></span>
            {props.data.humidity}%
          </h4>
          <h4 className="col-1 wind">
            Wind: <span></span>
            {props.data.wind}km/h
          </h4>
        </div>
      </div>
      <div className="five-days">
        <h2>Five Day Forecast</h2>
      </div>
    </div>
  );
}
