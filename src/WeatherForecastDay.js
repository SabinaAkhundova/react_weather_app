import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    function dayTemperature(){
        let temperature =Math.round(props.data.temp.day);
        return `${temperature}`;
    }

function day(){
    let date=new Date(props.data.dt*1000);
    let day=date.getDay();

    let days=["Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"]

    return days[day];
}


    return( 
  <div>  
     <div className="WeatherForecast-day">{day()}</div>
        <div className="WetherForecast-temperature">{dayTemperature()}°С</div>   
        <WeatherIcon code={props.data.weather[0].icon} size={36} /> 
        </div>     
       
    );
}