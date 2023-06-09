    import React  from "react";
    import FormattedDate from './FormattedDate';
    import WeatherIcon from "./WeatherIcon";
    import WeatherTemperature from "./WeatherTemperature";


    export default function WeatherInfo(props) 
        {
        return(
    <div className="WeatherInfo">
    <div className="card-header">
      <p className="current-date">
        <FormattedDate date={props.data.date}/>
        </p>    
      <h4 className="card-title " >{props.data.city}</h4>
      <WeatherIcon code={props.data.icon} size={50} />
   
      <div className="list-item">
            <li className="list-group-item">Now it is {props.data.description}</li>
            <WeatherTemperature celsius={props.data.temperature}/>
            <li className="list-group-item">{props.data.wind} KmpH</li>
      <li className="list-group-item" >{props.data.humidity} %</li>
      <li className="list-group-item" >{props.data.pressure} mmHg</li>
      <br />
      </div>
      </div>
    
      </div>
        );
    }