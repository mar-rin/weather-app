import React from "react";
import Slider from "./Slider";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function Sakid({city, data}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const day1 = data.slice(0,24);
    const day2 = data.slice(24,48);
    const day3 = data.slice(48,72);

    return (
        <div>
            <h1>Weather in {city}</h1>
            <Box sx={{ width: '320px' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Day 1" {...a11yProps(0)} />
                        <Tab label="Day 2" {...a11yProps(1)} />
                        <Tab label="Day 3" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Slider data={day1}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Slider data={day2}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Slider data={day3}/>
                </TabPanel>
            </Box>
        </div>
    );
}

