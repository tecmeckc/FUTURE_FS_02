import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { colors } from '@mui/material';
export default function SearchBox({updateInfo}){
  let [city,setcity]=useState("");
  let [error,seterror]=useState(false);
  const API="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY="c222acc2a8a63a84a5df6b5ccb383aa8";
  let WeatherRes=async()=>{
    try{
    let response=await fetch(`${API}?q=${city}&appid=${API_KEY}&units=metric`);
    let respJSON=await response.json();
    let result={
      city:city,
    temp:respJSON.main.temp,
    tempMin:respJSON.main.temp_min,
    tempMax:respJSON.main.temp_max,
    humidity:respJSON.main.humidity,
    feelsLike:respJSON.main.feels_like,
    weather:respJSON.weather[0].description,
    };
    console.log(result);
    return result;
  }catch(err){
    throw err;
  }
  }
  let handleInput=(event)=>{
    setcity(event.target.value);
    
  }
  let handleSubmit=async(event)=>{
    try{
   event.preventDefault();
   setcity("");
   let info=await WeatherRes();
   updateInfo(info);
    }catch(err){
      seterror(true);
    }
  }
  return(
    <>
    
    <form onSubmit={handleSubmit} >
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
     />
      
        <TextField
          required
          id="outlined-required"
          label="Enter city name"
          
          value={city}
          onChange={handleInput}
        /> &nbsp;&nbsp;
        <Button variant="contained" type='submit'>Submit</Button>
        </form>
        {error && <p style={{color:"red"}}>No such Place exists!</p>}
    </>
  )
}