import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import weatherReducer from "../reducers/weatherReducer";


const initialState = {
    city: `initial`,
    temp: 273.15
}

const store = createStore(weatherReducer, initialState, applyMiddleware(thunk, logger));

export default store;