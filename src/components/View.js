import React from "react";
import LastHistory from "./LastHistory";


const Weather = ({ history, weather, loading, error }) => {
    return (
        <>



            <div className="weather-info">

                {loading && <p className="loading">
                    <img style={{ width: '100px' }} src="https://media.tenor.com/G7LfW0O5qb8AAAAi/loading-gif.gif" />
                </p>}
                {error && <p className="error">{error}</p>}


                {weather && weather.sys && weather.sys.country && (
                    <div>

                        <h2>
                            <i className="fa fa-map-marker-alt"></i> {weather.name}, {weather.sys.country}
                        </h2>
                        <div className="weather-icon">
                            <img
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                            />
                            <p>{weather.weather[0].description}</p>
                        </div>
                        <ul>
                            <li>
                                <i className="fa fa-thermometer-half"></i> Temperature: {weather.main.temp}°C
                            </li>
                            <li>
                                <i className="fa fa-temperature-low"></i> Feels Like: {weather.main.feels_like}°C
                            </li>
                            <li>
                                <i className="fa fa-tint"></i> Humidity: {weather.main.humidity}%
                            </li>
                            <li>
                                <i className="fa fa-wind"></i> Wind Speed: {weather.wind.speed} m/s
                            </li>
                            <li>
                                <i className="fa fa-cloud"></i> Cloudiness: {weather.clouds.all}%
                            </li>
                            <li>
                                <i className="fa fa-eye"></i> Visibility: {weather.visibility / 1000} km
                            </li>
                            <li>
                                <i className="fa fa-compress-alt"></i> Pressure: {weather.main.pressure} hPa
                            </li>
                            <li>
                                <i className="fa fa-sun"></i> Sunrise:{" "}
                                {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                            </li>
                            <li>
                                <i className="fa fa-moon"></i> Sunset:{" "}
                                {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                            </li>
                            <li>
                                <i className="fa fa-calendar-day"></i> Date:{" "}
                                {new Date(weather.dt * 1000).toLocaleDateString()}
                            </li>
                            <li>
                                <i className="fa fa-temperature-high"></i> Max Temp: {weather.main.temp_max}°C
                            </li>
                            <li>
                                <i className="fa fa-temperature-low"></i> Min Temp: {weather.main.temp_min}°C
                            </li>
                            <li>
                                <i className="fa fa-compass"></i> Wind Direction: {weather.wind.deg}°
                            </li>
                            <li>
                                <i className="fa fa-fire"></i> UV Index (Placeholder): Coming Soon!
                            </li>
                        </ul>
                    </div>
                )}
            </div>



            <LastHistory history={history} />


        </>
    );
};

export default Weather;
