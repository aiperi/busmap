import React from 'react';
import Box from "@mui/material/Box";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import {yellow} from "../../colors";
import {BusNumberWrapper} from "../../assets/styles/trackingWrapper/trackingWrapper";
import {Divider, Grid, Typography} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import {TabsButton} from "../../assets/styles/tabs/tabs";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import PagesIcon from "@mui/icons-material/Pages";
import NoTransferIcon from "@mui/icons-material/NoTransfer";
import Tooltip from "@mui/material/Tooltip";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import ReactToPrint from "react-to-print";
import Button from "@mui/material/Button";
import PrintIcon from "@mui/icons-material/Print";
import {ComponentToPrint} from "../../components/PrintRides/PrintRides";
import {RidesObjBox} from "../../assets/styles/rides/rides";

const SingleRide = () => {
    const [dateValue, setDateValue] = React.useState(new Date());

    const data3 = [
        {time: "13:33 - 14:15", numberObj: "O1584AD", done: "true"},
        {time: "14:23 - 15:15", numberObj: "O7754AD", done: "true"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "false"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "false"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "true"},
        {time: "16:42 - 16:55", numberObj: "O1650AD", done: "false"},
    ]

    return (
        <Grid container sx={{backgroundColor:"whitesmoke"}}>
            <Grid container direction={'row'} alignItems={"center"} sx={{backgroundColor:"white"}}>
                <Box
                    sx={{
                        padding: '10px',
                        display: "flex",
                        alignItems: "center",
                        width: "40%"
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

                <Grid item width={"20%"} justifyContent={'right'}>
                    <TabsButton variant="outlined"><AssignmentTurnedInIcon/></TabsButton>
                    <TabsButton variant="outlined"><BusAlertIcon/></TabsButton>
                    <TabsButton variant="outlined"><PagesIcon/></TabsButton>
                    <TabsButton variant="outlined"><NoTransferIcon/></TabsButton>

                </Grid>

                <Grid item container width={"10%"} direction={"row"}>
                    <Tooltip title="Задействованные объекты" arrow>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <TabsButton variant="outlined">
                            <DepartureBoardIcon
                                sx={{
                                    color: "darkgray",
                                    width: "20px",
                                    fontSize: "50px"
                                }}/>
                            <span>11</span>
                            </TabsButton>
                        </Box>
                    </Tooltip>
                    <Tooltip title="Печать" arrow>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
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
                                // content={() => componentRef}
                            />
                            {/*<div style={{ display: "none" }}>*/}
                            {/*    <ComponentToPrint children={data} ref={(el) => (componentRef = el)} />*/}
                            {/*</div>*/}
                        </Box>
                    </Tooltip>
                </Grid>


            </Grid>
            <Grid container sx={{padding:"10px", backgroundColor:"white", margin:"10px"}}>
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

        </Grid>
    );
};

export default SingleRide;