import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    autocomplete: {
        fontSize: "16px",
        border: "1px solid #DFDFDF",
        padding: "10px",
        width: "98%",
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        margin: "5px 10px",
        backgroundColor: "whitesmoke",
        cursor: "pointer"
    },
    streetsBox: {
        padding: "15px",
    }

}));