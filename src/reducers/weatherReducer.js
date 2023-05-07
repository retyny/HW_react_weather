import {
    RECEIVING_WEATHER_INFO_ACTION,
    WEATHER_ERROR
} from "../actions/weatherAction";


function weatherReducer(state, action) {
    switch (action.type) {
        case WEATHER_ERROR:
            return {...state, city: action.payload.city, temp: action.payload.temp}
        case RECEIVING_WEATHER_INFO_ACTION:
            return {...state, city: action.payload.city, temp: action.payload.temp}
        default:
            return state;
    }
}

export default weatherReducer