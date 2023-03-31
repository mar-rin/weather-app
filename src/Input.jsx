import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

//COMPONENT FOR RENDERING THE BASIC TEXT FIELD + BUTTON FROM MUI
//WE ARE PASSING IN TWO PROPS:
// 1) onChange FOR GRABBING THE USER INPUT;
// 2) handleSubmit FOR DOING THE FETCHING (SEE APP.JSX)
export default function Input({onChange, handleSubmit}){
    return (
        <div className="container">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className="top-form">
                    <TextField
                        id="filled-basic"
                        label="Enter city"
                        variant="filled"
                        onChange={onChange} />
                    <Button style={{minWidth: '60px'}}
                            className="buttone"
                            variant="contained"
                            onClick={handleSubmit}
                            size="medium">Submit</Button>
                </div>
            </Box>
        </div>
    )
}