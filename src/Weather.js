import React from "react";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  let weatherData = {
    city: "Perth",
    temp: "23",
    date: "Wednesday 21/12/2022",
    humidity: "50",
    wind: "10",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };
  return (
    <div className="Weather">
      <form id="search-form">
        <div className="search-engine">
          <label for="exampleSearch">Select Location </label>
          <input
            type="search"
            className="search-engine"
            aria-describedby="searchHelp"
            placeholder="Search Here"
          />
          <button type="submit" label="submit">
            Submit
          </button>
          <button type="button" className="btn btn-link">
            Current Location
          </button>
        </div>
      </form>
      <br />
      <div className="paralellogram">
        <div className="today">
          <h1>{weatherData.city}</h1>
          <div className="row">
            <h3 className="col-5">{weatherData.date}</h3>
            <h3 className="col">
              <strong>
                <span className="digits"></span>
                <span className="units"></span>
              </strong>
              <span className="units">{weatherData.temp}°C </span>
            </h3>
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <span>
              <h4> </h4>
            </span>
            <h3 className="col"> </h3>
            <h4 className="col">
              Humidity: <span></span>
              {weatherData.humidity}%
            </h4>
            <h4 className="col">
              Wind: <span></span>
              {weatherData.wind}km/h
            </h4>
          </div>
        </div>
      </div>
      <br />
      <div className="five-days">
        <h2>Five Day Forecast</h2>
      </div>
      <br />
      <div></div>
      <span className="final-link">
        <a href="/" target="_blank">
          Open-source code
        </a>
        <span> </span>
        by Ellen Brookes
      </span>
      <br />
    </div>
  );
}
