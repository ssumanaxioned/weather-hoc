import React from 'react'
import Weather from "./withWeather";
import './Display.css';

function Display(props) {
  return (
    <div className='display'>
      <h1>{props.name}</h1>
      <p>Current Temperature: {props.temp} °C</p>
      <p>Feels Like: {props.feels_like} °C</p>
      <p>Humidity: {props.humidity} %</p>
      <p>Wind: {props.wind} m/s</p>
    </div>
  )
}

export default Weather(Display)
