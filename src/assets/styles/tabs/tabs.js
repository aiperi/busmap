import {styled} from "@mui/material/styles";
import {Box, Button} from '@mui/material'

export const TabsContainer = styled(Box)(()=>({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "10px",
    border: "1px solid lightgrey",
}))


export const TabsButton = styled(Button)(({ theme }) => ({
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
}));
