import React from 'react';
import {Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import verticalLineImg from "../../../assets/images/vertical-line.png";
import {TimeWrapper} from "../../../assets/styles/schedule/schedule";

const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
        height: "80vh",
    },

    streetsBox: {
        padding: "15px",
    },
    left: {
        height: "100%",
        left: "0",
        position: "absolute",
        textAlign: "right",
        top: "0",
        width: "60px",
    },

    right: {
        borderBottom: "1px solid #e6eaee",
        height: "100%",
        paddingRight: "10px",
        paddingTop: "14px",
    },
    index: {
        color: "rgba(45,44,51,.7)",
        fontSize: "12px",
        margin: "17px 7px 0 0",
    },

    prettyBorder: {
        backgroundImage: `url(${verticalLineImg})`,
        backgroundPositionX: "center",
        backgroundRepeat: "repeat-y",
        bottom: "0",
        left: "17px",
        position: "absolute",
        top: "2px",
        width: "12px",
    },

    circle: {
        backgroundColor: "#ffffff",
        border: "1px solid #999da8",
        borderRadius: "50%",
        height: "12px",
        marginTop: "16px",
        width: "12px",
    },
    prettyStopRow: {
        height: "65px",
        left: "0px",
        position: "relative",
        top: "0px",
        width: "100%",
        paddingLeft: "60px",
        zIndex: "30001",
        overflow:"hidden",
    },
    first:{
        top:"18px",
        marginTop:0,
    }
}));



const ScheduleTab = () => {
    const classes = useStyles();
    const stopsData = [
        {name: 'Ахунбаева', location: " 74.0050 65.000565"},
        {name: 'Исанова', location: " 74.0050 65.000565"},
        {name: 'Горький', location: " 74.0050 65.000565"},
        {name: "Ауэзова", location: " 74.0050 65.000565"},
        {name: "Турусбекова", location: " 74.0050 65.000565"},
        {name: "Ленина", location: " 74.0050 65.000565"},
        {name: "Пушкина", location: " 74.0050 65.000565"},
        {name: "Манаса", location: " 74.0050 65.000565"},
        {name: "Советская", location: " 74.0050 65.000565"},
        {name: "Абдрахманова", location: " 74.0050 65.000565"},
    ]
    return (
        <Grid container sx={{overflow: "auto", height: "80vh"}}>
            <Grid item width={"28%"} sx={{marginRight:"20px",}} >
                <div
                    style={{
                        margin:"5px 0",
                        borderBottom:"1px solid lightgrey",
                        color:"gray",
                        backgroundColor:'whitesmoke',
                        padding:"10px"}}>

                    <Typography variant={"body1"}>Количество остановок: {stopsData.length+1}</Typography>
                </div>
                {stopsData.map((stops, index) => (
                    <div className={classes.prettyStopRow} key={index}>
                        <div className={classes.left}>
                            <div className={classes.index}>
                                {index + 1}
                            </div>
                            <div className={`${classes.prettyBorder} ${index === 0 && classes.first}`}>
                                <div className={`${classes.circle} ${index === 0 && classes.first}`}></div>
                            </div>
                        </div>
                        <div className={classes.right}>
                            {stops.name}
                            <p><i style={{fontSize: "12px"}}>{stops.location}</i></p>
                        </div>
                    </div>
                ))}
            </Grid>
            <Grid item flexGrow={1}>
                <div
                    style={{
                        margin:"5px 0",
                        borderBottom:"1px solid lightgrey",
                        color:"gray",
                        backgroundColor:'whitesmoke',
                        padding:"10px"}}>
                    <Typography variant={"body1"}>Время: 00:00</Typography>
                </div>
                {stopsData.map((stops, index) => (
                    <div style={{borderBottom: "1px solid lightgrey", height:"65px", padding:"5px"}}>
                        <TimeWrapper >
                            <Typography textAlign={"center"} variant={'subtitle1'}>
                               <p>00:0{index}</p>
                            </Typography>
                        </TimeWrapper>
                    </div>

                ))}

            </Grid>
        </Grid>
    );
};

export default ScheduleTab;