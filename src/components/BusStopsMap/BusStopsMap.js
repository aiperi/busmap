import React from 'react';
import {Grid} from "@mui/material";
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

import {makeStyles} from "@mui/styles";
import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch";

const useStyles = makeStyles(theme => ({
    container:{
        width:"100%",
        height:"80vh",
    },

    streetsBox:{
        padding:"15px",
    }

}));

const BusStopsMap = () => {
    const classes=useStyles();

    const container ={
            width:"100%",
            height:"80vh",
    }

     const center ={
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


                        <LoadScript
                            googleMapsApiKey="AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg"
                        >
                            <GoogleMap
                                mapContainerStyle={container}
                                center={center}
                                zoom={16}
                            >
                                { /* Child components, such as markers, info windows, etc. */ }
                                <Marker position={center} />}
                                <></>
                            </GoogleMap>
                        </LoadScript>


                        {/*<GoogleMapReact*/}
                        {/*    bootstrapURLKeys={{ key: "AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg" }}*/}
                        {/*    defaultCenter={defaultProps.center}*/}
                        {/*    defaultZoom={defaultProps.zoom}*/}
                        {/*></GoogleMapReact>*/}
                    </div>

            </Grid>
        </Grid>
    );
};

export default BusStopsMap;