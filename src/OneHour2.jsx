import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function OneHour2 ({ date, hour, icon, condition, temp, rain }) {
    return (
        <Card sx={{ width: 240 }} className="cardio">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {date}
                </Typography>
                <Typography variant="h5" component="div">
                    {hour}
                </Typography>
                <div>
                  <img className="weather-icon" src={icon}/>
                </div>
                <Typography variant="body2">
                    <div className="section">
                        <b>Condition:</b> {condition}
                    </div>
                    <div className="section">
                        <b>Air temperature:</b> {temp} C
                    </div>
                    <div className="section">
                        <b>Precipitation, mm:</b> {rain}
                    </div>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default OneHour2;