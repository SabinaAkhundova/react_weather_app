
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
       <div className="container">
    
<Weather defaultCity="Odesa"/>     
   <footer className='footer-text'> 
     <a href="https://github.com/SabinaAkhundova/react_weather_app"
      target ="_blank"
      rel="noreferrer">
            Open-sourced code 
          </a> {""}
          by Sabina Akhundova
          </footer>
          </div>
          </div>
  );
}

