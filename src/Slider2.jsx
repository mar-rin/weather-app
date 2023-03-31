import React, { useState } from "react";
import OneHour2 from "./OneHour2"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//THE SLIDER WAS MADE FROM SCRATCH.
//IF YOU TOOK A PRE-MADE COMPONENT FROM MUI/BOOTSTRAP/INTERNET,
//THEN YOU'D USE YOUR COMPONENT HERE
//THE REALLY CRUCIAL PART STARTS FROM THE RENDERING PART (LN 41)

export default function Slider2 ({ data }){

//DEFINING useStates FOR KEEPING TRACK OF BUTTON CLICKS ON ARROWS
//AND THE RESULTING SLIDER-STRIP POSITION
//WE ARE USING THE "translate" CSS ELEMENT TO CHANGE THE POSITION AT EVERY CLICK
    const [counter, setCounter] = useState(1);
    const [position, setPosition] = useState({})

    function handleBack(){
        if(counter > 0){
            const move = (counter-2) * 320;
            setPosition({translate: "-" + move + "px"});
            const newCounter = counter -1
            setCounter(newCounter);
        } else {
            console.log("Cannot go back")
        }
    }

    function handleForward(){
        if(counter < 21){
            const move = (counter+1) * 320;
            setPosition({translate: "-" + move + "px"});
            setCounter(counter + 1);
        } else {
            console.log("Cannot go forward")
        }
    }


//WHAT IS INTERESTING HERE IS THAT WE HAVE A DATA ARRAY PASSED INTO THE
//SLIDER TO MAP THE DATA ONTO EACH HOUR-CARD (SEE LN 53).
//WE ARE JUST PASSING IN PROP "data", BUT ACTUALLY THE ARRAY IS DIFFERENT ACCORDING TO THE TAB/THE DAY SELECTED.
//THAT DIVERGING OF PATHS HAPPENED IN THE COMPONENT "SAKID.JSX", IN LINES 85,88,91
    return (
        <div className="carousel">
            <div className="arrowblock">
                <ArrowBackIosIcon className="arrow back" onClick={handleBack}/>
            </div>
            <div className="frame">
                <div className="slider" style={position}>
                    {data.map((entry) => (
                        <OneHour2
                            date={entry["date"]}
                            hour={entry["hour"]}
                            icon={entry["icon"]}
                            condition={entry["condition"]}
                            temp={entry["temp"]}
                            rain={entry["rain"]}
                        />
                    ))}
                </div>
            </div>
            <div className="arrowblock">
                 <ArrowForwardIosIcon className="arrow forward" onClick={handleForward}/>
            </div>

        </div>
    );
}


