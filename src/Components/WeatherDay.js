import React from 'react';


const WeatherDay = (props) => {
    const min = props.conditions.temp_min
    const max = props.conditions.temp_max
    const high = 1.8 * (max - 273) + 32
    const low = 1.8 * (min - 273) + 32
    const highTemp = Math.round(high)
    const lowTemp = Math.round(low)

    if (highTemp >= 70) {
        return (
            <div className='ui container'>
                <h2>Todays Weather   <i className="large sun icon"></i></h2>

                <div className='ui centerd column'>
                    <div className='stat-text'> City Name: {props.weather.name}</div>
                    <br />
                    <div className='stat-text'> Air Pressure: {props.conditions.pressure}</div>
                    <br />
                    <div className='stat-text'> Humidity: {props.conditions.humidity}</div>
                    <br />
                    <div className='stat-text'> High Temp: {highTemp || ''}</div>
                    <br />
                    <div className='stat-text'> Low Temp: {lowTemp || ''}</div>
                    <br />
                    <div className='stat-text'> Description: {props.description}</div>
                </div>
            </div>
        )
    } else if (highTemp < 70) {
        return (
            <div className='ui container'>
                <h2>Todays Weather  <i className="large snowflake icon"></i></h2>

                <div className='ui centerd column'>
                    <div className='stat-text'> City Name: {props.weather.name}</div>
                    <br />
                    <div className='stat-text'> Air Pressure: {props.conditions.pressure}</div>
                    <br />
                    <div className='stat-text'> Humidity: {props.conditions.humidity}</div>
                    <br />
                    <div className='stat-text'> High Temp: {highTemp || ''}</div>
                    <br />
                    <div className='stat-text'> Low Temp: {lowTemp || ''}</div>
                    <br />
                    <div className='stat-text'> Description: {props.description}</div>
                </div>
            </div>
        )
    }

    return (
        <div className='ui container'>
            <h2>Todays Weather</h2>
            <div className='ui centerd column'>
                <div className='stat-text'> City Name: {props.weather.name}</div>
                <br />
                <div className='stat-text'> Air Pressure: {props.conditions.pressure}</div>
                <br />
                <div className='stat-text'> Humidity: {props.conditions.humidity}</div>
                <br />
                <div className='stat-text'> High Temp: {highTemp || ''}</div>
                <br />
                <div className='stat-text'> Low Temp: {lowTemp || ''}</div>
                <br />
                <div className='stat-text'> Description: {props.description}</div>
            </div>
        </div>
    )
}

export default WeatherDay;