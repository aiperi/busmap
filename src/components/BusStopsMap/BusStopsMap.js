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
import CustomAutocomplete from "../AutocompleteSearch/CustomAutocomplete";

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

    const [showM, setShowM] = useState(false);




    console.log(selectedMarker);
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

    const radiusChangeHandler = (e) => {
        setRadius(parseInt(e.target.value))
    }


    const center = useMemo(() => ({
        lat: 40.514294706806,
        lng: 72.81657725917724,
    }), [])


    const onLoad = useCallback((map) => {
        mapRef.current = map;
    }, [])

    const onUnmount = useCallback((map)=>(mapRef.current = undefined));


const res = useMemo(()=>{
    const markerClusterer = ()=>{
        return (
            <MarkerClusterer styles={styles}>
                {(clusterer) =>
                    busStops && busStops.map(stop => (
                        <Marker
                            position={{lat: stop.p[0].y, lng: stop.p[0].x}}
                            options={{icon: busMarker}}
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

},[])


    const res2 = useMemo(()=>{
        const map = ()=>{
            return (
                <GoogleMap
                    mapContainerStyle={container}
                    center={center}
                    zoom={12}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={{
                        // mapTypeId: 'satelite',

                    }}

                    onRightClick={(ev) => {
                        const position = {
                            lat: ev.latLng.lat(),
                            lng: ev.latLng.lng(),
                        }
                        setNewMarker(position)
                            // setZoom(16)
                        setIsAddStop(true)
                        //
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

                    {/*{selectedMarker && (*/}
                    {/*    <InfoWindow position={{lat: selectedMarker.p[0].y, lng: selectedMarker.p[0].x}}>*/}
                    {/*        <h4>{selectedMarker.n}</h4>*/}
                    {/*    </InfoWindow>*/}
                    {/*)}*/}
                </GoogleMap>

            )
        }
        return map();

    },[newMarker])






    return (
        <Grid container>
            <Grid item width={"25%"} className={classes.streetsBox}>
                <AutocompleteSearch />
                {/*<CustomAutocomplete/>*/}
            </Grid>
            <Grid item width={"75%"}>

                <div className={classes.container}>

                    {!isLoaded ? (
                        <Preloader/>
                    ) : (
                        <div style={{position: "relative"}}>
                            {res2}
                            {isAddStop && (
                                <div style={{position: "absolute", zIndex: 555, bottom: 0, width: "100%"}} >
                                    <AddBusStop
                                        onCancel={onCancel}
                                        changeRadius={radiusChangeHandler}
                                        radius={radius}
                                        position={newMarker}
                                    />
                                </div>
                            )}
                        </div>
                    )}

                </div>

            </Grid>
        </Grid>

    );
};

export default BusStopsMap;