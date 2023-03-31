import React, { useState } from "react";
import OneHour2 from "./OneHour2"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Slider2 ({ data }){

    const [counter, setCounter] = useState(1);
    const [position, setPosition] = useState({})

    function handleBack(){
        if(counter > 0){
            const move = (counter-2) * 320;
            setPosition({translate: "-" + move + "px"});
            const newCounter = counter -1
            setCounter(newCounter);
            console.log("Counter: " + counter)
            console.log("Move: " + move)
            console.log("Position: " + position["translate"])
        } else {
            console.log("Cannot go back")
        }
    }

    function handleForward(){
        if(counter < 21){
            const move = (counter+1) * 320;
            setPosition({translate: "-" + move + "px"});
            setCounter(counter + 1);
            console.log("Counter: " + counter)
            console.log("Move: " + move)
            console.log("Position: " + position["translate"])
        } else {
            console.log("Cannot go forward")
        }
    }


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


