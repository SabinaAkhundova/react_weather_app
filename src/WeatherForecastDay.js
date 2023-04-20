import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    return(
        
  <div>
            <div className="WetherForecast-temperature">{props.data.temp.day}°С</div>
            <div className="WeatherForecast-day">{props.data.dt}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
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
    );
}