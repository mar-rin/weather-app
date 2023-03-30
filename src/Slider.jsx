import React, { useState } from "react";
import OneHour from "./OneHour"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Slider ({ data }){

    const [counter, setCounter] = useState(0);

    function handleBack(){
        if(counter === 0){
            console.log("Cannot go back")
        } else {
           setCounter(counter-1);
        }
    }

    function handleForward(){
        if(counter === 23){
            console.log("Cannot go forward")
        } else {
           setCounter(counter + 1);
        }
    }

    return (
        <div className="carousel">
            <div className="arrowblock">
                <ArrowBackIosIcon className="arrow back" onClick={handleBack}/>
            </div>
            <div className="cardblock">
                 <OneHour currentData={data[counter]}/>
            </div>
            <div className="arrowblock">
                 <ArrowForwardIosIcon className="arrow forward" onClick={handleForward}/>
            </div>

        </div>
    );
}


