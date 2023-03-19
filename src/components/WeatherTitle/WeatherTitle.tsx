import './_weatherTitle.scss';

interface WeatherTitle {
  city: string;
  country: string;
}

function WeatherTitle(props: WeatherTitle) {
  const { city, country } = props;

  return (
    <h1 className='weather__cityTitle'>{city}<span className='weather__titleColumn'>,</span> <span className='weather__countryTitle'>{country}</span></h1>
  )
}

export default WeatherTitle;