import React, {useEffect} from 'react';
import TransportTypes from "../../components/TransportTypes/TransportTypes";
import BusStopsMap from "../../components/BusStopsMap/BusStopsMap";
import {useDispatch, useSelector} from "react-redux";
import {fetchStopsRequest} from "../../store/actions/stopsActions";

const BusStops = () => {
    const dispatch=useDispatch();
    const stops = useSelector(state => state.stops.stops);
    console.log(stops)

    useEffect(()=>{
        dispatch(fetchStopsRequest());
    },[])


    return (
        <div>
            <TransportTypes/>
            <BusStopsMap stops={stops}/>
        </div>
    );
};

export default BusStops;