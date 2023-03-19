import './_weather.scss';
import { WeatherTop } from '../WeatherTop/WeatherTop';

interface WeatherFetchData {
  temp: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  feels_like: number,
  humidity: number,
}

function Weather() {

  const country = 'AM';
  const name = 'Yerevan';
  const temp = 15;
  const min_temp = 13;
  const max_temp = 16;
  const feels_like = 14;
  const pressure = 300;
  const humidity = 23;
  const clouds = 20;
  const windSpeed = 3.09;
  const windDegree = 280; 
  const wind = `${windSpeed}mph : ${windDegree}deg`;
  const weather = 'Sunny';
  const lon = 44.5152;
  const lat = 40.1872;
  const coordinates =`${lon} : ${lat}`;

  const weatherAdditionalInfo = [
    {
      title: 'Feels Like',
      data: `${feels_like}C`,
      icon: <i className='bx bx-scatter-chart'></i>
    },
    {
      title: 'Minimum Temperature',
      data: `${min_temp}C`,
      icon: <i className='bx bx-cloud-snow' ></i>
    },
    {
      title: 'Maximum Temperature',
      data: `${max_temp}C`,
      icon: <i className='bx bx-sun' ></i>
    },
    {
      title: 'Average Clouds',
      data: clouds,
      icon: <i className='bx bx-cloud' ></i>
    },
    {
      title: 'Pressure',
      data: pressure,
      icon: <i className='bx bxs-caret-down-circle'></i>
    },
    {
      title: 'Humidity',
      data: `${humidity}%`,
      icon: <i className='bx bxs-droplet-half'></i>
    },
    {
      title: 'Wind',
      data: wind,
      icon: <i className='bx bx-wind' ></i>
    },
    {
      title: 'Coordinates',
      data: coordinates,
      icon: <i className='bx bx-location-plus' ></i>
    }

  ]

  return (
    <div className='weather'>
      <h1 className='weather__cityTitle'>{name}<span className='weather__titleColumn'>,</span> <span className='weather__countryTitle'>{country}</span></h1>
      <WeatherTop />
      <section className='weather__additional'>
        <ul className='weather__listLeft'>
          {weatherAdditionalInfo.map((item, idx) => (
            <li data-aos="fade-up" data-aos-duration="500" className='weather__itemLeft' key={idx}>
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>

        <ul className='weather__listRight'>
          {weatherAdditionalInfo.map((item, idx) => (
            <li data-aos="fade-up" data-aos-duration="500" className='weather__itemRight' key={idx}>
              <h3 className='weather__data'>{item.data} <span className='weather__icon'>{item.icon}</span></h3>
            </li>
          ))}
        </ul>
      </section>
    </div>
)
}

export default Weather;
