import React from 'react';
import {Grid, Menu, Button, MenuItem, FormControl, InputLabel, Select} from "@mui/material";
import CommuteIcon from '@mui/icons-material/Commute';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import TramIcon from '@mui/icons-material/Tram';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import HotelIcon from '@mui/icons-material/Hotel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {makeStyles} from "@mui/styles";
import {blue, green, pink, yellow} from "../../colors";
import TrackingStops from "../../components/TrackingStops/TrackingStops";
import {TabsContainer} from "../../assets/styles/tabs/tabs";


const useStyle = makeStyles(theme=>({
box:{
    padding:"5px",
    borderRight: "0.5px solid lightgrey",
    width:'8%',
    fontSize:'13px',
    display:'flex',
    alignItems:"center",
},
}))

const Tracking = () => {
    const classes=useStyle();
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    const style={
        fontSize: "18px",
        marginRight: "10px"
    }

    const transportArray = [
        {id: 1, icon: <CommuteIcon
                sx={{...style, color: blue}}
            />, name: "Все"},
        {id: 2, icon: <DirectionsBusFilledIcon
                sx={{...style, color: green}}
            />, name: "Автобусы"},
        {id: 3, icon: <DirectionsTransitIcon
                sx={{...style, color: blue}}
            />, name: "Тролейбусы"},
        {id: 4, icon: <TramIcon
                sx={{...style, color: pink}}
            />, name: "Трамваи"},
        {id: 5, icon: <LocalTaxiIcon
                sx={{...style, color: yellow}}
            />, name: "Маршрутные такси"},
    ]

    const [type, setType] = React.useState( transportArray[0]);

    const handleChange = (event) => {
        // console.log(event.target.value)
        // const obj = JSON.parse(event.target.value);
        // console.log('parsed value', obj);
        // // setType(event.target.value);
    };



    return (
        <Grid>
            <TabsContainer>
                <Grid container sx={{marginTop:"5px"}}>
                    <Grid item sx={{width:'10%'}} >

                        <FormControl fullWidth className={classes.input}>
                            <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Тип"
                                // defaultValue=""
                                onChange={handleChange}
                            >
                                {transportArray.map((item)=>(
                                    <MenuItem key={item.id} id={item.id}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>

                        {/*<div>*/}
                        {/*    <Button*/}
                        {/*        id="basic-button"*/}
                        {/*        aria-controls={open ? 'basic-menu' : undefined}*/}
                        {/*        aria-haspopup="true"*/}
                        {/*        aria-expanded={open ? 'true' : undefined}*/}
                        {/*        onClick={handleClick}*/}
                        {/*        sx={{*/}
                        {/*            border: "1px solid lightgrey",*/}
                        {/*            padding: "5px",*/}
                        {/*            margin:'5px'*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        <CommuteIcon/>*/}
                        {/*    </Button>*/}
                        {/*    <Menu*/}
                        {/*        id="basic-menu"*/}
                        {/*        anchorEl={anchorEl}*/}
                        {/*        open={open}*/}
                        {/*        onClose={handleClose}*/}
                        {/*        MenuListProps={{*/}
                        {/*            'aria-labelledby': 'basic-button',*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        <MenuItem onClick={handleClose} sx={{fontSize: '13px'}}>*/}
                        {/*            <DirectionsBusFilledIcon*/}
                        {/*                sx={{*/}
                        {/*                    color: green,*/}
                        {/*                    fontSize: "13px",*/}
                        {/*                    marginRight: "10px"*/}
                        {/*                }}*/}
                        {/*            />*/}
                        {/*            Автобусы*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem onClick={handleClose} sx={{fontSize: '13px'}}>*/}
                        {/*            <DirectionsTransitIcon*/}
                        {/*                sx={{*/}
                        {/*                    color: blue,*/}
                        {/*                    fontSize: "13px",*/}
                        {/*                    marginRight: "10px"*/}
                        {/*                }}*/}
                        {/*            />*/}
                        {/*            Троллейбусы*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem onClick={handleClose} sx={{fontSize: '13px'}}>*/}
                        {/*            <TramIcon*/}
                        {/*                sx={{*/}
                        {/*                    color: pink,*/}
                        {/*                    fontSize: "13px",*/}
                        {/*                    marginRight: "10px",*/}
                        {/*                }}*/}
                        {/*            />*/}
                        {/*            Трамваи*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem onClick={handleClose} sx={{fontSize: '13px'}}>*/}
                        {/*            <LocalTaxiIcon*/}
                        {/*                sx={{*/}
                        {/*                    color: yellow,*/}
                        {/*                    fontSize: "13px",*/}
                        {/*                    marginRight: "10px",*/}
                        {/*                }}*/}
                        {/*            />*/}
                        {/*            Маршрутные такси*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem onClick={handleClose} sx={{fontSize: '13px'}}>*/}
                        {/*            <BusAlertIcon*/}
                        {/*                sx={{*/}
                        {/*                    color: blue,*/}
                        {/*                    fontSize: "13px",*/}
                        {/*                    marginRight: "10px",*/}
                        {/*                }}*/}
                        {/*            />*/}
                        {/*            Без типа*/}
                        {/*        </MenuItem>*/}
                        {/*    </Menu>*/}
                        {/*</div>*/}

                    </Grid>
                    <Grid item container sx={{padding:"5px", width:'80%', border:'1px solid lightgrey'}}>
                        <Grid item className={classes.box}>
                            <DirectionsBusFilledIcon
                                sx={{
                                    color: "darkgrey",
                                    fontSize: "13px",
                                    marginRight:"10px"
                                }}
                            />
                            242
                        </Grid>
                        <Grid item className={classes.box}>
                            <ArrowBackIcon
                                sx={{
                                    color: "darkgrey",
                                    fontSize: "13px",
                                    marginRight:"10px"
                                }}/>
                            16
                        </Grid>
                        <Grid item className={classes.box}>
                            <ArrowForwardIcon
                                sx={{
                                    color: "darkgrey",
                                    fontSize: "13px",
                                    marginRight:"10px"
                                }}
                            />
                            77
                        </Grid>
                        <Grid item className={classes.box}>
                            <BusAlertIcon
                                sx={{
                                    color: "darkgrey",
                                    fontSize: "13px",
                                    marginRight:"10px"
                                }}
                            />
                            0
                        </Grid>
                        <Grid item className={classes.box}>
                            <HotelIcon
                                sx={{
                                    color: "darkgrey",
                                    fontSize: "13px",
                                    marginRight:"10px"
                                }}
                            />
                            0
                        </Grid>
                    </Grid>
                </Grid>
            </TabsContainer>
            <TrackingStops/>
        </Grid>
    );
};

export default Tracking;