import React, { useState } from 'react';
import axios from "axios";
import "./Weather.css"

export default function Weather (){
    const[ready, setReady]=useState(false);
    const[temperature, setTemperature]=useState(null);
    function handleResponse(response){
        console.log(response.data);
        setTemperature(response.data.main.temp);
    }

    if (ready){ return(
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

    <form id="body-form">
            <div className="card-header">
          <p className="current-date"></p>
        </div>
        
          <h4 className="card-title" >City</h4>
          <img src="https://openweathermap.org/img/wn/04d@2x.png"
          alt="Mostly Cloudy"
          />
          <li className="list-group-item" >Now it is</li>
          <li className="list-group-item">
            <a href="#">Temperature {temperature}
            <span className="unit">°С</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#">Fahrenheit</a>
          </li>
          <li className="list-group-item">Wind MpH</li>
          <li className="list-group-item" >Humidity %</li>
          <li className="list-group-item" >ATM mmHg</li>
          <br />
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
        let city="Odesa";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading..."
    }
   
   

}
