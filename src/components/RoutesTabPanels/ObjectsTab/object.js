import React, {useEffect, useState} from 'react';
import {Grid, IconButton, TextField, Typography} from "@mui/material";
import {TabsButton} from "../../../assets/styles/tabs/tabs";
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from "./checkbox";
import {objStyles, useStyles} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {fetchRoutesGroupsRequest, fetchRoutesUnitsRequest, showUnitsCount} from "../../../store/actions/routesActions";
import {useParams} from "react-router-dom";

export const Object = () => {
    const classes = objStyles();
    const dispatch = useDispatch()
    const {id} = useParams()
    const units = useSelector((state) => state.routes.units)

    useEffect(() => {
        dispatch(fetchRoutesUnitsRequest())
    },[])

    const handleClick = (unit) => {
        console.log(unit)
        // dispatch(showUnitsCount({groupid: id, unites: [unit]}))
    }

    return (
        <div style={{display:"block"}}>
            <div sx={{ color: 'darkgray', padding: "10px", backgroundColor: "whitesmoke"}}>
                <Typography variant={'subtitle1'} sx={{fontSize: "14px"}}>Найдено
                    элементов: {units.length}</Typography>
            </div>
            <div className={classes.listBox}>
                <div className={classes.horizontalList}>
                    {units && units.map(unit => (
                        <div className={classes.row}>
                            <Checkbox
                                key={unit.groupid}
                                type="checkbox"
                                name={unit.name}
                                id={unit.groupid}
                                handleClick={() => handleClick(unit)}
                            />
                            <Typography sx={{ml:"4px"}} variant={"subtitle2"}>{unit.uniqueid}</Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}