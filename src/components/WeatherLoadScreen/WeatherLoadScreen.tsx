import './_weatherLoadScreen.scss';

interface WeatherLoadScreen {
  loadText: string;
  loadInfo: string;
};

function WeatherLoadScreen(props: WeatherLoadScreen) {
  const { loadText, loadInfo } = props;

  return (
    <div className='weather__load'>
      <h2 className='weather__loading'>{loadText}</h2>
      <p className='weather__note'>{loadInfo}</p>
    </div>
  )
}

export default WeatherLoadScreen;