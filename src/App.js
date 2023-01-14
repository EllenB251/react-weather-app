import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Perth" />
      </div>
      <footer className="final-link">
        <a
          href="https://github.com/EllenB251/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span> </span>
        by Ellen Brookes and is hosted on
        <span> </span>
        <a
          href="https://app.netlify.com/sites/unique-stardust-f0f4b9/overview"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
