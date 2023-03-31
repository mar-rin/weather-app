import React from "react";
import Slider2 from "./Slider2"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//TABS COMPONENT FROM MUI
//IGNORE THE FIRST STYLING PART; FOR ESSENTIAL PARTS, SEE LN 46 BELOW

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

//WE ARE PASSING IN 2 PROPS: "city" AND "data"
//BOTH COME DOWN FROM THE APP.JSX LEVEL.
//"city" IS USED TO CHANGE THE SLIDER TITLE (SEE LN 75)
//"data" ARRAY IS SPLIT HERE INTO DAYS. AGAIN, THIS COULD HAVE BEEN DONE ALREADY IN APP.JSX,
// -- DOES NOT GREATLY MATTER. SAME PRINCIPLE. GET A BIG DATA OBJECT FROM THE API,
//SPLIT IT DOWN FOR THE CHUNKS WE ACTUALLY NEED

export default function Sakid({city, data}) {
//useStates that come with MUI TABS template
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

//SPLIT THE MAPPED DATA OBJECT FROM APP.JSX INTO THREE DAYS
//THEN PASS THESE ARRAYS DOWN INTO THE THREE TABS, SEE LN 92, 95, 98
    let day1 = [];
    let day2 = [];
    let day3 = [];

    if (data) {
        day1 = data[0].hour;
        day2 = data[1].hour;
        day3 = data[2].hour;
    }

    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <h1>Weather in {city}</h1>
                <Box sx={{ width: '400px' }} className="box">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Day 1" {...a11yProps(0)} />
                            <Tab label="Day 2" {...a11yProps(1)} />
                            <Tab label="Day 3" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Slider2 data={day1}/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Slider2 data={day2}/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Slider2 data={day3}/>
                    </TabPanel>
                </Box>
            </Grid>
        </div>
    );
}

