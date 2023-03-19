import './_weatherPage.scss';
import { useEffect } from 'react';
import { WeatherTop } from '../../components/WeatherTop/WeatherTop';
import data from '../../data/weatherData.json';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/weather/weatherSlice';
import PageTitle from '../../components/PageTitle/PageTitle';
import WeatherDataItem from '../../components/WeatherDataItem/WeatherDataItem';
import WeatherTitle from '../../components/WeatherTitle/WeatherTitle';
import WeatherLoadScreen from '../../components/WeatherLoadScreen/WeatherLoadScreen';


interface WeatherState {
  weather: {
    data: any;
    error: string
  };
}

interface WeatherInfoType {
  title: string,
  data: string | number,
  icon: any
}


function WeatherPage() {

  const data = useSelector((state: WeatherState) => state.weather.data.data);
  const errorMessage = useSelector((state: WeatherState) => state.weather.error)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  
  let weatherAdditionalInfo: WeatherInfoType[] = [];

  if (data) {
    weatherAdditionalInfo = [
      {
        title: 'Feels Like',
        data: `${data.main.feels_like}°C`,
        icon: <i className='bx bx-scatter-chart'></i>
      },
      {
        title: 'Minimum Temperature',
        data: `${data.main.temp_min}°C`,
        icon: <i className='bx bx-cloud-snow' ></i>
      },
      {
        title: 'Maximum Temperature',
        data: `${data.main.temp_max}°C`,
        icon: <i className='bx bx-sun' ></i>
      },
      {
        title: 'Average Clouds',
        data: data.clouds.all,
        icon: <i className='bx bx-cloud' ></i>
      },
      {
        title: 'Pressure',
        data: data.main.pressure,
        icon: <i className='bx bxs-caret-down-circle'></i>
      },
      {
        title: 'Humidity',
        data: `${data.main.humidity}%`,
        icon: <i className='bx bxs-droplet-half'></i>
      },
      {
        title: 'Wind',
        data: `${data.wind.speed}mph : ${data.wind.deg}deg`,
        icon: <i className='bx bx-wind' ></i>
      },
      {
        title: 'Coordinates',
        data: `${data.coord.lon} : ${data.coord.lat}`,
        icon: <i className='bx bx-location-plus' ></i>
      }
  
    ]
  }

  const LOADING_TEXT = 'Loading Data...';
  const LOADING_INFO = 'Note: If the loading takes too long, the app may have problems detecting your geolocation.';

  return (
    <div className='weather' id='weather'>
      {errorMessage ? <h3 className='weather__errorMEssage'>{errorMessage}</h3> : null}
      {data ? 
      <>
        <div className='weather__pageName'>
          <PageTitle title='weather forecast'/>
        </div>
        <WeatherTitle city={data.name} country={data.sys.country}/>
        <WeatherTop />
        <section className='weather__additional'>
          <ul className='weather__listLeft'>
            {weatherAdditionalInfo.map((item, index) => (
              <WeatherDataItem key={index} title={item.title}/>
            ))}
          </ul>

          <ul className='weather__listRight'>
            {weatherAdditionalInfo.map((item, index) => (
              <WeatherDataItem key={index} title={item.data} icon={item.icon}/>
            ))}
          </ul>
        </section>
      </>
      :
      <WeatherLoadScreen loadText={LOADING_TEXT} loadInfo={LOADING_INFO}
      />}
    </div>
)
}

export default WeatherPage;
