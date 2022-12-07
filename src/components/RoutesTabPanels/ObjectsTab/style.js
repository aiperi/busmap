import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    input: {
        height: "40px",
    },
    listBox:{
        display:"grid",
        gridTemplateColumns: "350px auto",
        fontSize:"15px"
    },
    horizontalList: {
        alignContent: "flex-start",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        overflowX: "auto",
        padding: "10px 20px 5px 20px",
        height: "60vh",
    },
    row: {
        alignItems: "center",
        display: "flex",
        height: "32px",
        padding: "5px 20px 5px 15px",
        width: "270px",
        cursor: "pointer"
    },
    name: {
        color: "black",
        paddingLeft: "10px"
    },
    button: {
        color: "gray",
        fontSize:"13px",
        height:"38px",
        border:"1px solid darkgray",
        borderRadius:"0",
        marginRight:"2px",
        backgroundColor: "white",
        textTransform:"capitalize",
        '&:hover': {
            backgroundColor: "whitesmoke",
            border:"1px solid darkgray",
        },
        '&:active':{
            backgroundColor: "whitesmoke",
            border:"1px solid darkgray",
        }
    }
}));

export const objStyles = makeStyles(theme => ({
    input: {
        height: "40px",
    },
    listBox:{
        display:"grid",
        gridTemplateRows: "36px auto",
        fontSize:"15px"
    },
    horizontalList: {
        alignContent: "flex-start",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        overflowX: "auto",
        padding: "10px 20px 5px 20px",
        height: "60vh",
    },
    row: {
        alignItems: "center",
        display: "flex",
        height: "32px",
        padding: "5px 20px 5px 0",
        width: "270px",
    }
}));