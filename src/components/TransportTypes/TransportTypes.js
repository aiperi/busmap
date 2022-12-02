import React, {useEffect}from 'react';
import {Grid} from "@mui/material";
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import {makeStyles} from "@mui/styles";
import {
    fetchAllStopsCountRequest,
    fetchStopsForBusRequest, fetchStopsForTaxiRequest,
    fetchStopsForTrolleybusRequest,
    fetchStopsRequest, fetchUnknownStopsRequest
} from "../../store/actions/stopsActions";
import {useDispatch, useSelector} from "react-redux";
import './style.css'


const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        right: -15,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor: "#166767",
        width: "30px"
    },
}));

const useStyles = makeStyles(() => ({
    transportTypesBtn: {
        textTransform: "capitalize",
        color: "#166767",
        padding: "8px",
        '&:hover': {
            backgroundColor: "#98B8B8"
        },
    },

    active:{
        backgroundColor: "#98B8B8"
    }

}));

const TransportTypes = () => {
    const dispatch = useDispatch();
    const busStops = useSelector(state => state.stops.stops)
    const allStops = useSelector(state => state.stops.allStops)
    const stopsForBus = useSelector(state => state.stops.stopsForBus)
    const stopsForTrolleybus = useSelector(state => state.stops.stopsForTrolleybus)
    const stopsForTaxi = useSelector(state => state.stops.stopsForTaxi)
    const unknownStops = useSelector(state => state.stops.unknownStops)

    // console.log(stopsForBus?.length)


    useEffect(()=>{
        dispatch(fetchAllStopsCountRequest(`?cnt_tp=-1`))
        dispatch(fetchStopsForBusRequest(`?cnt_tp=1`))
        dispatch(fetchStopsForTrolleybusRequest(`?cnt_tp=2`))
        dispatch(fetchStopsForTaxiRequest(`?cnt_tp=3`))
        dispatch(fetchUnknownStopsRequest(`?cnt_tp=0`))
    },[busStops])

    const onTypeClick = (id,type) => {
        // const btns = document.getElementsByClassName("transportTypesBtn");
        //
        // for (let i = 0; i < btns.length; i++) {
        //     if(btns[i].id === id){
        //         const classes = btns[i].classList
        //         classes.add("active")
        //     } else if(btns[0].id !== id){
        //         const classes = btns[i].classList
        //        if(classes.contains("active")){
        //            classes.remove("active")
        //        }
        //     }
        // }

        if (type === "all") {
            dispatch(fetchStopsRequest())
        } else {
            dispatch(fetchStopsRequest(`?tp=${type}`))
        }
    }


    return (
        <Grid container style={{width: "100%", backgroundColor: "whitesmoke", padding: "5px"}}>
            <Grid item style={{marginRight: "50px"}}>
                <button className="transportTypesBtn"  id={'all'} onClick={(e) => onTypeClick("all", "all")}>
                    <StyledBadge
                        badgeContent={allStops && allStops.count}
                        color="primary"
                        max={10000}
                        showZero
                    >
                        Все
                    </StyledBadge>
                </button>
            </Grid>
            <Grid item style={{marginRight: "50px"}}>
                <button className="transportTypesBtn" id={'bus'} onClick={() => onTypeClick("bus",1)}>
                    <StyledBadge
                        badgeContent={stopsForBus && stopsForBus.count}
                        color="primary"
                        max={10000}
                        showZero
                    >
                        Автобусы
                    </StyledBadge>
                </button>
            </Grid>
            <Grid item style={{marginRight: "50px"}}>
                <button className="transportTypesBtn" id="trolleybus" onClick={() => onTypeClick("trolleybus",2)}>
                    <StyledBadge
                        badgeContent={stopsForTrolleybus && stopsForTrolleybus.count}
                        color="primary"
                        showZero
                        max={10000}
                    >
                        Троллейбусы
                    </StyledBadge>
                </button>
            </Grid>
            <Grid item style={{marginRight: "50px"}}>
                <button className="transportTypesBtn" id={"taxi"} onClick={() => onTypeClick("taxi",3)}>
                    <StyledBadge
                        badgeContent={stopsForTaxi && stopsForTaxi.count}
                        color="primary"
                        showZero
                        max={10000}
                    >
                        Маршрутные такси
                    </StyledBadge>
                </button>
            </Grid>
            <Grid item style={{marginRight: "50px"}}>
                <button className="transportTypesBtn" id={"unknown"} onClick={() => onTypeClick("unknown",0)}>
                    <StyledBadge
                        badgeContent={unknownStops && unknownStops.count }
                        color="primary"
                        showZero
                        max={10000}
                    >
                        Без типа
                    </StyledBadge>
                </button>
            </Grid>

            {/*{types.map((type,i)=>(*/}
            {/*    <Grid item style={{marginRight:"50px"}} key={i}>*/}
            {/*        <button className={classes.transportTypesBtn}>*/}
            {/*            <StyledBadge badgeContent={type.amount} color="primary">*/}
            {/*                {type.name}*/}
            {/*            </StyledBadge>*/}
            {/*        </button>*/}
            {/*    </Grid>*/}
            {/*))}*/}
        </Grid>
    );
};

export default TransportTypes;