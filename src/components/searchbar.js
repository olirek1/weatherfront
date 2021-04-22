import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { stringify } from 'querystring';
import {Link} from 'react-router-dom';

function App() {
    const dbUrl = "http://35.226.31.11/api/cities";
    const config = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    }
    const day = new Date().toUTCString()
    const [searchInput, setsearchInput] = useState('');
    const handleInput = (e) => {
    e.preventDefault();
    setsearchInput(e.target.value);
}

const [weatherData, setweatherData] = useState([]);
const handleSearch = async () => {
    if (searchInput){
        //get weather data
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=65ff05c4a4d59de274a91a5ddb1eac97`;
        await fetch(apiUrl)
        .then((response) => response.json())
        .then((data) =>setweatherData([data]))
        .then(()=>setsearchInput(''))

        // post data
        const requestbody = {'cityname': searchInput}
        axios.post(dbUrl, stringify(requestbody),config.header);
    }
}
return (
    <div className="App-container">
        <div className="Titlename"><h2>Weather App</h2></div>
        <div>
            <input type ="checkbox" id="check"></input>
            <div className="box">
                <input type="text" className="form-control" value={searchInput} placeholder="Search" onChange={handleInput}/>
                <label htmlFor= "check" onClick={handleSearch}><i className="fas fa-search"></i></label>
            </div> 
        </div>
        <div className="weatherInfocard">
            {
                weatherData.map((ele, index)=> (
                    <div className="boxweather" key={index}>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                        <div className ="weathercon">
                        { ele.weather[0].main="Sunny"
                                    ? <i className='fas fa-sun'></i>
                                    : [ele.weather[0].main="Rainy"
                                    ?<i className='fas fa-cloud-rain'></i>
                                    :<i className='fas fa-cloud'></i>]
                        }
                        </div>
                        <div className="info">
                            <h2 className="location"><i className="fas fa-street-view"></i>{ele.name} | {ele.sys.country}</h2>
                            <p className = "date"> {day}</p>
                            <h1 className= "temp">{Math.round(ele.main.temp - 273)}&deg; C</h1>
                            <h3 className="tempmin_max"> Min {Math.round(ele.main.temp_min - 273)}&deg; C | Max {Math.round(ele.main.temp_max -273)}&deg; C</h3>
                        </div>
                    </div>
                ))
            }
            <div className="anadiv">
                <Link className="btn" to ="/analytics">See Analytics</Link>
            </div> 
            
        </div>
        
    </div>
);
}

export default App;