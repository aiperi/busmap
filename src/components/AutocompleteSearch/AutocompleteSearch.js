import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {makeStyles} from "@mui/styles";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";


const useStyles = makeStyles(theme => ({
    autocomplete: {
        fontSize: "16px",
        borderBottom: "1px solid #DFDFDF",
        padding: "10px",
        width: "90%",
        position: "relative",
        overflow: "visible"
    },

    streetsBox: {
        padding: "15px",
    },
    popoverBox: {
        position: "absolute",
        top: '0',
        right: '-100px',
        border: '1px solid black',
        padding: '10px',
        zIndex: "555555",
    },
}));

const style = {
    fontSize: "17px",
    color: "grey"
}

const AutocompleteSearch = () => {
    const classes = useStyles();
    const [showBtn, setShowBtn] = useState(true);
    const [currentId, setCurrentId] = useState(null)


    const streets = [
        {name: 'Ахунбаева', location: " 74.0050 65.000565", id: 1},
        {name: 'Исанова', location: " 74.0050 65.000565", id: 2},
        {name: 'Горький', location: " 74.0050 65.000565", id: 3},
        {name: "Ауэзова", location: " 74.0050 65.000565", id: 4},
        {name: "Турусбекова", location: " 74.0050 65.000565", id: 5},
        {name: "Ленина", location: " 74.0050 65.000565", id: 6},
        {name: "Пушкина", location: " 74.0050 65.000565"},
        {name: "Манаса", location: " 74.0050 65.000565"},
        {name: "Советская", location: " 74.0050 65.000565"},
        {name: "Абдрахманова", location: " 74.0050 65.000565"},
    ]

    return (
        <Autocomplete
            id="combo-box-demo"
            open={true}
            options={streets}
            style={{
                height: "100%",
                width: "100%",
            }}
            ListboxProps={{style: {maxHeight: '70vh'}}}
            getOptionLabel={(option) => `${option.name} ${option.location}`}
            renderOption={(props, option) => {
                return (
                    <>
                        <div className={classes.autocomplete}
                             onMouseEnter={(event => {
                                 setCurrentId(event.target.id)
                                 setShowBtn(true);
                             })}
                        >
                            <div>
                                {option.name}
                                <p><i style={{fontSize: "12px"}}>{option.location}</i></p>
                                <DirectionsBusIcon
                                    sx={{
                                        color: "green",
                                        fontSize: "12px",
                                    }}/>
                            </div>
                                <div style={{position: "absolute", top: "0", right: "0"}}>
                                    <IconButton aria-label="edit">
                                        <ModeEditIcon sx={style}/>
                                    </IconButton>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon sx={style}/>
                                    </IconButton>
                                </div>
                        </div>
                    </>
                );
            }}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Улица"/>}
        />
    );
};

export default AutocompleteSearch;