import { useState } from "react";
import "./App.css";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import About from './pages/About';
import Forecast from "./pages/Forecast";
import Footer from "./components/Footer";

// import WeeklyWeather from './components/WeeklyWeather';

function App() {
  // must have REACT_APP_ at the start
  const apiKey = process.env.REACT_APP_API;

  let [temperature, setTemperature] = useState({
    firstTime: true,
    city: "",
    // weekday: "",
    temp: "",
    weatherDescription: "",
    weatherIcon: "",
    country: "",
    timezone: "",
    time: "",
  });

  // const [weeklyWeatherData, setWeeklyWeatherData] = useState([])

  //  async / await
  const getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`
    );
    const data = await api.json();

    console.log(data);

    if (city && country) {
      setTemperature({
        ...temperature,
        firstTime: false,
        city: data.name,
        // weekday: formatDate(data.dt, data.timezone, "weekday"),
        temp: data.main.temp,
        weatherDescription: data.weather[0].description,
        weatherIcon: getIconUrl(data.weather[0].icon),
        country: data.sys.country,
        timezone: data.timezone,
        // time: formatDate(data.dt, data.timezone, "time"),
        dateTime: data.dateTime,
      });
    } else {
      setTemperature({
        firstTime: true,
        city: "",
        // weekday: "",
        temp: "",
        weatherDescription: "",
        weatherIcon: "",
        country: "",
        timezone: "",
        time: "",
      });
    }
  };

  const getIconUrl = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  return (
    <div className="App">

<div className="navbar-main">
  
      <NavBar/>
      </div> <br/>

      {/* <Form getWeather={getWeather} /> */}
  
      <Routes>
      <Route path="/" element={<TodayWeather
        getWeather={getWeather} 
        city={temperature.city}
        country={temperature.country}
        temp={temperature.temp}
        time={temperature.time}
        weekday={temperature.weekday}
        weatherDescription={temperature.weatherDescription}
        weatherIcon={temperature.weatherIcon}
        key={temperature.id}
      />} />
      <Route path="/about" element={<About/>} />
      <Route path="/forecast" element={<Forecast/>} />
      </Routes> <br/>
      {/* <WeeklyWeather updateWeeklyWeather={updateWeeklyWeather} weeklyData={weeklyWeatherData} weekday={weatherData.weekday} /> */}
      <Footer/>

    </div>
  );
}

export default App;
