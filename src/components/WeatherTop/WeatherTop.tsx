import sunImage from '../../assets/sunnyImage.gif';
import snowImage from '../../assets/snowImage.gif';
import rainImage from '../../assets/rainImage.gif';
import cloudImage from '../../assets/cloudImage.gif';
import sun from '../../assets/sun.png';
import cloud from '../../assets/cloud.png';
import snow from '../../assets/snow.png';
import rainy from '../../assets/rainy.png';
import './_weatherTop.scss';
import WeatherCard from '../WeatherCard/WeatherCard';
import data from '../../data/weatherData.json';

export function WeatherTop() {
  const weather: string = data.weather[0].main;
  const temp = Math.round(data.main.temp);

  if (weather === "Sun") {
    return (
      <WeatherCard image={sunImage} temp={temp} weather={weather} icon={sun}/>
    )
  }

  if (weather === "Clouds") {
    return (
      <WeatherCard image={cloudImage} temp={temp} weather={weather} icon={cloud}/>
    )
  }

  if (weather === "Rain") {
    return (
      <WeatherCard image={rainImage} temp={temp} weather={weather} icon={rainy}/>
    )
  }

  if (weather === "Snow") {
    return (
      <WeatherCard image={snowImage} temp={temp} weather={weather} icon={snow}/>
    )
  }

  return (
    <>No weather data</>
  )
}
