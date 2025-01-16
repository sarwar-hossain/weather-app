import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Weather from "./components/Weather";
import History from "./components/History";
import "./App.css";
import "./components/Weather.css";
import Navbar from "./components/Navbar";

function App() {

  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("history");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });


  return (
    <Router>
      <div className="App">

      <Navbar />

        <Routes>
          <Route path="/" element={<Weather history={history} setHistory={setHistory} weather={weather} setWeather={setWeather} />} />
          <Route path="/history" element={<History history={history} />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
