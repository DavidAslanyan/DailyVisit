const API_KEY = 'f55b206148ea7b11f8ff5f51e107972b';

export const fetchWeatherData = () => async () => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.1872&lon=44.5152&appid=${API_KEY}&units=metric`);
    const json = await response.json();
    return json;
  } catch (error: any) {
    console.log(error)
  }
};