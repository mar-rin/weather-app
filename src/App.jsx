import react, { useState, useMemo } from "react";
import Sakid from "./Sakid";
import Input from "./Input"
import Grid from '@mui/material/Grid';

const head = "http://api.weatherapi.com/v1/forecast.json?key=3d38e4caccb748eb8f462648233003&q=";
const tail = "&days=3&aqi=no&alerts=no";

function App() {

    const [city, setCity] = useState("");
    const [response, setResponse] = useState("");
    let data = [];
    const url = head + city + tail;

    async function handleSubmit() {
        data = [];
        try {
            await fetch(url)
                    .then((response) => response.json())
                    .then((response) => setResponse(response))
            } catch(error) {
                console.log(error)}
    }

    useMemo(()=>{
        if(response){
            for (let i = 0; i<3; i++){
                for (let j = 0; j<24; j++){
                    data.push(
                        {
                            "temp": response["forecast"]["forecastday"][i]["hour"][j]["temp_c"],
                            "icon": response["forecast"]["forecastday"][i]["hour"][j]["condition"]["icon"],
                            "condition": response["forecast"]["forecastday"][i]["hour"][j]["condition"]["text"],
                            "date": response["forecast"]["forecastday"][i]["date"],
                            "hour": response["forecast"]["forecastday"][i]["hour"][j]["time"].split(" ")[1],
                            "rain": response["forecast"]["forecastday"][i]["hour"][j]["precip_mm"],
                        }
                    )
                }}
    }}, [data, response])


    return (
        <div className="container">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                   <Input onChange={(e)=>setCity(e.target.value)} handleSubmit={handleSubmit} />
                   {(response !== "") &&
                        <Sakid className="detail" city={city.toUpperCase()} data={data} />}
            </Grid>
        </div>
    )
}

export default App;
