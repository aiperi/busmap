import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Grid} from "@mui/material";
import {Circle, GoogleMap, InfoWindow, Marker, MarkerClusterer, useLoadScript} from '@react-google-maps/api';
import {makeStyles} from "@mui/styles";
import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch";
import Preloader from "../UI/Preloader/Preloader";
import AddBusStop from "../AddBusStop/AddBusStop";
import {useSelector} from "react-redux";
import {container, options, styles} from "./style";
import {nanoid} from "nanoid";
import busMarker from '../../assets/images/busMarker.png'
import unknown from '../../assets/images/unknown.png'
import taxi from '../../assets/images/taxi.png'
import trolleybus from '../../assets/images/bus.png'
import EditBusMap from "../EditBusStop/EditBusMap";
import Overlay from "../OverlayDiv/Overlay";

const useStyles = makeStyles(() => ({
    container: {
        width: "100%",
        height: "80vh",

    },

    streetsBox: {
        padding: "15px",
    }

}));


const BusStopsMap = () => {
    const classes = useStyles();
    const mapRef = useRef();
    const busStops = useSelector(state => state.stops.stops)
    const [selectedMarker, setSelectedMarker] = useState("");
    const [isAddStop, setIsAddStop] = useState(false)
    const [newMarker, setNewMarker] = useState(null);
    const [radius, setRadius] = useState(50);
    const [circle, setCircle] = useState(null);
    const singleStop = useSelector(state => state.stops.singleStop);
    const showEdit = useSelector(state => state.stops.editOpen);
    const editStopId=useSelector(state => state.stops.editStopId);
const showOverlay = useSelector(state => state.stops.showOverlay);

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg",
    });


    const handleCircleRadius = () => {
        circle && setRadius(parseInt(circle['radius']))
    };


    const onCancel = () => {
        setIsAddStop(false)
        setNewMarker(null);
    }

    const onAdd = () => {
        setIsAddStop(false)
        setNewMarker(null);
    }

    const radiusChangeHandler = (e) => {
        setRadius(parseInt(e.target.value))
    }


    const center = useMemo(() => ({
        lat: singleStop ? singleStop.p[0].y : 40.514294706806,
        lng: singleStop ? singleStop.p[0].x : 72.81657725917724,
    }), [singleStop])


    const onLoad = useCallback((map) => {
        mapRef.current = map;
    }, [])

    const onUnmount = useCallback((map) => (mapRef.current = undefined));


    const res = useMemo(() => {
        const markerClusterer = () => {
            return (
                <MarkerClusterer styles={styles}>
                    {(clusterer) =>
                        busStops && busStops.map(stop => (
                            <Marker
                                position={{lat: stop.p[0].y, lng: stop.p[0].x}}
                                options={
                                    stop.tp === 1 && {icon: busMarker} ||
                                    stop.tp === 0 && {icon: unknown} ||
                                    stop.tp === 3 && {icon: taxi} ||
                                    stop.tp === 2 && {icon: trolleybus} ||
                                    {icon: busMarker}
                                }
                                key={nanoid()}
                                clusterer={clusterer}
                                tracksViewChanges={false}
                                onMouseOver={() => {
                                    setSelectedMarker(stop)
                                }}
                                onMouseOut={() =>
                                    setSelectedMarker("")
                                }

                            >

                                {/*<InfoWindow*/}
                                {/*    position={{lat: stop.p[0].y, lng: stop.p[0].x}}*/}
                                {/*    visible={true}*/}
                                {/*>*/}

                            </Marker>
                        ))}

                </MarkerClusterer>
            )
        }
        return markerClusterer();

    }, [busStops])


    const res2 = useMemo(() => {
        const map = () => {
            return (
                <GoogleMap
                    mapContainerStyle={container}
                    center={center}
                    zoom={11}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={{ streetViewControl: false}}

                    onRightClick={(ev) => {
                        const position = {
                            lat: ev.latLng.lat(),
                            lng: ev.latLng.lng(),
                        }
                        setNewMarker(position)
                        setIsAddStop(true)
                    }}
                >
                    {/*Child components, such as markers, info windows, etc. */}
                    {res}

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
                        <InfoWindow
                            position={{lat: selectedMarker.p[0].y, lng: selectedMarker.p[0].x}}
                            options={{pixelOffset: {width: -20, height: -20,}}}
                        >
                            <h4>{selectedMarker.n}</h4>
                        </InfoWindow>
                    )}

                    {singleStop && (
                        <Marker
                            position={{lat: singleStop.p[0].y, lng: singleStop.p[0].x}}
                            tracksViewChanges={false}
                            onMouseOver={() => {
                                setSelectedMarker(singleStop)
                            }}
                            onMouseOut={() =>
                                setSelectedMarker("")
                            }
                        >
                        </Marker>
                    )}

                </GoogleMap>

            )
        }
        return map();

    }, [isAddStop, newMarker, selectedMarker, busStops, singleStop])


    return (
        <Grid container>
            <Grid item width={"25%"} className={classes.streetsBox}>
                <AutocompleteSearch/>
            </Grid>
            {showEdit ? (
                <EditBusMap id={editStopId}/>
            ):(
                <Grid item width={"75%"}>

                    <div className={classes.container}>

                        {!isLoaded ? (
                            <Preloader/>
                        ) : (
                            <div style={{position: "relative"}}>

                                {showOverlay &&(
                                    <Overlay/>
                                )}
                                {res2}
                                {isAddStop && (
                                    <div style={{position: "absolute", zIndex: 555, bottom: 0, width: "100%"}}>
                                        <AddBusStop
                                            onCancel={onCancel}
                                            changeRadius={radiusChangeHandler}
                                            radius={radius}
                                            position={newMarker}
                                            onAdd={onAdd}
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                    </div>

                </Grid>
            )}
        </Grid>

    );
};

export default BusStopsMap;