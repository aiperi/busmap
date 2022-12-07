import React from 'react';
import {Grid} from "@mui/material";
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import {makeStyles} from "@mui/styles";
import {StyledBadge, useStyles} from "./style";


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
            {types.map((type,i) => (
                <Grid item style={{marginRight:"50px", cursor:"pointer"}} key={i}>
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