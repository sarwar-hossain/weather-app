import React from "react";
//import './Weather.css'

function History({ history }) {
  return (
    <>

      <div className="weather-app">

        <div className="history-container">
          <h1>Past History</h1>
          {history.slice().reverse().map((h, i) => (
            h && h.main && (
              <div className="history-card" key={i}>
                <h3>
                  <i className="fa fa-map-marker-alt"></i> {h.name}, {h.sys.country}
                </h3>
                <p>
                  <i className="fa fa-thermometer-half"></i> Temperature: {h.main.temp}°C
                </p>
                <p>
                  <i className="fa fa-temperature-low"></i> Feels Like: {h.main.feels_like}°C
                </p>
                <p>
                  <i className="fa fa-temperature-high"></i> Max Temp: {h.main.temp_max}°C
                </p>
                <p>
                  <i className="fa fa-temperature-low"></i> Min Temp: {h.main.temp_min}°C
                </p>
                <p>
                  <i className="fa fa-cloud"></i> Condition: {h.weather[0].description}
                </p>
                <p>
                  <i className="fa fa-tint"></i> Humidity: {h.main.humidity}%
                </p>
                <p>
                  <i className="fa fa-wind"></i> Wind Speed: {h.wind.speed} m/s
                </p>
                <p>
                  <i className="fa fa-compass"></i> Wind Direction: {h.wind.deg}°
                </p>
                <p>
                  <i className="fa fa-compress-alt"></i> Pressure: {h.main.pressure} hPa
                </p>
                <p>
                  <i className="fa fa-cloud"></i> Cloudiness: {h.clouds.all}%
                </p>
                <p>
                  <i className="fa fa-eye"></i> Visibility: {h.visibility / 1000} km
                </p>
                <p>
                  <i className="fa fa-sun"></i> Sunrise:{" "}
                  {new Date(h.sys.sunrise * 1000).toLocaleTimeString()}
                </p>
                <p>
                  <i className="fa fa-moon"></i> Sunset:{" "}
                  {new Date(h.sys.sunset * 1000).toLocaleTimeString()}
                </p>
                <p>
                  <i className="fa fa-calendar-day"></i> Date:{" "}
                  {new Date(h.dt * 1000).toLocaleDateString()}
                </p>
              </div>
            )
          ))}
        </div>

      </div>


    </>
  )
}

export default History;