import React from 'react';
import {Grid} from "@mui/material";
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api';
import mapStyles from '../../mapStyles.json'

import {makeStyles} from "@mui/styles";
import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch";
import Preloader from "../UI/Preloader/Preloader";
import {green} from "../../colors";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import busMarker from '../../assets/images/busMarker.png'

const useStyles = makeStyles(theme => ({
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

const BusStopsMap = () => {
    const classes = useStyles();

    const defaultMapOptions = {
        styles: mapStyles
    };

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg",
    });

    const center = {
        lat: 42.880961762656284,
        lng: 74.58320606499385
    }


    return (

        <Grid container>
            <Grid item width={"30%"} className={classes.streetsBox}>
                <AutocompleteSearch
                />
            </Grid>
            <Grid item flexGrow={1}>

                <div className={classes.container}>

                    {!isLoaded ? (
                        <Preloader/>
                    ) : (

                        <GoogleMap
                            mapContainerStyle={container}
                            center={center}
                            zoom={10}
                            options={{
                                mapTypeId: 'satellite'
                            }}
                        >
                            { /* Child components, such as markers, info windows, etc. */}
                            <Marker position={center} options={{
                                icon: busMarker
                            }}/>}
                            <></>
                        </GoogleMap>
                    )}

                </div>

            </Grid>
        </Grid>

    );
};

export default BusStopsMap;