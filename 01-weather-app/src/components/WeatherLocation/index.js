import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 30,
    wind: '40 m/s'
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Mexico City',
            data
        };
    }

    handleUpdateClick = () => {
        console.log('actualizado');

        this.setState({
            // city: 'Buenos Aires',
            data: data2
        });
    }

    render() {

        const { city, data } = this.state;

        return ( 
            <div className="weatherLocationCont">
                <Location city={ city }></Location>
                <WeatherData data={ data }></WeatherData>
                <button onClick={ this.handleUpdateClick }>
                    Update
                </button>
            </div>
        )
    }
};

export default WeatherLocation;