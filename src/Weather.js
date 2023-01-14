import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.coordinates,
      temperature: response.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.time * 1000),
      description: response.condition.description,
      icon: response.icon_url.icon,
      wind: response.temperature.wind,
      city: response.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "43478b01t7d462eof280ed97a9c133a7";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query={city}&key={apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="search-engine">
            <label for="exampleSearch">Select Location </label>
            <span> </span>
            <input
              type="search"
              className="search-engine"
              aria-describedby="searchHelp"
              placeholder="Search Here"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <span> </span>
            <button type="submit" label="submit">
              Submit
            </button>
            <button type="button" className="btn btn-link">
              Current Location
            </button>
          </div>
        </form>
        <br />
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
