import Card from '@mui/material/Card';
import './WeatherInfo.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SearchBox from './SearchBox';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Typography from '@mui/material/Typography';

export default function WeatherInfo({info}){
  const imgUrl="https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=2048x2048&w=is&k=20&c=cCOvNPeMW0rmwOpC9EDhiIo48OaiZ3uld_tEoniRLkE=";
  const hotWeather="https://plus.unsplash.com/premium_photo-1713316835033-f641d6cf9236?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const coldWeather="https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rainy="https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  return(
    <>
    <h2>WeatherInfo</h2>
    <div className='card'>
    <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainy
          :info.temp>15
          ?hotWeather:
          coldWeather}
        title={info.city}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}{
          info.humidity>80?<ThunderstormIcon/>
          :info.temp>15
          ?<WbSunnyIcon/>:
          <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} type="div">
         <p>Temp={info.temp}&deg;C</p>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Max Temp={info.tempMax}&deg;C</p>
         <p>Humidity={info.humidity}&deg;C</p>
         
         <p>The weather is <i> {info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </>
  )
}