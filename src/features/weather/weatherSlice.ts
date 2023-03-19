import axios from "axios";

interface WeatherAction {
  type: string;
  payload: any;
  payload2?: any;
}

export const weatherInitialState = {
  loading: false,
  data: [],
  error: ''
}

const FETCH_WEATHER_REQUESTED = 'FETCH_WEATHER_REQUESTED';
const FETCH_WEATHER_SUCCEEDED = 'FETCH_WEATHER_SUCCEEDED';
const FETCH_WEATHER_FAILED = 'FETCH_WEATHER_FAILED';
const FETCH_WEATHER_DENIED = 'FETCH_WEATHER_DENIED';

const API_KEY = 'f55b206148ea7b11f8ff5f51e107972b';
const denialMessage = 'NOTE: If you are seeing the weather of another country it is because of your browser denying to collect your location data. To solve this issue your can turn on the geolocation-share setting by clicking on the icon on the left of the URL.';

const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUESTED
  }
}

const fetchWeatherSuccess = (data: object) => {
  return {
    type: FETCH_WEATHER_SUCCEEDED,
    payload: data
  }
}

const fetchWeatherFailure = (error: string) => {
  return {
    type: FETCH_WEATHER_FAILED,
    payload: error
  }
}

const fetchWeatherDenial = (data: object, message: string) => {
  return {
    type: FETCH_WEATHER_DENIED,
    payload: data,
    payload2: message
  }
}

export const weatherReducer = (state = weatherInitialState, action: WeatherAction) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUESTED:
      return {
        ...state,
        loading: true
      }

    case FETCH_WEATHER_SUCCEEDED:
      return {
        loading: false,
        data: action.payload,
        error: ''
      }

    case FETCH_WEATHER_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload
      }

    case FETCH_WEATHER_DENIED:
      return {
        loading: false,
        data: action.payload,
        error: action.payload2
      }

    default:
      return state;
  }
}

export const fetchUsers = (): string | object | any => {
  return function(dispatch: any) {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        dispatch(fetchWeatherRequest())
         axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
          .then((response) => {
            dispatch(fetchWeatherSuccess(response))
          })
          .catch((error) => {
            dispatch(fetchWeatherFailure(error))
          })
      });
    } else {
      dispatch(fetchWeatherRequest())
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=40.1872&lon=44.5152&appid=${API_KEY}&units=metric`)
        .then((response) => {
          dispatch(fetchWeatherDenial(response, denialMessage))
        })
        .catch((error) => {
          dispatch(fetchWeatherFailure(error))
        })
    }

  }
}