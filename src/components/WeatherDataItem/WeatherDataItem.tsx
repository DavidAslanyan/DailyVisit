import './_weatherDataItem.scss';

interface WeatherDataItem {
  title: string | number;
  icon?: JSX.Element;
};

function WeatherDataItem(props: WeatherDataItem) {
  const { title, icon } = props;

  return (
    <li data-aos="fade-up" data-aos-duration="500" className='weather__item'>
      {icon ? 
        <h3 className='weather__data'>{title} <span className='weather__icon'>{icon}</span></h3> 
        : <h3 className='weather__itemTitle'>{title}</h3>}
    </li>
  )
}

export default WeatherDataItem;