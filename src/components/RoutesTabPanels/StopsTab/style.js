import {makeStyles} from "@mui/styles";
import {blue} from "../../../colors";
import verticalLineImg from "../../../assets/images/vertical-line.png";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";

export const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
        height: "80vh",
    },

    streetsBox: {
        padding: "15px",
    },
    left: {
        height: "100%",
        left: "0",
        position: "absolute",
        textAlign: "right",
        top: "0",
        width: "60px",
    },

    right: {
        borderBottom: "1px solid "+blue,
        height: "100%",
        paddingRight: "10px",
        paddingTop: "14px",
    },
    index: {
        color: "rgba(45,44,51,.7)",
        fontSize: "12px",
        margin: "17px 7px 0 0",
    },

    prettyBorder: {
        backgroundImage: `url(${verticalLineImg})`,
        backgroundPositionX: "center",
        backgroundRepeat: "repeat-y",
        bottom: "0",
        left: "17px",
        position: "absolute",
        top: "2px",
        width: "12px",
    },

    circle: {
        backgroundColor: "#ffffff",
        border: "1px solid #999da8",
        borderRadius: "50%",
        height: "12px",
        marginTop: "16px",
        width: "12px",
    },
    prettyStopRow: {
        height: "65px",
        left: "0px",
        position: "relative",
        top: "0px",
        width: "100%",
        paddingLeft: "60px",
        zIndex: "30001",
        overflow:"hidden",
    },
    first:{
        top:"18px",
        marginTop:0,
    }
}));

export const ColorButton = styled(Button)(( ) => ({
    display: "block",
    color: 'white',
    textTransform:"capitalize",
    width:"100%",
    backgroundColor: "#4ea1f3",
    boxShadow: "none",
    '&:hover': {
        backgroundColor:"#295b8d",
    },
}));

export const ColorActionButton = styled(Button)(( ) => ({
    color: 'white',
    textTransform:"capitalize",
    margin:"5px",
    backgroundColor:"#295b8d",
    boxShadow: "none",
    '&:hover': {
        backgroundColor: "#19538c",
    },
}));

export const MODAL_STYLES = {
    position: "absolute",
    zIndex: "9999",
    top: "600px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    paddingBottom: '30px',
    height: '100%',
    overflow: "auto",
    borderRadius: "4px",
    outline: "none",
};

export const OVERLAY_STYLE = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "9999",
    overflowY: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
};