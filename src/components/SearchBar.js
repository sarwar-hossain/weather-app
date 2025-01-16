import React from "react";

function SearchBar({ city, setCity, fetchWeather }) {
    return (
        <>

            <div style={{ display: 'flex', marginTop: '-20px' }}>
                <img style={{ width: '80px', height: '80px' }} src="https://th.bing.com/th/id/R.770b805d5c99c7931366c2e84e88f251?rik=khgO%2bY1Hh3BT9w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png&ehk=6msbAydV7X6D4bO8zvLC664aXwKOdBU17dwrHcKxaAg%3d&risl=&pid=ImgRaw&r=0" />
                <h1 style={{ marginLeft: '20px' }}>Weather App</h1>
            </div>

            <form onSubmit={fetchWeather}>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

        </>
    )
}

export default SearchBar