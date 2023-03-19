import axios from "axios";

interface Action {
  type: string;
  payload?: any;
};

export const initialCurrencyState = {
  loading: false,
  data: [],
  error: ''
};


const FETCH_CURRENCY_REQUESTED = 'FETCH_CURRENCY_REQUESTED';
const FETCH_CURRENCY_SUCCEEDED = 'FETCH_CURRENCY_SUCCEEDED';
const FETCH_CURRENCY_FAILED = 'FETCH_CURRENCY_FAILED'; 


const fetchCurRequest = () => {
  return {
    type: FETCH_CURRENCY_REQUESTED
  }
};

const fetchCurSuccess = (data: object) => {
  return {
    type: FETCH_CURRENCY_SUCCEEDED,
    payload: data
  }
};

const fetchCurFailure = (error: string) => {
  return {
    type: FETCH_CURRENCY_FAILED,
    payload: error
  }
};


export const currencyReducer = (state = initialCurrencyState, action: Action) => {
  switch (action.type) {
    case FETCH_CURRENCY_REQUESTED:
      return {
        ...state,
        loading: true,
      }

    case FETCH_CURRENCY_SUCCEEDED:
      return {
        loading: false,
        data: action.payload,
        error: ''
      }

    case FETCH_CURRENCY_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload
      }

    default:
      return state;
  }
};


export const fetchCurrency = (): any => {
  return function(dispatch: any) {
    dispatch(fetchCurRequest())
    axios
      .get("https://api.currencyapi.com/v3/latest?apikey=Bi0aPL8uwRguYnXDIMnGsJ4k4YJlHAzeJx4c16O3")
      .then((response) => {
        dispatch(fetchCurSuccess(response))
      })
      .catch((error) => {
        dispatch(fetchCurFailure(error))
      })
  }
};