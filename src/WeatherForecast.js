import React, { useState } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded]=useState(false);
  let [forecast, setForecast]=useState(null);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
}

if(loaded){
    return (<div className="WeatherForecast">
  
    
      <WeatherForecastDay data={forecast[0]}/>
      
    </div>
  
    
  );
}else{
    let apiKey = "2c6da8dad3cff7b7ea9b815b83b08d69";
    let longitude=props.coordinates.lon;
    let latitude=props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
}
}