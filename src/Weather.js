import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import axios from "axios";
import "./Weather.css"

export default function Weather (props){
const[weatherData, setWeatherData]=useState({ready:false});
const[city, setCity]=useState (props.defaultCity);

    function handleResponse(response){
        console.log(response.data);
setWeatherData({
    ready:true,
    date:new Date (response.data.dt*1000),
    city:response.data.name,
    description:response.data.weather[0].description,
    iconUrl:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    temperature:response.data.main.temp,
    humidity:response.data.main.humidity,
    wind:response.data.wind.speed,
    pressure:response.data.main.pressure
    
});
}

function search(){
  const apiKey="2c6da8dad3cff7b7ea9b815b83b08d69";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

}

function handleSudmit(event)
{
  event.preventDefault();
  search();

}

function handleCityChange(event){
setCity(event.target.value);
}


    if (weatherData.ready){ 
        return(
        <div className="Weather">
    <form className="search-bar" onSubmit={handleSudmit}>
      <input
        type="text"
        placeholder="Enter your city here"
        autocComplete="off"
        autoFocus="on"
        onChange={handleCityChange}
  
      />
      <input type="submit" value="search" />
    </form>
    <WeatherInfo data={weatherData}/>

            
  </div>
    );
    }
    else{
      search();
        return "Loading..."
    }
   
   

}
