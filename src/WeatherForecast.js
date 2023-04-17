import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(){
    return <div className="WeatherForecast">
    <div className="row row-cols-12">
    <h5 className="forecast-title">
      Forecast</h5>
      <div className="col">
        <div className="WetherForecast-temperature">25°С</div>  
        <div className="WeatherForecast-day">Mon</div>
      <WeatherIcon code ="01d" size={36}/>
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
      
       
}