import * as React from 'react';
import Header from "../componants/Header";
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Request from "../sections/request/Index";
import "./style.css";
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



export default function Home() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <>
            <Header />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  style={{backgroundColor:"#23282a"}}>
                        <Tab icon={<span className="request"/>}  label={<span style={{ color: 'white' }}>Request</span>} {...a11yProps(0)} />
                        <Tab icon={<span className="order"/>} label={<span style={{ color: 'white' }}>Orders</span>} {...a11yProps(1)} />
                        <Tab icon={<span className="finance"/>} label={<span style={{ color: 'white' }}>Finance</span>} {...a11yProps(2)} />
                        <Tab icon={<span className="client"/>} label={<span style={{ color: 'white' }}>Clients</span>} {...a11yProps(3)} />
                        <Tab icon={<span className="carrier"/>} label={<span style={{ color: 'white' }}>Carriers</span>} {...a11yProps(4)} />
                        <Tab icon={<span className="report"/>} label={<span style={{ color: 'white' }}>Reports</span>} {...a11yProps(5)} />
                        <Tab icon={<span className="task"/>} label={<span style={{ color: 'white' }}>Tasks</span>} {...a11yProps(6)} />
                        <Tab icon={<span className="setting"/>} label={<span style={{ color: 'white' }}>Settings</span>} {...a11yProps(7)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Request />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>

        </>
    );
}