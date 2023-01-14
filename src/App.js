import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <span className="final-link">
        <a
          href="https://github.com/EllenB251/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span> </span>
        by Ellen Brookes
      </span>
    </div>
  );
}

export default App;
