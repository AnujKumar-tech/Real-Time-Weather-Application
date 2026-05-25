import { useState } from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city:"jammu",
        feelLike: 17.85,
        humumidity: 48,
        temp: 18.67,
        tempMax: 18.67,
        tempMin: 18.67,
        weather: "overcast clouds"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}