import React from 'react';
import TransportTypes from "../../components/TransportTypes/TransportTypes";
import BusStopsMap from "../../components/BusStopsMap/BusStopsMap";

const BusStops = () => {
    return (
        <div>
            <TransportTypes/>
            <BusStopsMap/>
        </div>
    );
};

export default BusStops;