import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {makeStyles} from "@mui/styles";
import Switch from '@mui/material/Switch';
import {useNavigate} from "react-router-dom";
import {singleRoute} from "../../paths";


const useStyles = makeStyles(theme => ({
    autocomplete: {
        fontSize: "16px",
        border: "1px solid #DFDFDF",
        padding: "10px",
        width: "98%",
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        margin: "5px 10px",
        backgroundColor: "whitesmoke"
    },

    streetsBox: {
        padding: "15px",
    }

}));

const AutocompleteRoutes = () => {
    const classes = useStyles();
    const navigate=useNavigate();

    const streets = [
        {number: 102, start: "ул.Ахунбаева", end: "Аэропорт"},
        {number: 106, start: "ул.Исанова", end: "Ц.Мечеть"},
        {number: 108, start: "ул.Горький", end: "Ленина"},
        {number: 188, start: "ул.Ахунбаева", end: "Исанова"},
        {number: 260, start: "ул.Пушкина", end: "Турусбекова"},
        {number: 212, start: "ул.Ленина", end: "Аэропорт"},
        {number: 172, start: "ул.Советская", end: "Магистраль"},
        {number: 178, start: "ул.Манаса", end: "Аэропорт"},
        {number: 132, start: "ул.Ахунбаева", end: "Советская"},
        {number: 215, start: "ул.Абдрахманова", end: "Магистраль"},
    ]

    const label = {inputProps: {'aria-label': 'Switch demo'}};
    return (
        <Autocomplete
            id="combo-box-demo"
            open={true}
            options={streets}
            style={{
                height: "100%",
                width: "100%",

            }}
            ListboxProps={{style: {maxHeight: '60vh'}}}
            getOptionLabel={(option) => `${option.number} ${option.start} ${option.end}`}
            renderOption={(props, option) => {
                return (
                    <div className={classes.autocomplete} onClick={()=>navigate(singleRoute)}>
                        <div
                            style={
                                {
                                    display: "flex",
                                    width: '6%',
                                    justifyContent: 'space-between',
                                    alignItems: "center"
                                }}
                        >
                            <DirectionsBusIcon
                                sx={{
                                    color: "white",
                                    fontSize: "18px",
                                    borderRadius: "50%",
                                    backgroundColor: 'green'
                                }}/>
                            <div style={{width: "50px", border: "1px solid lightgrey", textAlign: 'center'}}>
                                {option.number}
                            </div>
                        </div>
                        <p style={{fontSize: "18px",}}>{option.start} - {option.end}</p>

                        <Switch {...label} defaultChecked/>
                    </div>
                );
            }}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Поиск"/>}
        />
    );
};

export default AutocompleteRoutes;