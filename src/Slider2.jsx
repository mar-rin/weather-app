import React, { useState } from "react";
import OneHour2 from "./OneHour2"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//THIS SLIDER WAS HERE MADE FROM SCRATCH.
//IF YOU TAKE A PRE-MADE COMPONENT FROM MUI/BOOTSTRAP/INTERNET,
//THEN YOU'D USE YOUR COMPONENT HERE
//THE CRUCIAL PART STARTS FROM THE RENDERING PART (LN 41)

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

    console.log("This is data from Slider2: ")
    console.log(data)
//WHAT IS INTERESTING HERE IS THAT WE HAVE A DATA ARRAY PASSED INTO THE
//SLIDER TO MAP THE DATA ONTO EACH HOUR-CARD (SEE LN 53).
//WE ARE JUST PASSING IN PROP "data", BUT ACTUALLY THE ARRAY IS DIFFERENT ACCORDING TO THE TAB/THE DAY SELECTED.
//THAT DIVERGING OF PATHS HAPPENED IN THE COMPONENT "SAKID.JSX", IN LINES 92, 95 & 98
    return (
        <div className="carousel">
            <div className="arrowblock">
                <ArrowBackIosIcon className="arrow back" onClick={handleBack}/>
            </div>
            <div className="frame">
                <div className="slider" style={position}>
                    {data.map((item, index) => (
                        <OneHour2
                            key={index}
                            date={item.time.split(" ")[0]}
                            hour={item.time.split(" ")[1]}
                            icon={item.condition.icon}
                            condition={item.condition.text}
                            temp={item.temp_c}
                            rain={item.precip_mm}
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


