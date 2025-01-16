import React, { useEffect, useState } from "react";
import axios from "axios";
//import "./Weather.css";
import View from './View';
import SearchBar from "./SearchBar";


const Weather = ({ history, setHistory, weather, setWeather }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "9cb9c1e759bc6215854b90015119e832";

  const fetchWeather = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setWeather("");

    if (city.trim()) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=metric&appid=${API_KEY}`
        );
        setWeather(response.data);
        setHistory([...history, response.data]);
        setLoading(false);
        setCity("");
      } catch (err) {
        console.error(err.response);
        setError("City not found. Please try again.");
        setLoading(false);
      }
    } else {
      setError("Please enter a city name.");
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <>

      <div className="weather-app">

        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />

        <View history={history} weather={weather} loading={loading} error={error} />

      </div>

    </>
  );
};

export default Weather;
