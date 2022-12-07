import {styled} from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import {makeStyles} from "@mui/styles";

export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -15,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor:"#166767",
        width:"30px"
    },
}));

export const useStyles = makeStyles(()=> ({
    transportTypesBtn:{
        textTransform: "capitalize",
        color:"#166767",
        padding: "8px",
        '&:hover':{
            backgroundColor:"#98B8B8"
        }
    },

}));