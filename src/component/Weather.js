import React from 'react';
import {useSelector} from "react-redux";

const Weather = () => {

    const {city, temp} = useSelector(state => state)

    return (
        <div>
            <h1 className={'text-center text-uppercase'}>Weather: {city} Temp: {(temp-273.15).toFixed(0)}°C</h1>
        </div>
    );
};

export default Weather;