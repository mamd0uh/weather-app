import "./TodayWeather.css";
import Form from "../Form";

export default function TodayWeather({
  city,
  country,
  weekday,
  time,
  weatherDescription,
  weatherIcon,
  temp,
  getWeather,
}) {
  return (
    <>

    <Form getWeather={getWeather} />

    { temp&& <div className="container weatherData rounded">
      
      {city && 
        <div className="row todayCity justify-content-left">
          {city}, {country}
        </div>
      }

      {city && <div className="row todayDay">
        {weekday} {time}
      </div>}

      {city && <div className="row todayDesc justify-content-left">
        {weatherDescription}
      </div>}

      {city && <div className="row todayTemp justify-content-left">
        <img src={weatherIcon} alt="" />

        {temp && (
          <div className="display-fahrenheit ">
            {temp}
            <span className="fahrenheit ">&#x2109;</span>
            <span className="current">current</span>
          </div>
        )}
      </div>}

      { temp&& <div className="today">Today</div>}
      
    </div>}
    </>
  );
}
