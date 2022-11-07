import React from 'react';
import {Grid} from "@mui/material";
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import {makeStyles} from "@mui/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -15,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor:"#166767",
        width:"30px"
    },
}));

const useStyles = makeStyles(theme => ({
   transportTypesBtn:{
       textTransform: "capitalize",
       color:"#166767",
       padding: "8px",
       '&:hover':{
           backgroundColor:"#98B8B8"
       }
   },

}));

const TransportTypes = () => {
    const classes = useStyles();
    const types = [
        {name:"Все", amount:65},
        {name:"Автобусы", amount:20},
        {name:"Троллейбусы", amount:12},
        {name:"Маршрутные такси", amount:23},
        {name:"Без типа", amount:10},
    ]
    return (
        <Grid container style={{width:"100%", backgroundColor:"whitesmoke", padding:"5px"}}>
            {types.map(type=>(
                <Grid item style={{marginRight:"50px"}}>
                    <button className={classes.transportTypesBtn}>
                        <StyledBadge badgeContent={type.amount} color="primary">
                            {type.name}
                        </StyledBadge>
                    </button>
                </Grid>
            ))}
        </Grid>
    );
};

export default TransportTypes;