    import React  from "react";
    import FormattedDate from './FormattedDate';

    export default function WeatherInfo(props) 
        {
        return(
            <dv className="WeatherInfo">
    <form className="body-form">
    <div className="card-header">
      <p className="current-date">
        <FormattedDate date={props.data.date}/>
        </p>    
      <h4 className="card-title" >{props.data.city}</h4>
      <img src={props.data.iconUrl}
      alt={props.data.description}
      />
      </div>
      <div className="card-info">
            <li className="list-group-item" >Now it is {props.data.description}</li>
      <li className="list-group-item">
        <a href="#">{Math.round(props.data.temperature)}
        <span className="unit">°С</span>
        </a>
      </li>
      <li className="list-group-item">
        <a href="#">Fahrenheit</a>
      </li>
      <li className="list-group-item">{props.data.wind} MpH</li>
      <li className="list-group-item" >{props.data.humidity} %</li>
      <li className="list-group-item" >{props.data.pressure} mmHg</li>
      <br />
      </div>  
    </form> 
      <div className="row">
      <h5 className="forecast-title">
        Forecast</h5>
        <div className="forecast-text">
          </div>
         </div>
         </dv>
        );
    }