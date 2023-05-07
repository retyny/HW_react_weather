import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getWeatherAction} from "../actions/weatherAction";

const WeatherForm = () => {



    const dispatch = useDispatch();
const [city, inputCity] = useState(`---`)


    return (
        <div className={'container'}>
            <div className={'d-flex justify-content-center'}>
                <input className={'form-control-lg text-center'}
                       onChange={(e) => inputCity(e.target.value)} value={city}/>
                {console.log(city)}
                <button className={'btn btn-primary btn-lg'}
                onClick={() =>
                    dispatch(getWeatherAction(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc41099d3d362eb0a515e21884820e9e`))}>Search</button>
            </div>
        </div>
    );
};

export default WeatherForm;