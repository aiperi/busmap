import React, {useMemo, useState} from 'react';
import {Grid} from "@mui/material";
import {Circle, GoogleMap, InfoWindow, Marker, MarkerClusterer, useLoadScript} from '@react-google-maps/api';

import {makeStyles} from "@mui/styles";
import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch";
import Preloader from "../UI/Preloader/Preloader";
import busMarker from '../../assets/images/busMarker.png'
import circle from '../../assets/images/circle.png'
import AddBusStop from "../AddBusStop/AddBusStop";
import {useSelector} from "react-redux";
import {nanoid} from "nanoid";

const useStyles = makeStyles(() => ({
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


const options = {
    strokeColor: '#115604',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#4bd56b',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: true,
    visible: true,
    zIndex: 1
}


const BusStopsMap = ({stops}) => {
    const classes = useStyles();
    const busStops = useSelector(state => state.stops.stops)
    const [selectedMarker, setSelectedMarker] = useState("");
    const [isAddStop, setIsAddStop] = useState(false);
    const [newMarker, setNewMarker] = useState(null);
    const [radius, setRadius] = useState(50);
    const [circle, setCircle] = useState(null);
    const one = stops[0];
    const positionOne = {lat:one?.p[0].y, lng:one?.p[0].x}



    const center = useMemo(() => ({
        lat: 42.880961762656284,
        lng: 74.58320606499385,
    }), [])

    const [zoom, setZoom] = useState(10)

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg",
    });


    const handleCircleRadius = () => {
        circle && setRadius(parseInt(circle['radius']))
    };


    const onCancel = () => {
        setIsAddStop(false);
        setNewMarker(null);
    }

    const radiusChangeHandler = (e) => {
        setRadius(parseInt(e.target.value))
    }
if(one){
    // console.log("lat:"+one.p[0].x+","+"lng:"+one.p[0].y)
    console.log(positionOne)
    console.log(one)
}

    // console.log(one.p[0].x)
    // const stops = [
    //     {name: "Ахунбаева", position: {lat: 42.868013915470584, lng: 74.58773433630382}},
    //     {name: "Гоин", position: {lat: 42.870010202180455, lng: 74.58947455638771}},
    //     {name: "Манаса", position: {lat: 42.87053982221323, lng: 74.5923336977037}},
    //     {name: "Ибраимова", position: {lat: 42.8698720396854, lng: 74.59817765687703}},
    //     {name: "Горький", position: {lat: 42.857355713128506, lng: 74.5939360679194}},
    //     {name: "Панфилова", position: {lat: 42.856502500731054, lng: 74.62419783486033}},
    //     {name: "Лермонтова", position: {lat: 42.882319310729976, lng: 74.56372146958823}},
    //     {name: "Салиева", position: {lat: 42.8430683010853, lng: 74.5933472030784}},
    //     {name: "Гоголя", position: {lat: 42.830067952421345, lng: 74.60702612922111}},
    // ]
    return (
        <Grid container>
            <Grid item width={"25%"} className={classes.streetsBox}>
                <AutocompleteSearch busStops={busStops}
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
                                zoom={zoom}
                                options={{
                                    mapTypeId: 'satellite'
                                }}

                                onRightClick={(ev) => {
                                    const position = {
                                        lat: ev.latLng.lat(),
                                        lng: ev.latLng.lng(),
                                    }
                                    setNewMarker(position)
                                    setZoom(16)
                                    setIsAddStop(true);

                                    return () => {
                                        setZoom(10)
                                    }
                                }}
                            >
                                  {/*Child components, such as markers, info windows, etc. */}
                                <MarkerClusterer styles={styles}>
                                    {(clusterer) =>
                                        busStops.map(stop => (
                                         <Marker
                                             position={{lat: stop.p[0].y, lng: stop.p[0].x}}
                                             options={{icon: busMarker}}
                                             key={nanoid()}
                                             clusterer={clusterer}
                                             onMouseDown={() => {
                                                 setSelectedMarker(stop)
                                             }}
                                             onMouseOver={() =>
                                                 setSelectedMarker("")
                                             }
                                         />
                                     ))}
                                </MarkerClusterer>


                                {one && (
                                    <Marker
                                        position={positionOne}
                                        options={{icon: busMarker}}
                                        // key={nanoid()}
                                        // clusterer={clusterer}
                                        // onMouseDown={() => {
                                        //     setSelectedMarker(stops[0])
                                        // }}
                                        // onMouseOver={() => {
                                        //     setSelectedMarker("")
                                        // }}
                                    />
                                )}


                                {newMarker && (
                                    <Circle
                                        center={newMarker}
                                        radius={radius}
                                        options={options}
                                        onRadiusChanged={handleCircleRadius}
                                        onLoad={(circle) => setCircle(circle)}
                                        onUnmount={() => {
                                            setCircle(null);
                                            setRadius(50)
                                        }}
                                    />
                                )}

                                {selectedMarker && (
                                    <InfoWindow position={{lat: selectedMarker.p[0].x, lng: selectedMarker.p[0].y}}>
                                        <h4>{selectedMarker.n}</h4>
                                    </InfoWindow>
                                )}
                                {isAddStop && (
                                    <div style={{position: "absolute", zIndex: 555, bottom: 0, width: "100%"}}>
                                        <AddBusStop
                                            onCancel={onCancel}
                                            changeRadius={radiusChangeHandler}
                                            radius={radius}
                                            position={newMarker}
                                        />
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