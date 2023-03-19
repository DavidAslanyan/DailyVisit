import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { weatherInitialState, weatherReducer } from '../features/weather/weatherSlice';
import { initialCurrencyState, currencyReducer } from '../features/currency/currencySlice';
import { initialNewsState, newsReducer } from '../features/news/newsSlice';
import { initialInputState, inputReducer } from '../features/todo/inputSlice';
import { initialTodoState, todoReducer } from '../features/todo/todoSlice';

const stateAll = {
  weather: weatherInitialState,
  currency: initialCurrencyState,
  news: initialNewsState,
  input: initialInputState,
  todo: initialTodoState
}

const store = createStore(combineReducers({
  weather: weatherReducer,
  currency: currencyReducer,
  news: newsReducer,
  input: inputReducer,
  todo: todoReducer
}), stateAll, applyMiddleware(thunk));

export default store;