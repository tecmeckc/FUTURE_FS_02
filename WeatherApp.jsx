import { useState } from "react"
import SearchBox from "./SearchBox"
import bgVideo from './bgVideo.mp4'; 
import WeatherInfo from "./WeatherInfo"
import './WeatherInfo.css';
import './WeatherApp.css'
export default function WeatherApp(){
  let [cityWeather,setcityWeather]=useState({
    city:"City Name",
    temp:17.05,
    tempMin:17.05,
    tempMax:17.05,
    humidity:63,
    weather:"smoke",
    feelsLike:16.46
  });
  let updateInfo=(result)=>{
    setcityWeather(result);
  }
  return (
    <>
   <div className="Weather">
     <video className="bg-video" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser doesn’t support the video tag.
      </video>
     <h1>Weather App</h1>
    <SearchBox updateInfo={updateInfo}/>
    <WeatherInfo info={cityWeather}/>
    </div>
    </>
  )
}