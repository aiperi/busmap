import {styled} from "@mui/material/styles";
import {Box} from '@mui/material'

export const TrackingContainer = styled(Box)(()=>({
    width: "100%",
    height: "100%",
    border: "1px solid lightgrey",
    margin:"10px 10px 20px 10px",
    backgroundColor: "#fff"
}))

export const BusNumberWrapper = styled(Box)(()=>({
    padding: "10px 15px",
    border: "1px solid lightgrey",
    margin:"0px 10px 0px 0px ",
    fontSize:"20px",
    fontWeight:"bold",
}))