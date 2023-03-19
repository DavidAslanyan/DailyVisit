import axios from "axios";


interface StateType {
  news: {
    data: {
      data: any
    }
  }
};

interface Action {
  type: string;
  payload?: {
    data: {
      articles: any[];
    };
  };
};

interface NewsState {
  loading: boolean | undefined;
  data: any[] | undefined;
  error: string | undefined;
};


export const initialNewsState: any | NewsState = {
  loading: false,
  data: [],
  error: ''
};


const FETCH_NEWS_REQUESTED = 'FETCH_NEWS_REQUESTED';
const FETCH_NEWS_SUCCEEDED = 'FETCH_NEWS_SUCCEEDED ';
const FETCH_NEWS_FAILED = 'FETCH_NEWS_FAILED';
const API_KEY = 'pub_1877827c1b7025f177175e3bcd2611efdd3f5';


const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUESTED
  }
};

const fetchNewsSuccess = (data: object) => {
  return {
    type: FETCH_NEWS_SUCCEEDED,
    payload: data
  }
};

const fetchNewsFailure = (error: string) => {
  return {
    type: FETCH_NEWS_FAILED,
    payload: error
  }
};


export const newsSelector = (state: StateType) => {
  return state.news.data.data;
};


export const newsReducer = (state = initialNewsState, action: Action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUESTED:
      return {
        ...state,
        loading: true
      }

    case FETCH_NEWS_SUCCEEDED:
      return {
        loading: false,
        data: action.payload,
        error: ''
      }

    case FETCH_NEWS_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state;
  }
};


export const fetchNews = (): any => {
  return function(dispatch: any) {
    dispatch(fetchNewsRequest())
    axios
      .get(`https://newsdata.io/api/1/news?apikey=${API_KEY}&category=health,politics,sports&country=us&language=en`)
      .then((response) => {
        dispatch(fetchNewsSuccess(response))
      })
      .catch((error) => {
        dispatch(fetchNewsFailure(error))
      })
  }
};