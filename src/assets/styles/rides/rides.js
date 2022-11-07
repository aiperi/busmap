import {styled} from "@mui/material/styles";
import {Box} from '@mui/material'

export const RidesContainer = styled(Box)(()=>({
    width: "100%",
    height: "100%",
    border: "1px solid lightgrey",
    margin:"10px 10px 20px 10px",
    backgroundColor: "#fff"
}))

export const RidesObjBox = styled(Box)(()=>({
  width:"140px",
    padding: "5px 15px",
    border: "1px solid #6cc2d3",
    margin:"10px 10px 20px 10px",
    // backgroundColor: '#fff' ,
    borderRadius:"8px",
    fontSize:"13px"
}))

export const EditRidesBox = styled(Box)(()=>({
    width:"340px",
    height:"340px",
    padding: "5px 15px",
    border: "1px solid lightgray",
    position:"absolute",
    top:"0",
    right:"0",
    zIndex:22,
    backgroundColor:"pink"
}))