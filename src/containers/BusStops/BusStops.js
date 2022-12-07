import React, {useEffect} from 'react';
import TransportTypes from "../../components/TransportTypes/TransportTypes";
import BusStopsMap from "../../components/BusStopsMap/BusStopsMap";
import {useDispatch} from "react-redux";
import {fetchStopsRequest} from "../../store/actions/stopsActions";

const BusStops = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchStopsRequest());
    },[])

    return (
        <div>
            <TransportTypes/>
            <BusStopsMap/>
        </div>
    );
};

export default BusStops;