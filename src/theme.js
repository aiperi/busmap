import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    components: {
        // Name of the component
        // MuiButton: {
        //     styleOverrides: {
        //         // Name of the slot
        //         // root: {
        //         //     // Some CSS
        //         //     fontSize: '16px',
        //         //     fontFamily: 'Lato, sans-serif',
        //         // },
        //
        //     },
        // },
        // MuiInputBase:{
        //     styleOverrides:{
        //         root:{
        //            height:"30px"
        //         },
        //     }
        // },
        // MuiFormLabel:{
        //     styleOverrides:{
        //         root:{
        //             color:"#58D3D0"
        //         }
        //     }
        // }
    },
    typography: {
        allVariants: {
            fontFamily: 'Lato, sans-serif',
        },
    },
    progress: {
        width: '100%',
        position: "absolute",
        marginLeft: '-10px',
        bottom: 0,
    },
});

export default theme;