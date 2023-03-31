import react, { useState, useMemo } from "react";
import Sakid from "./Sakid";
import Input from "./Input"
import Grid from '@mui/material/Grid';

//DEFINING THE STATIC PARTS OF THE URL
const head = "http://api.weatherapi.com/v1/forecast.json?key=3d38e4caccb748eb8f462648233003&q=";
const tail = "&days=3&aqi=no&alerts=no";

function App() {

//DEFINING 2 useStates (FOR HOLDING CITY NAME & API RESPONSE.
//THE RESPONSE IS FILTERED INTO AN ARRAY ("data"). THIS COULD ALSO BE A useState, BOTH WAYS WORK
//THEN WE ALSO DEFINE THE DYNAMIC URL FOR THE FETCHING, PASSING IN THE CITY VARIABLE
    const [city, setCity] = useState("");
    const [response, setResponse] = useState("");
    let data = [];
    const url = head + city + tail;

//RETRIEVING DATA FROM THE API
    async function handleSubmit() {
        //MAKING THE DATA ARRAY EMPTY FOR EACH FETCH. IF WE DID IT WITH a useState, THAT WOULD NOT BE NECESSARY
        data = [];
        try {
            await fetch(url)
                    .then((response) => response.json())
                    .then((response) => setResponse(response))
            } catch(error) {
                console.log(error)}
    }

//DATA HAS ARRIVED, LET'S GRAB THE PARTS WE NEED!
//THE PROBLEM WE FACE IS THAT WE WANT TO TRIGGER THAT FUNCTION ONLY WHEN THERE IS A RESPONSE --
//OTHERWISE WE RUN INTO PROBLEMS TRYING TO MANIPULATE AN EMPTY THING...
//ONE SOLUTION HERE IS TO CHECK FOR DATA ("response"), AND ONLY THEN START THE LOOP
//TO PREVENT ETERNAL RENDERING IN REACT, useMemo IS USED
    useMemo(()=>{
        if(response){
            for (let i = 0; i<3; i++){
                for (let j = 0; j<24; j++){
                    //HERE WE ARE PULLING OUT SPECIFIC DATA -- THE FIELDS WE WANT TO
                    //RENDER ON OUR SLIDER -- AND STORING THEM AS AN ARRAY OF 72 HOUR OBJECTS
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

//THE RETURN / RENDER PART IS REALLY SIMPLE AT THE TOP LEVEL
//WE WRAP EVERYTHING IN MUI GRID TO NICELY CENTER ALL ELEMENTS
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
                   {(response !== "") &&
                        <Sakid className="detail" city={city.toUpperCase()} data={data} />}
            </Grid>
        </div>
    )
}

export default App;
