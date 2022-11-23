import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import moment from "moment/moment";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import PagesIcon from '@mui/icons-material/Pages';
import NoTransferIcon from '@mui/icons-material/NoTransfer';
import {makeStyles} from "@mui/styles";
import {useNavigate} from "react-router-dom";
import {busStops, rides, routes, tracking} from "../../paths";
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {fetchStopsRequest} from "../../store/actions/stopsActions";
import {useDispatch} from "react-redux";


const useStyles = makeStyles(theme => ({
    box: {
        width: "25%",
        border: "1px solid lightgrey",
        padding: "10px",
        display: "flex",
        alignItems: 'center',
        '&:hover': {
            backgroundColor: "#EAECEC"
        }
    },
    boxRoutes: {
        width: "22.5%",
        border: "1px solid lightgrey",
        padding: "10px",
        display: "flex",
        alignItems: 'center',
        '&:hover': {
            backgroundColor: "#EAECEC"
        }
    },
    boxRoutesMinWidth: {
        width: "10%",
        border: "1px solid lightgrey",
        padding: "10px",
        display: "flex",
        alignItems: 'center',
        '&:hover': {
            backgroundColor: "#EAECEC"
        }
    },

    parentBox: {
        backgroundColor: "whitesmoke",
        padding: "10px",
    },
    onHover:{
        border: "1px solid lightgrey",
        padding: "10px",
        '&:hover':{
    backgroundColor: "#EAECEC"
},

    },
    iconWrapper: {
        marginRight: "10px",
    },
    blue: {
        backgroundColor: "#6077A0"
    },

}))


const Dashboard = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const date = new Date();
    const currentDate = moment(date).format('DD-MM-YYYY');
    const hour = date.getHours() + ":" + date.getMinutes();



    const percentage = 78;

    const onRidesClick = () => {
        navigate(rides)
    }
    const onRoutesClick = () => {
        navigate(routes)
    }

    const onTrackingClick = () => {
        navigate(tracking)
    }

    const onStopsClick = () => {
        navigate(busStops)
    }

    return (
        <Grid container>
            <Grid item container justifyContent={"space-between"} style={{padding: "5px 10px"}}>
                <Typography variant={"h6"}>Обзор</Typography>
                <p>{hour} <span style={{display: "block", fontSize: '11px'}}> {currentDate}</span></p>
            </Grid>
            <Grid item container>
                <Typography variant={"subtitle2"} style={{
                    border: "1px solid lightgrey",
                    padding: "5px 10px",
                    width: "100%"
                }}>Рейсы</Typography>
                <Grid container className={classes.parentBox} direction={"row"}>
                    <Grid item className={classes.box} onClick={onRidesClick}>
                        <div className={classes.iconWrapper}>
                            <AssignmentTurnedInIcon
                                sx={{
                                    color: "#387325",
                                    fontSize: "25px",
                                }}
                            />
                        </div>
                        <p><b>277</b> <span style={{display: 'block', fontSize: '13px'}}>Осталось на сегодня</span></p>
                    </Grid>
                    <Grid item className={classes.box}>
                        <div className={classes.iconWrapper}>
                            <BusAlertIcon
                                sx={{
                                    color: "#6077A0",
                                    fontSize: "25px",
                                }}
                            />
                        </div>
                        <p><b>15</b> <span style={{display: 'block', fontSize: '13px'}}>Активные сейчас</span></p>
                    </Grid>
                    <Grid item className={classes.box}>
                        <div className={classes.iconWrapper}>
                            <PagesIcon
                                sx={{
                                    color: "#914F7C",
                                    fontSize: "25px",
                                }}
                            />
                        </div>
                        <p><b>36</b> <span style={{display: 'block', fontSize: '13px'}}>Пересекающиеся</span></p>
                    </Grid>
                    <Grid item className={classes.box}>
                        <div className={classes.iconWrapper}>
                            <NoTransferIcon
                                sx={{
                                    color: "#A78754",
                                    fontSize: "25px",
                                }}
                            />
                        </div>
                        <p><b>5</b><span style={{display: 'block', fontSize: '13px'}}>Без объекта</span></p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container>
                <Typography variant={"subtitle2"} style={{
                    border: "1px solid lightgrey",
                    padding: "5px 10px",
                    width: "100%"
                }}>Слежение</Typography>
                <Grid container className={classes.parentBox} direction={"row"} flexWrap={"wrap"}>
                    <Grid item className={classes.boxRoutesMinWidth} onClick={onTrackingClick}>
                        <p><b>277</b> <span style={{display: 'block', fontSize: '13px'}}>Все</span></p>
                    </Grid>
                    <Grid item className={classes.boxRoutes}>
                        <div style={{width: "50px", height: "50px", marginRight: '10px'}}>
                            <CircularProgressbar
                                value={percentage}
                                text={`78`}
                                strokeWidth={15}
                                styles={buildStyles({
                                    rotation: 0,
                                    strokeLinecap: 'butt',
                                    textSize: '25px',
                                    textColor: "black",
                                    trailColor: 'lightgrey',
                                    pathColor: 'rgb(255, 95, 95)'
                                })}
                            />

                        </div>
                        <p style={{display: "flex", alignItems: "center"}}>
                            <div style={{
                                height: '8px',
                                width: '8px',
                                borderRadius: '50%',
                                backgroundColor: "rgb(255, 95, 95)",
                                marginRight: "5px"
                            }}></div>
                            <span style={{display: 'block', fontSize: '13px'}}>С отставанием</span></p>
                    </Grid>
                    <Grid item className={classes.boxRoutes}>
                        <div style={{width: "50px", height: "50px", marginRight: '10px'}}>
                            <CircularProgressbar
                                value={36}
                                text={`36`}
                                strokeWidth={15}
                                styles={buildStyles({
                                    rotation: 0,
                                    strokeLinecap: 'butt',
                                    textSize: '25px',
                                    textColor: "black",
                                    trailColor: 'lightgrey',
                                    pathColor: 'rgb(255, 181, 17)'
                                })}
                            />

                        </div>
                        <p style={{display: "flex", alignItems: "center"}}>
                            <div style={{
                                height: '8px',
                                width: '8px',
                                borderRadius: '50%',
                                backgroundColor: "rgb(255, 181, 17)",
                                marginRight: "5px"
                            }}></div>
                            <span style={{display: 'block', fontSize: '13px'}}>С опережением</span></p>
                    </Grid>
                    <Grid item className={classes.boxRoutes}>
                        <div style={{width: "50px", height: "50px", marginRight: '10px'}}>
                            <CircularProgressbar
                                value={10}
                                text={`10`}
                                strokeWidth={15}
                                styles={buildStyles({
                                    rotation: 0,
                                    strokeLinecap: 'butt',
                                    textSize: '25px',
                                    textColor: "black",
                                    trailColor: 'lightgrey',
                                    pathColor: '#6077A0'
                                })}
                            />

                        </div>
                        <p style={{display: "flex", alignItems: "center"}}>
                            <div style={{
                                height: '8px',
                                width: '8px',
                                borderRadius: '50%',
                                backgroundColor: "#6077A0",
                                marginRight: "5px"
                            }}></div>
                            <span style={{display: 'block', fontSize: '13px'}}>Невыезд</span></p>
                    </Grid>
                    <Grid item className={classes.boxRoutes}>
                        <div style={{width: "50px", height: "50px", marginRight: '10px'}}>
                            <CircularProgressbar
                                value={5}
                                text={`5`}
                                strokeWidth={15}
                                styles={buildStyles({
                                    rotation: 0,
                                    strokeLinecap: 'butt',
                                    textSize: '25px',
                                    textColor: "black",
                                    trailColor: 'lightgrey',
                                    pathColor: '#63F84C'
                                })}
                            />

                        </div>
                        <p style={{display: "flex", alignItems: "center"}}>
                            <div style={{
                                height: '8px',
                                width: '8px',
                                borderRadius: '50%',
                                backgroundColor: "#63F84C",
                                marginRight: "5px"
                            }}></div>
                            <span style={{display: 'block', fontSize: '13px'}}>Без объекта</span></p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container justifyContent={"space-between"}>
                <Grid item style={{width:"40%", height:'100%'}}>
                    <Typography variant={"subtitle2"} style={{
                        border: "1px solid lightgrey",
                        padding: "5px 10px",
                        width: "100%",
                        display:"block"
                    }}>Остановки</Typography>
                    <Grid item container className={`${classes.parentBox} ${classes.onHover}`} justifyContent={"center"} onClick={onStopsClick}>
                        <div style={{width: "200px", height: "200px", marginRight: '10px'}}>
                            <CircularProgressbar
                                value={10}
                                text={`10`}
                                strokeWidth={15}
                                styles={buildStyles({
                                    rotation: 0,
                                    strokeLinecap: 'butt',
                                    textSize: '25px',
                                    textColor: "black",
                                    trailColor: 'lightgrey',
                                    pathColor: 'rgb(50, 167, 84)'
                                })}
                            />
                        </div>
                        <p style={{display: "flex", alignItems: "center"}}>
                            <div style={{
                                height: '8px',
                                width: '8px',
                                borderRadius: '50%',
                                backgroundColor: "rgb(50, 167, 84)",
                                marginRight: "5px"
                            }}></div>
                            <span style={{display: 'block', fontSize: '13px'}}>Автобусы</span></p>
                    </Grid>
                </Grid>
                <Grid item container style={{width:"58%", height:'100%'}}>
                    <Typography variant={"subtitle2"} style={{
                        border: "1px solid lightgrey",
                        padding: "5px 10px",
                        display:'block',
                        width: "100%"
                    }}>Маршруты</Typography>
                    <Grid item container className={`${classes.parentBox} ${classes.onHover}`} alignItems={"center"} justifyContent={"space-evenly"} onClick={onRoutesClick}>
                      <div style={{display:"flex", alignItems:"center"}}>
                          <div style={{width: "200px", height: "200px", marginRight: '10px'}}>
                              <CircularProgressbar
                                  value={744}
                                  text={`744`}
                                  strokeWidth={15}
                                  styles={buildStyles({
                                      rotation: 0,
                                      strokeLinecap: 'butt',
                                      textSize: '25px',
                                      textColor: "black",
                                      trailColor: 'lightgrey',
                                      pathColor: 'rgb(255, 181, 17)'
                                  })}
                              />
                          </div>
                          <div>
                              <p style={{display: "flex", alignItems: "center"}}>
                                  <div style={{
                                      height: '8px',
                                      width: '8px',
                                      borderRadius: '50%',
                                      backgroundColor: "rgb(255, 181, 17)",
                                      marginRight: "5px"
                                  }}></div>
                                  <span style={{display: 'block', fontSize: '13px'}}>Автобусы</span></p>
                              <p style={{display: "flex", alignItems: "center"}}>
                                  <div style={{
                                      height: '8px',
                                      width: '8px',
                                      borderRadius: '50%',
                                      backgroundColor: "#6077A0",
                                      marginRight: "5px"
                                  }}></div>
                                  <span style={{display: 'block', fontSize: '13px'}}>Маршрутные такси</span></p>
                          </div>
                      </div>
                        <Grid item style={{borderLeft:"1px solid lightgrey", paddingLeft:"50px"}}>
                            <p><b>3</b> <span style={{display: 'block', fontSize: '13px'}}>Деактивированные</span></p>
                            <p><b>44</b> <span style={{display: 'block', fontSize: '13px'}}>Расписания</span></p>
                            <p><b>1</b> <span style={{display: 'block', fontSize: '13px'}}>Без расписания</span></p>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    );
};

export default Dashboard;