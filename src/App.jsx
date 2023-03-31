import react, { useState } from "react";
import Sakid from "./Sakid";
import Input from "./Input"
import Grid from '@mui/material/Grid';

//DEFINING THE STATIC PARTS OF THE URL
const head = "http://api.weatherapi.com/v1/forecast.json?key=3d38e4caccb748eb8f462648233003&q=";
const tail = "&days=3&aqi=no&alerts=no";

function App() {

//DEFINING 2 useStates (FOR HOLDING CITY NAME & API RESPONSE.
//THE RESPONSE IS FILTERED INTO AN ARRAY ("data").
//WE ALSO DEFINE THE DYNAMIC URL FOR THE FETCH, PASSING IN THE CITY VARIABLE
    const [city, setCity] = useState("");
    const [data, setData] = useState("");
    const url = head + city + tail;

//RETRIEVING DATA FROM THE API
    async function handleSubmit() {
        try {
            await fetch(url)
                    .then((response) => response.json())
                    .then((response) => setData(response.forecast.forecastday))
            } catch(error) {
                console.log(error)}
    }

//THE RETURN / RENDER PART IS REALLY SIMPLE AT THE TOP LEVEL
//WE WRAP EVERYTHING IN MUI GRID TO CENTER ALL ELEMENTS
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
{/*INPUT FIELD FOR SELECTING A CITY*/}
                   <Input onChange={(e)=>setCity(e.target.value)} handleSubmit={handleSubmit} />
{/*CONDITIONALLY RENDER THE SLIDER: ONLY SHOW IF USER HAS SELECTED A CITY    */}
                   {(data !== "") &&
                        <Sakid className="detail" city={city.toUpperCase()} data={data} />}
            </Grid>
        </div>
    )
}

export default App;
