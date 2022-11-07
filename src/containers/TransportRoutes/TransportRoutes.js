import React from 'react';
import {Grid} from "@mui/material";
import TransportTypes from "../../components/TransportTypes/TransportTypes";
import AutocompleteRoutes from "../../components/AutocompleteRoutes/AutocompleteRoutes";

const TransportRoutes = () => {
    return (
        // <Grid container sx={{justifyContent: "space-between"}}>
        <Grid container flexDirection={"column"}>
           {/*<Grid item flexGrow={1}>*/}
           {/*    <TransportTypes/>*/}
           {/*</Grid>*/}
            <Grid item >
                <TransportTypes/>
            </Grid>
            <Grid item >
                <AutocompleteRoutes/>
            </Grid>


        </Grid>
    );
};

export default TransportRoutes;