import React from 'react';
import {Grid} from 'react-loader-spinner'
import {Box,} from "@mui/material";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Preloader = () => {
    return (
        <Box width={"100%"}>
            <div style={{width:"100%",height:"80vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Grid
                    height="50"
                    width="50"
                    color="rgb(21, 65, 108)"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </Box>

    );
};

export default Preloader;