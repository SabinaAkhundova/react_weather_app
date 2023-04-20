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
    <div className="row row-cols-12">
    <div className="col">
      
    <div className="WeatherForecast-day">{day()}</div>
        <div className="WetherForecast-temperature">{dayTemperature()}°С</div>   
        <WeatherIcon code={props.data.weather[0].icon} size={36} /> 
       </div>
        <div className="col">
            <div className="WetherForecast-temperature">25°С</div>
            <div className="WeatherForecast-day">Tue</div>
            <WeatherIcon code="01d" size={36} />
        </div><div className="col">
                    <div className="WetherForecast-temperature">25°С</div>
                    <div className="WeatherForecast-day">Wed</div>
                    <WeatherIcon code="01d" size={36} />
                </div><div className="col">
                    <div className="WetherForecast-temperature">25°С</div>
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="01d" size={36} />
                </div><div className="col">
                    <div className="WetherForecast-temperature">25°С</div>
                    <div className="WeatherForecast-day">Fri</div>
                    <WeatherIcon code="01d" size={36} />
                </div><div className="col">
                    <div className="WetherForecast-temperature">25°С</div>
                    <div className="WeatherForecast-day">Sat</div>
                    <WeatherIcon code="01d" size={36} />
                </div>
               </div>
               </div>
    );
}