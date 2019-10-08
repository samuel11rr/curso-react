import React from 'react'
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types'
import './styles.css';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../../../constants/weathers';

const icons = {
    [CLOUD]     : 'cloud',
    [SUN]       : 'day-sunny',
    [RAIN]      : 'rain',
    [SNOW]      : 'snow',
    [THUNDER]   : 'day-thunderstore',
    [DRIZZLE]   : 'day-showers',
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = '4x';

    if ( icon ) return <WeatherIcons name={icon} size={sizeIcon} className="wicon" />
    if ( !icon ) return <WeatherIcons name={"day-sunny"} size={sizeIcon} className="wicon" />
}

const WeatherTemperature = ( { temperature, weatherState } ) => (
    <div className="weatherTemperatureCont">
        { getWeatherIcon( weatherState ) }

        <span className="temperature">{ `${temperature}` }</span>
        <span className="temperatureType">{`° C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;