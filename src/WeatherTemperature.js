import React,{useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit]=useState('celsius');

function convertToFahrenheit (event){
    event.preventDefault();
    setUnit("fahrenheit");

}

function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

    if (unit==='celsius'){
 return (
    <li className="list-group-item">
    <span className="temperature">{Math.round(props.celsius)}</span>
    <span className="unit">°С | <a className="tempLink" href="/" onClick={convertToFahrenheit}>°F</a>
    </span> 
      </li>
            );
    }else{
        let fahrenheit=(props.celsius*9)/5+32;
        return(
            <li className="list-group-item">
            <span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="unit"> <a  className="tempLink" href="/" onClick={convertToCelsius}>°С </a>| °F
            </span> 
              </li>
                    );
    }
}