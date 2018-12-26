import React, { Component } from 'react';
import axios from 'axios';
import WeatherDay from './WeatherDay';

export default class HomePage extends Component {
    state = {
        weather: [],
        conditions: [],
        input: ''
    }
    getWeather() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=6d28a9763685bcaa8c6e94dae2fa4ab2`).then(res => {
            console.log(res.data)
            this.setState({
                weather: res.data,
                conditions: res.data.main
            })
        })
    }
    handleChange(val) {
        this.setState({ input: val })
    }
    render() {
        return (
            <div className='ui container'>
                <div className='ui centered grid'>
                    <h1 className='paddingTop' >Check the Weather</h1>
                    <div>
                    <input className='ui large input focus' placeholder='enter a city name' type='text' value={this.state.input} onChange={(e) => this.handleChange(e.target.value)}></input>
                    
                    <button className='mini ui primary button' onClick={() => this.getWeather()}>Submit</button>
                    < WeatherDay weather={this.state.weather} conditions={this.state.conditions} />
                    </div>
                </div>
            </div>
        )
    }
}

// wireframe https://wireframe.cc/xUf9L2