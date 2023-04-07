import React, { useState } from 'react';
import FormattedDate from './FormattedDate';
import WeatherInfo from './WeatherInfo';
import axios from "axios";
import "./Weather.css"

export default function Weather (props){
    
    const[weatherData, setWeatherData]=useState({ready:false});
    function handleResponse(response){
        console.log(response.data);
setWeatherData({
    ready:true,
    date:new Date (response.data.dt*1000),
    city:response.data.name,
    description:response.data.weather[0].description,
    iconUrl:"https://openweathermap.org/img/wn/04d@2x.png",
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    wind:response.data.wind.speed,
    pressure:response.data.main.pressure
    
});
    
    }

    if (weatherData.ready){ 
        return(
        <div className="Weather">
    <form className="search-bar">
      <input
        type="text"
        placeholder="Enter your city here"
        autocComplete="off"
        autoFocus="on"
  
      />
      <input type="submit" value="search" />
    </form>
    <WeatherInfo/>

    <form className="body-form">
        <div className="card-header">
          <p className="current-date">
            <FormattedDate date={weatherData.date}/>
            </p>    
          <h4 className="card-title" >{weatherData.city}</h4>
          <img src={weatherData.iconUrl}
          alt={weatherData.description}
          />
          </div>
          <div className="card-info">
                <li className="list-group-item" >Now it is {weatherData.description}</li>
          <li className="list-group-item">
            <a href="#">{Math.round(weatherData.temperature)}
            <span className="unit">°С</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#">Fahrenheit</a>
          </li>
          <li className="list-group-item">{weatherData.wind} MpH</li>
          <li className="list-group-item" >{weatherData.humidity} %</li>
          <li className="list-group-item" >{weatherData.pressure} mmHg</li>
          <br />
          </div>  
        </form> 
          <div className="row">
          <h5 className="forecast-title">
            Forecast</h5>
            <div className="forecast-text">
              </div>
             </div>
            
  </div>
    );
    }
    else{
        const apiKey="2c6da8dad3cff7b7ea9b815b83b08d69";
               let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading..."
    }
   
   

}
