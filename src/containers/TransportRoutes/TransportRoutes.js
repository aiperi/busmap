import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import TransportTypes from "../../components/TransportTypes/TransportTypes";
import AutocompleteRoutes from "../../components/AutocompleteRoutes/AutocompleteRoutes";
import {useDispatch} from "react-redux";

const TransportRoutes = () => {
    const dispatch = useDispatch()
    // const streets = useSelector((state) => state.stops.stops);
    // console.log(streets)

    // useEffect(() => {
    //     dispatch()
    // }, []);

    return (
        <Grid container flexDirection={"column"}>
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