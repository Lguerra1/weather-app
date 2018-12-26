import React from 'react';

const WeatherDay = (props) => {
const min = props.conditions.temp_min
const max = props.conditions.temp_max
const high = 1.8 * (max - 273) + 32
const low =  1.8 * (min - 273) + 32
const highTemp = Math.round(high)
const lowTemp = Math.round(low)
   
    return (
        
        <div className ='ui container'>Todays Weather
            <br />
            City Name: {props.weather.name}
            <br/>
            Air Pressure: {props.conditions.pressure}
            <br/>
            Humidity: {props.conditions.humidity}
            <br />
            High Temp: {highTemp || ''}
            <br />
            Low Temp: { lowTemp || '' }
           
        </div>
    )
}

export default WeatherDay;