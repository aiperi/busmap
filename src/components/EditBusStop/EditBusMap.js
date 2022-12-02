import React, {useCallback,useEffect, useMemo, useRef, useState} from 'react';
import {Grid} from "@mui/material";
import {Circle, GoogleMap, Marker, useLoadScript} from '@react-google-maps/api';
import {makeStyles} from "@mui/styles";
import Preloader from "../UI/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {container, options} from "./style";
import {fetchSingleStopRequest, hideEditOpen} from "../../store/actions/stopsActions";
import EditBusStop from "./EditBusStop";

const useStyles = makeStyles(() => ({
    container: {
        width: "100%",
        height: "80vh",
    },

    streetsBox: {
        padding: "15px",
    }

}));


const EditStopsMap = ({id}) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const mapRef = useRef();
    const [newMarker, setNewMarker] = useState(null);
    const [circle, setCircle] = useState(null);
    const singleStop = useSelector(state => state.stops.singleStop);
    const [openEdit] = useState(true)
    const [radius, setRadius] = useState(50);
    const [circleCenter, setCircleCenter] = useState(null)



    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg",
    });


    useEffect(()=>{
        dispatch(fetchSingleStopRequest(id));
        setRadius(singleStop && singleStop.p[0].r);
        setNewMarker({
            lat:singleStop && singleStop.p[0].y,
            lng: singleStop && singleStop.p[0].x,
        })

    },[id])



    const handleCircleRadius = () => {
        circle && setRadius(parseInt(circle['radius']))
    };


    const onCancel = () => {
        setNewMarker(null);
        dispatch(hideEditOpen())
    }

    const onEdit = () => {
        setNewMarker(null);
        dispatch(hideEditOpen())
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


    const res2 = useMemo(() => {
        const map = () => {
            return (
                <GoogleMap
                    mapContainerStyle={container}
                    center={center}
                    zoom={15}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={{draggable:false}}

                    // onClick={(e) => {
                    //     const position = {
                    //         lat: e.latLng.lat(),
                    //         lng: e.latLng.lng(),
                    //     }
                    //     console.log(position)
                    //     setNewMarker(position)
                    // }}
                >
                    {/*Child components, such as markers, info windows, etc. */}

                    {newMarker && (
                        <Circle
                            center={newMarker}
                            radius={radius}
                            options={options}
                            onRadiusChanged={handleCircleRadius}
                            onCenterChanged={() => circle && setCircleCenter({ lat: circle['center'].lat(), lng: circle['center'].lng() })}
                            onLoad={(circle) => setCircle(circle)}
                            onUnmount={() => {
                                setCircle(null);
                                setRadius(50)
                            }}

                        />
                    )}

                    {newMarker && (
                        <Marker
                            position={{lat:singleStop && singleStop.p[0].y, lng: singleStop && singleStop.p[0].x}}
                        />
                    )}

                </GoogleMap>

            )
        }
        return map();

    }, [openEdit, newMarker, singleStop, radius])


    return (

            <Grid item width={"75%"}>

                <div className={classes.container}>

                    {!isLoaded ? (
                        <Preloader/>
                    ) : (
                        <div style={{position: "relative"}}>
                            {res2}
                            {openEdit && (
                                <div style={{position: "absolute", zIndex: 555, bottom: 0, width: "100%"}}>
                                    <EditBusStop
                                        onCancel={onCancel}
                                        changeRadius={radiusChangeHandler}
                                        radius={radius}
                                        position={newMarker}
                                        id={id}
                                        singleStop={singleStop}
                                        onEdit={onEdit}
                                        center = {circleCenter}
                                    />
                                </div>
                            )}
                        </div>
                    )}

                </div>

            </Grid>

    );
};

export default EditStopsMap;