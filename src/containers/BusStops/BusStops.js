import React, {useEffect} from 'react';
import TransportTypes from "../../components/TransportTypes/TransportTypes";
import BusStopsMap from "../../components/BusStopsMap/BusStopsMap";
import {useDispatch} from "react-redux";
import {fetchStopsRequest} from "../../store/actions/stopsActions";
import MapOfStops from "../../components/BusStopsMap/MapOfStops/MapOfStops";

const BusStops = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchStopsRequest());
    },[])

    return (
        <div>
            <TransportTypes/>
            <BusStopsMap/>
            {/*<MapOfStops/>*/}
        </div>
    );
};

export default BusStops;