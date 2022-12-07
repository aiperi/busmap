import React from 'react';
import {Grid, Typography} from "@mui/material";
import {BusNumberWrapper, TrackingContainer} from "../../assets/styles/trackingWrapper/trackingWrapper";
import Box from "@mui/material/Box";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {yellow} from "../../colors";
import {makeStyles} from "@mui/styles";
import lineImg from '../../assets/images/line.png'

const useStyle = makeStyles(theme => ({
    stopItem: {
        display: "inline-block",
        height: "71px",
        paddingTop: "7px",
        position: "relative",
        verticalAlign: "top",
        width: "67px",
    },
    circle: {
        backgroundColor: "#ffffff",
        border: "1px solid #999da8",
        borderRadius: "50%",
        height: "12px",
        left: "19px",
        position: 'absolute',
        top: "35px",
        width: "12px"
    },

    line: {
        backgroundImage: `url(${lineImg})`,
        backgroundPosition: "center",
        height: "1px",
        position: "absolute",
        top: "40px",

    },

    left: {
        left: "-5px",
        right: "48px",
    },

    right: {
        left: "32px",
        right: "3px",
    },
    number: {
        color: "rgba(45,44,51,.7)",
        fontSize: "12px",
        lineHeight: "25px",
        marginLeft: "15px",
        textAlign: "center",
        width: "20px",
    },

    invisible:{
        display:"none",
    }

}))

const TrackingStops = () => {
    const classes = useStyle();
    const stopsNumber = 33;
    const stopsNumber2 = 48;
    return (
        <Grid container sx={{backgroundColor: "#e9ecef"}}>
            <TrackingContainer>
                <Box sx={{padding: '10px', display: "flex", alignItems: "center", borderBottom: "1px solid lightgrey", marginBottom:"20px"}}>
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
                        ул. Абакир уулу Торобек — ул. Абакир уулу Торобек
                    </Typography>
                </Box>
                <Grid container sx={{padding:'10px'}}>
                    { Array.from(Array(stopsNumber)).map((elementInArray, i) => (
                        <div className={classes.stopItem} key={i}>
                            <div className={classes.circle}>
                            </div>
                            <div className={`
                                ${classes.line} 
                                ${classes.left} 
                                ${i===0 &&  classes.invisible} 
                                `}>
                            </div>
                            <div className={`
                            ${classes.line} 
                            ${classes.right} 
                            ${i===stopsNumber-1 && classes.invisible} 
                            `}>
                            </div>
                            <div className={classes.number}>{i+1}</div>
                        </div>
                    ))}

                </Grid>
            </TrackingContainer>
            <TrackingContainer>
                <Box sx={{padding: '10px', display: "flex", alignItems: "center", borderBottom: "1px solid lightgrey", marginBottom:"20px"}}>
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
                <Grid container sx={{padding:'10px'}}>
                    { Array.from(Array(stopsNumber2)).map((elementInArray, i) => (
                        <div className={classes.stopItem} key={i}>
                            <div className={classes.circle}>
                            </div>
                            <div className={`
                                ${classes.line} 
                                ${classes.left} 
                                ${i===0 &&  classes.invisible} 
                                `}>
                            </div>
                            <div className={`
                            ${classes.line} 
                            ${classes.right} 
                            ${i===stopsNumber2-1 && classes.invisible} 
                            `}>
                            </div>
                            <div className={classes.number}>{i+1}</div>
                        </div>
                    ))}

                </Grid>
            </TrackingContainer>
        </Grid>
    );
};

export default TrackingStops;