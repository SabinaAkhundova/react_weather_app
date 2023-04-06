import React from 'react';
import "./Weather.css"

export default function Weather (){
    return(
        <div className='Weather'>
    <form className="search-bar">
      <input
        type="text"
        placeholder="Enter your city here"
        autocomplete="off"
        autofocus="on"
        id="search-city-input"
      />
      <input type="submit" value="search" />
    </form>

    <form id="body-form">
    
        <div className="card-header">
          <p className="current-date"></p>
        </div>
        
          <h4 className="card-title" id="city">City</h4>
          <img id="icon" />
          <li className="list-group-item" id="description">Now it is</li>
          <li className="list-group-item" id="change-temp">
            <a href="#">Temperature°С</a>
          </li>
          <li className="list-group-item" id="fahrenheit-temp">
            <a href="#">Fahrenheit</a>
          </li>
          <li className="list-group-item" id="change-wind">Wind MpH</li>
          <li className="list-group-item" id="change-hum">Humidity %</li>
          <li className="list-group-item" id="change-atm">ATM mmHg</li>
          <p className="btn btn-outline-info" id="btn">Current Location</p>
          <br />
        </form> 
          <div className="row">
          <h5 className="forecast-title">
            Forecast</h5>
            <div className="content-text" id="forecast">
              </div>
             </div>
            
  </div>
    );
}
