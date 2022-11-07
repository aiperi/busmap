import React, {useRef} from 'react';
import {Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import CommuteIcon from "@mui/icons-material/Commute";
import {blue, green, pink, yellow} from "../../colors";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import TramIcon from "@mui/icons-material/Tram";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import TextField from '@mui/material/TextField';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import moment from "moment/moment";
import {TabsButton, TabsContainer} from "../../assets/styles/tabs/tabs";
import {RidesContainer, RidesObjBox} from "../../assets/styles/rides/rides";
import Box from "@mui/material/Box";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import {BusNumberWrapper} from "../../assets/styles/trackingWrapper/trackingWrapper";
import {makeStyles} from "@mui/styles";
import Tooltip from '@mui/material/Tooltip';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PrintIcon from '@mui/icons-material/Print';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import ReactToPrint from "react-to-print";
import Button from "@mui/material/Button";
import {ComponentToPrint} from "../../components/PrintRides/PrintRides";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import PagesIcon from '@mui/icons-material/Pages';
import NoTransferIcon from '@mui/icons-material/NoTransfer';

const useStyle = makeStyles(() => ({
    doneRides: {
        backgroundColor: 'lightgray',
        borderColor: "darkgray"
    }
}))


const Rides = () => {
    const classes = useStyle();
    let componentRef=useRef();
    const [type, setType] = React.useState('Маршруты');
    // const date = new Date();
    // const currentDate = moment(date).format('DD/MM/YYYY');
    const [dateValue, setDateValue] = React.useState(new Date());

    const data = [
        {time: "13:33 - 14:15", numberObj: "O1584AD", done: "true"},
        {time: "14:23 - 15:15", numberObj: "O7754AD", done: "true"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "false"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "true"},
        {time: "17:33 - 17:28", numberObj: "O8862AD", done: "false"},
        {time: "13:33 - 14:15", numberObj: "O1584AD", done: "false"},
        {time: "16:12 - 17:15", numberObj: "O4384AD", done: "false"},
        {time: "17:54 - 18:25", numberObj: "O2324AD", done: "true"},
    ]

    const data2 = [
        {time: "13:33 - 14:15", numberObj: "O1584AD", done: "true"},
        {time: "14:23 - 15:15", numberObj: "O7754AD", done: "true"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "false"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "false"},
    ]

    const data3 = [
        {time: "13:33 - 14:15", numberObj: "O1584AD", done: "true"},
        {time: "14:23 - 15:15", numberObj: "O7754AD", done: "true"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "false"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "false"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "true"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "false"},
    ]


    const handleChange = (event) => {
        setType(event.target.value);
    };

    const style = {
        fontSize: "18px",
        marginRight: "10px"
    }

    const transportArray = [
        {
            id: 1, icon: <CommuteIcon
                sx={{...style, color: blue}}
            />, name: "Все"
        },
        {
            id: 2, icon: <DirectionsBusFilledIcon
                sx={{...style, color: green}}
            />, name: "Автобусы"
        },
        {
            id: 3, icon: <DirectionsTransitIcon
                sx={{...style, color: blue}}
            />, name: "Тролейбусы"
        },
        {
            id: 4, icon: <TramIcon
                sx={{...style, color: pink}}
            />, name: "Трамваи"
        },
        {
            id: 5, icon: <LocalTaxiIcon
                sx={{...style, color: yellow}}
            />, name: "Маршрутные такси"
        },
    ]


    return (
        <>
            <TabsContainer>
                <Grid container sx={{marginTop: "5px"}}>
                    <Grid item sx={{width: '10%'}}>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Тип"
                                    onChange={handleChange}
                                    sx={{ height: "43px"}}
                                >
                                    <MenuItem value={"Маршруты"} defaultValue>Маршруты</MenuItem>
                                    <MenuItem value={"Объекты"}>Объекты</MenuItem>
                                    <MenuItem value={"Выпуски"}>Выпуски</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item sx={{width: '20%'}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Тип"
                                // defaultValue=""
                                onChange={handleChange}
                                sx={{ height: "43px"}}
                            >
                                {transportArray.map((item) => (
                                    <MenuItem key={item.id} id={item.id}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sx={{width: '30%'}}>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                                label="Дата"
                                value={dateValue}
                                inputFormat="DD/MM/YYYY"
                                onChange={(newValue) => {
                                    setDateValue(newValue);
                                }}
                                renderInput={
                                (params) => <TextField {...params} sx={{input: {color: 'black', height:"10px"}}}/>}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item width={"33%"} justifyContent={'right'}>
                            <TabsButton variant="outlined"><AssignmentTurnedInIcon/></TabsButton>
                            <TabsButton variant="outlined"><BusAlertIcon/></TabsButton>
                            <TabsButton variant="outlined"><PagesIcon/></TabsButton>
                            <TabsButton variant="outlined"><NoTransferIcon/></TabsButton>

                    </Grid>
                </Grid>
            </TabsContainer>
            <Grid container sx={{backgroundColor: "#e9ecef"}}>
                <RidesContainer>
                    <Grid container sx={{borderBottom: "1px solid lightgrey", marginBottom: "20px",}}>
                        <Box
                            sx={{
                                padding: '10px',
                                display: "flex",
                                alignItems: "center",
                                width: "88%"
                            }}>
                            <DirectionsBusIcon
                                sx={{
                                    color: yellow,
                                    fontSize: "30px",
                                    width: '60px'
                                }}/>
                            <BusNumberWrapper>
                                <p>212</p>
                            </BusNumberWrapper>
                            <Typography variant={'h5'} sx={{paddingBottom: "5px"}}>
                                ул. Иса Ахунбаева — ул. Иса Ахунбаева
                            </Typography>
                        </Box>

                        <Box width="12%" display="flex" alignItems={'center'} justifyContent={"space-evenly"}
                             alignContent={"center"}>
                            <Tooltip title="Все рейсы" arrow>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <BeenhereIcon
                                        sx={{
                                            color: "darkgray",
                                            width: "20px",
                                            fontSize: "50px",
                                            lineHeight: 1.5
                                        }}></BeenhereIcon>
                                    <span>{data.length}</span>
                                </Box>
                            </Tooltip>
                            <Tooltip title="Задействованные объекты" arrow>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>

                                    <DepartureBoardIcon
                                        sx={{
                                            color: "darkgray",
                                            width: "20px",
                                            fontSize: "50px"
                                        }}/>
                                    <span>{data.length}</span>

                                </Box>
                            </Tooltip>
                            <Tooltip title="Печать" arrow>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Divider orientation="vertical" flexItem/>
                                    <ReactToPrint
                                        trigger={() => <Button><PrintIcon
                                            sx={{
                                                color: "darkgray",
                                                width: "30px",
                                                height:"30px",
                                                fontSize: "50px",
                                                marginLeft: "20px",
                                                border: "1px solid lightgray"
                                            }}/></Button>}
                                        content={() => componentRef}
                                    />
                                    <div style={{ display: "none" }}>
                                        <ComponentToPrint children={data} ref={(el) => (componentRef = el)} />
                                    </div>
                                </Box>
                            </Tooltip>
                        </Box>
                    </Grid>
                    <Grid container sx={{padding: '10px'}}>
                        {data.map(obj => (
                            <Tooltip title={obj.done !== 'false' ? 'Рейс завершен' : 'Еще не завершен'} arrow>
                                <RidesObjBox
                                    sx={{
                                        backgroundColor: obj.done !== 'false' ? '#D8E1FF' : '#ffff',
                                        color: obj.done === 'true' && 'darkgray',
                                        position:"relative"
                                    }}
                                >
                                    <Box>
                                        <p>{obj.time}</p>
                                        <p>{obj.numberObj}</p>
                                    </Box>
                                    {/*<EditRidesBox>*/}
                                    {/*    <p>{obj.time}</p>*/}
                                    {/*    <p>{obj.numberObj}</p>*/}
                                    {/*</EditRidesBox>*/}

                                </RidesObjBox>
                            </Tooltip>
                        ))}
                    </Grid>
                </RidesContainer >
                <RidesContainer>
                    <Grid container sx={{borderBottom: "1px solid lightgrey", marginBottom: "20px",}}>
                        <Box
                            sx={{
                                padding: '10px',
                                display: "flex",
                                alignItems: "center",
                                width: "88%"
                            }}>
                            <DirectionsBusIcon
                                sx={{
                                    color: yellow,
                                    fontSize: "30px",
                                    width: '60px'
                                }}/>
                            <BusNumberWrapper>
                                <p>102</p>
                            </BusNumberWrapper>
                            <Typography variant={'h5'} sx={{paddingBottom: "5px"}}>
                                ул. Манаса — ул.Абдрахманова
                            </Typography>
                        </Box>

                        <Box width="12%" display="flex" alignItems={'center'} justifyContent={"space-evenly"}
                             alignContent={"center"}>
                            <Tooltip title="Все рейсы" arrow>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <BeenhereIcon
                                        sx={{
                                            color: "darkgray",
                                            width: "20px",
                                            fontSize: "50px",
                                            lineHeight: 1.5
                                        }}/>
                                    <span>{data2.length}</span>
                                </Box>
                            </Tooltip>
                            <Tooltip title="Задействованные объекты" arrow>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>

                                    <DepartureBoardIcon
                                        sx={{
                                            color: "darkgray",
                                            width: "20px",
                                            fontSize: "50px"
                                        }}/>
                                    <span>{data2.length}</span>

                                </Box>
                            </Tooltip>
                            <Tooltip title="Печать" arrow>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Divider orientation="vertical" flexItem/>
                                    <ReactToPrint
                                        trigger={() => <Button><PrintIcon
                                            sx={{
                                                color: "darkgray",
                                                width: "30px",
                                                height:"30px",
                                                fontSize: "50px",
                                                marginLeft: "20px",
                                                border: "1px solid lightgray"
                                            }}/></Button>}
                                        content={() => componentRef}
                                    />
                                    <div style={{ display: "none" }}>
                                        <ComponentToPrint children={data2} ref={(el) => (componentRef = el)} />
                                    </div>
                                </Box>
                            </Tooltip>
                        </Box>
                    </Grid>
                    <Grid container sx={{padding: '10px'}}>
                        {data2.map(obj => (
                            <Tooltip title={obj.done !== 'false' ? 'Рейс завершен' : 'Еще не завершен'} arrow>
                                <RidesObjBox
                                    sx={{
                                        backgroundColor: obj.done !== 'false' ? '#D8E1FF' : '#ffff',
                                        color: obj.done === 'true' && 'darkgray'
                                    }}>
                                    <p>{obj.time}</p>
                                    <p>{obj.numberObj}</p>
                                </RidesObjBox>
                            </Tooltip>
                        ))}
                    </Grid>
                </RidesContainer>
                <RidesContainer>
                    <Grid container sx={{borderBottom: "1px solid lightgrey", marginBottom: "20px",}}>
                        <Box
                            sx={{
                                padding: '10px',
                                display: "flex",
                                alignItems: "center",
                                width: "88%"
                            }}>
                            <DirectionsBusIcon
                                sx={{
                                    color: yellow,
                                    fontSize: "30px",
                                    width: '60px'
                                }}/>
                            <BusNumberWrapper>
                                <p>102</p>
                            </BusNumberWrapper>
                            <Typography variant={'h5'} sx={{paddingBottom: "5px"}}>
                                ул. Молодая Гвардия — ул.Дзержинского
                            </Typography>
                        </Box>

                        <Box width="12%" display="flex" alignItems={'center'} justifyContent={"space-evenly"}
                             alignContent={"center"}>
                            <Tooltip title="Все рейсы" arrow>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <BeenhereIcon
                                        sx={{
                                            color: "darkgray",
                                            width: "20px",
                                            fontSize: "50px",
                                            lineHeight: 1.5
                                        }}/>
                                    <span>{data3.length}</span>
                                </Box>
                            </Tooltip>
                            <Tooltip title="Задействованные объекты" arrow>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>

                                    <DepartureBoardIcon
                                        sx={{
                                            color: "darkgray",
                                            width: "20px",
                                            fontSize: "50px"
                                        }}/>
                                    <span>{data3.length}</span>

                                </Box>
                            </Tooltip>
                            <Tooltip title="Печать" arrow>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Divider orientation="vertical" flexItem/>
                                    <ReactToPrint
                                        trigger={() => <Button><PrintIcon
                                            sx={{
                                                color: "darkgray",
                                                width: "30px",
                                                height:"30px",
                                                fontSize: "50px",
                                                marginLeft: "20px",
                                                border: "1px solid lightgray"
                                            }}/></Button>}
                                        content={() => componentRef}
                                    />
                                    <div style={{ display: "none" }}>
                                        <ComponentToPrint children={data3} ref={(el) => (componentRef = el)} />
                                    </div>
                                </Box>
                            </Tooltip>
                        </Box>
                    </Grid>
                    <Grid container sx={{padding: '10px'}}>
                        {data3.map(obj => (
                            <Tooltip title={obj.done !== 'false' ? 'Рейс завершен' : 'Еще не завершен'} arrow>
                                <RidesObjBox
                                    sx={{
                                        backgroundColor: obj.done !== 'false' ? '#D8E1FF' : '#ffff',
                                        color: obj.done === 'true' && 'darkgray'
                                    }}>
                                    <p>{obj.time}</p>
                                    <p>{obj.numberObj}</p>
                                </RidesObjBox>
                            </Tooltip>
                        ))}
                    </Grid>
                </RidesContainer>
            </Grid>
        </>
    );
};

export default Rides;