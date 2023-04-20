import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props){
  let [loaded, setLoaded]=useState(false);
  let [forecast, setForecast]=useState(null);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
}

if(loaded){
    return (<div className="WeatherForecast">
  <div className="row row-cols-12">
  <h5 className="forecast-title">
    Forecast</h5>
    <div className="col">
      <div className="WetherForecast-temperature">{forecast[0].temp.day}°С</div>  
      <div className="WeatherForecast-day">{forecast[0].dt}</div>
    <WeatherIcon code ={forecast[0].wetaher[0].icon} size={36}/>
    </div>
    <div className="col">
    <div className="WetherForecast-temperature">25°С</div>
    <div className="WeatherForecast-day">Tue</div>
    <WeatherIcon code ="01d" size={36}/>
    </div>
    <div className="col">
    <div className="WetherForecast-temperature">25°С</div>
    <div className="WeatherForecast-day">Wed</div>
    <WeatherIcon code ="01d" size={36}/>
    </div>
    <div className="col">
    <div className="WetherForecast-temperature">25°С</div>
    <div className="WeatherForecast-day">Thu</div>
    <WeatherIcon code ="01d" size={36}/>
    </div>
    <div className="col">
    <div className="WetherForecast-temperature">25°С</div>
    <div className="WeatherForecast-day">Fri</div>
    <WeatherIcon code ="01d" size={36}/>
    </div>
    <div className="col">
    <div className="WetherForecast-temperature">25°С</div>
    <div className="WeatherForecast-day">Sat</div>
    <WeatherIcon code ="01d" size={36}/>
    </div>
    </div>
    </div>
    
  );
}else{
    let apiKey = "2c6da8dad3cff7b7ea9b815b83b08d69";
    let longitude=props.coordinates.lon;
    let latitude=props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
}
}