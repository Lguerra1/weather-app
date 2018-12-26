import React, { Component } from 'react';
import axios from 'axios';
import WeatherDay from './WeatherDay';

export default class HomePage extends Component {
    state = {
        weather: [],
        conditions: [],
        input: 'Santaquin'
    }

    getWeather(){              
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid={get your own damn free key}`).then(res => {
                console.log(res.data)
                this.setState({
                    weather: res.data,
                    conditions: res.data.main
                })
            })        
    }
    handleChange(val){
        this.setState({input: val})
    }
    render() {

        
        return (
            <div>
                <h1>Check the Weather</h1>
            < WeatherDay weather={this.state.weather} conditions={this.state.conditions} />
            <input type='text' value={this.state.input} onChange={(e) => this.handleChange(e.target.value)}></input>
            <button onClick={() => this.getWeather()}>Submit</button>
            </div >
        )
    }
}

// wireframe https://wireframe.cc/xUf9L2