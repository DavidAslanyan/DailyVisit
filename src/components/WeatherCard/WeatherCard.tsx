interface WeatherCardProps {
  image: string,
  icon: string,
  weather: string
  temp: number,
}

function WeatherCard(props: WeatherCardProps) {
  const {image, temp, icon, weather} = props;

  return (
    <section data-aos="fade-up" data-aos-duration="2000" className='weather-container' style={{backgroundImage: `url(${image})`}}>
      <div className='weather__content'>
        <div className='weather__contentMain'>
          <h1 className='weather__title'>{temp}&#8451;</h1>
          <img className='weather__icon' src={icon} alt='weather icon'/>
        </div>
        <h2 className='weather__description'>Today mostly {weather}</h2>
      </div>
    </section>
  )
}

export default WeatherCard;
