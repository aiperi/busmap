import React from 'react';
import GoogleMapReact from "google-map-react";
import {Marker} from "@react-google-maps/api";
import {container} from "../style";
import {Grid} from "@mui/material";
import AutocompleteSearch from "../../AutocompleteSearch/AutocompleteSearch";
import busMarker from "../../../assets/images/busMarker.png"
import {useSelector} from "react-redux";

const MapOfStops = () => {
    const busStops = useSelector(state => state.stops.stops);
    const defaultProps = {
        center: {
            lat: 40.514294706806,
            lng: 72.81657725917724,
        },
        zoom: 10
    };

    const handleApiLoaded = (map, maps) => {
        console.log(map)
        console.log("______________________________")
        console.log(maps)
    };

    return (


        <Grid container>
            <Grid item width={"25%"} sx={{padding: "15px"}}>
                {/*<AutocompleteSearch busStops={busStops}*/}
                />
            </Grid>
            <Grid item width={"75%"}>
                {/*<div style={container}>*/}

                {/*    <GoogleMapReact*/}
                {/*        bootstrapURLKeys={{key: "AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg"}}*/}
                {/*        defaultCenter={defaultProps.center}*/}
                {/*        defaultZoom={defaultProps.zoom}*/}
                {/*        yesIWantToUseGoogleMapApiInternals*/}
                {/*        onGoogleApiLoaded={({map, maps}) => handleApiLoaded(map, maps)}*/}
                {/*    >*/}
                {/*        /!*<div>*!/*/}
                {/*        /!*    /!*<Marker*!/*!/*/}
                {/*        /!*    /!*    position={defaultProps.center}*!/*!/*/}
                {/*        /!*    /!*    options={{icon: busMarker}}*!/*!/*/}
                {/*        /!**/}
                {/*                /!*    <h1>hello</h1>*!/*/}
                {/*        /!*</div>*!/*/}

                {/*    </GoogleMapReact>*/}
                {/*    /!*{isAddStop && (*!/*/}
                {/*    /!*    <div style={{position: "absolute", zIndex: 555, bottom: 0, width: "100%"}} >*!/*/}
                {/*    /!*        <AddBusStop*!/*/}
                {/*    /!*            onCancel={onCancel}*!/*/}
                {/*    /!*            changeRadius={radiusChangeHandler}*!/*/}
                {/*    /!*            radius={radius}*!/*/}
                {/*    /!*            position={newMarker}*!/*/}
                {/*    /!*        />*!/*/}
                {/*    /!*        <h1>hello</h1>*!/*/}
                {/*    /!*    </div>*!/*/}
                {/*    /!*)}*!/*/}


                {/*</div>*/}

            </Grid>
        </Grid>

    );
};

export default MapOfStops;