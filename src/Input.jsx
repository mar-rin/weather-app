import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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