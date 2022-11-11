import React, {useMemo, useState} from 'react';
import {Grid} from "@mui/material";
import {GoogleMap, InfoWindow, Marker, MarkerClusterer, useLoadScript} from '@react-google-maps/api';

import {makeStyles} from "@mui/styles";
import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch";
import Preloader from "../UI/Preloader/Preloader";
import busMarker from '../../assets/images/busMarker.png'
import circle from '../../assets/images/circle.png'
import AddBusStop from "../AddBusStop/AddBusStop";

const useStyles = makeStyles(()=> ({
    container: {
        width: "100%",
        height: "80vh",
    },

    streetsBox: {
        padding: "15px",
    }

}));

const container = {
    width: "100%",
    height: "80vh",
}


const styles = [{
    url: circle,
    height: 55,
    width: 55,
    fontFamily: "Lato",
    textColor: "black",
    fontSize: "18px"
}];

const BusStopsMap = () => {
    const classes = useStyles();
    const [selectedMarker, setSelectedMarker] = useState("");
    const [isAddStop, setIsAddStop] = useState(false);
    const [newMarker, setNewMarker] = useState(null)

    const center = useMemo(() => ({
        lat: 42.880961762656284,
        lng: 74.58320606499385
    }), [])


    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg",
    });


    const onCancel = () => {
        setIsAddStop(false);
        setNewMarker(null);
    }

    const stops = [
        {name: "Ахунбаева", position: {lat: 42.868013915470584, lng: 74.58773433630382}},
        {name: "Гоин", position: {lat: 42.870010202180455, lng: 74.58947455638771}},
        {name: "Манаса", position: {lat: 42.87053982221323, lng: 74.5923336977037}},
        {name: "Ибраимова", position: {lat: 42.8698720396854, lng: 74.59817765687703}},
        {name: "Горький", position: {lat: 42.857355713128506, lng: 74.5939360679194}},
        {name: "Панфилова", position: {lat: 42.856502500731054, lng: 74.62419783486033}},
        {name: "Лермонтова", position: {lat: 42.882319310729976, lng: 74.56372146958823}},
        {name: "Салиева", position: {lat: 42.8430683010853, lng: 74.5933472030784}},
        {name: "Гоголя", position: {lat: 42.830067952421345, lng: 74.60702612922111}},
    ]
    return (
        <Grid container>
            <Grid item width={"25%"} className={classes.streetsBox}>
                <AutocompleteSearch
                />
            </Grid>
            <Grid item width={"75%"}>

                <div className={classes.container}>

                    {!isLoaded ? (
                        <Preloader/>
                    ) : (
                        <div style={{position: "relative"}}>
                            <GoogleMap
                                mapContainerStyle={container}
                                center={center}
                                zoom={10}
                                options={{
                                    mapTypeId: 'satellite'
                                }}

                                onRightClick={(ev) => {
                                    const position = {
                                        lat: ev.latLng.lat(),
                                        lng: ev.latLng.lng(),
                                    }
                                    setNewMarker(position)
                                    setIsAddStop(true)
                                }}
                            >
                                { /* Child components, such as markers, info windows, etc. */}
                                <MarkerClusterer styles={styles}>
                                    {(clusterer) =>
                                        stops.map(stop => (
                                            <Marker
                                                position={stop.position}
                                                options={{icon: busMarker}}
                                                key={stop.position.lat}
                                                clusterer={clusterer}
                                                onMouseDown={() => {
                                                    setSelectedMarker(stop)
                                                }}
                                                onMouseOver={() => {
                                                    setSelectedMarker("")
                                                }}
                                            />
                                        ))}
                                </MarkerClusterer>

                                {newMarker && (
                                        <Marker
                                        position={newMarker}
                                        options={{icon: busMarker}}
                                        style={[{position:"relative"}]}
                                    />
                                )}

                                {selectedMarker && (
                                    <InfoWindow position={selectedMarker.position}>
                                        <h4>{selectedMarker.name}</h4>
                                    </InfoWindow>
                                )}
                                {isAddStop && (
                                    <div style={{position: "absolute", zIndex: 555, bottom: 0}}>
                                        <AddBusStop onCancel={onCancel}/>
                                    </div>

                                )}

                            </GoogleMap>
                        </div>

                    )}

                </div>

            </Grid>
        </Grid>

    );
};

export default BusStopsMap;