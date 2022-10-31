import Weather from '../components/Weather';

export default function Home({temperature}) {
    return (
        <div>
            <Weather
                city={temperature.city}
                country={temperature.country}
                temp={temperature.temp}
                time={temperature.time}
                weekday={temperature.weekday}
                weatherDescription={temperature.weatherDescription}
                weatherIcon={temperature.weatherIcon}
                key={temperature.id}
            />
        </div>
    )
}
