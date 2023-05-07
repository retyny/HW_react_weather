
export const WEATHER_ERROR = 'WEATHER_ERROR';
export const RECEIVING_WEATHER_INFO_ACTION = 'RECEIVING_WEATHER_INFO_ACTION';

export const weatherErrorAction = () => ({
    type: WEATHER_ERROR,
    payload: 'ERROR...'
});

export const receivingWeatherInfoAction = (city, temp) => ({
   type: RECEIVING_WEATHER_INFO_ACTION,
   payload: {
       city: city,
       temp: temp
   }
});

export const getWeatherAction = (url) => {
    return (dispatch) => {
        fetch(`${url}`)
            .then(response => {
                if(response.ok)
                    return response.json();
            })
            .then(data => dispatch(receivingWeatherInfoAction(data.name, data.main.temp)))
            .catch(e => dispatch(weatherErrorAction()))
    }
};