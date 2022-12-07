import React, {useEffect, useState} from 'react';
import {Grid, IconButton, TextField, Typography} from "@mui/material";
import {TabsButton} from "../../../assets/styles/tabs/tabs";
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from "./checkbox";
import {useStyles} from "./style";
import {Object} from "./object";
import {Group} from "./groups";
import Tabs from "@mui/material/Tabs"
import Box from "@mui/material/Box";


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
                <Box sx={{ pt:1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const ObjectsTab = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container >

            <div style={{width: "31%", display: 'flex', alignItems: "center", justifyContent: "space-between"}}>
                <Typography variant={'subtitle2'}>
                    <b>Привязка объектов к маршруту</b>
                </Typography>
            </div>
            <div style={{width: "31%", color: "gray", display: "flex", alignItems: "center"}}>
                <Checkbox/>
                <Typography variant={"subtitle2"}>Автоматическое назначение объектов </Typography>
            </div>
            <div style={{width: "33%", display: 'flex', justifyContent: "right"}}>
                <Tabs value={value} onChange={handleChange}>
                    <TabsButton label="Обьекты"/>
                    <TabsButton  label="Группы"/>
                </Tabs>
            </div>
            <div style={{width:"1440px"}}>
                <TabPanel value={value} index={0}>
                    <Object/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                   <Group/>
                </TabPanel>
            </div>
        </Grid>
    );
};

export default ObjectsTab;