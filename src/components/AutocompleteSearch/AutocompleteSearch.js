import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {makeStyles} from "@mui/styles";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";
import {nanoid} from "nanoid";


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

const AutocompleteSearch = ({busStops}) => {
    const classes = useStyles();
    const [showBtn, setShowBtn] = useState(true);
    const [currentId, setCurrentId] = useState(null)

    return (
        <Autocomplete
            id="combo-box-demo"
            open={true}
            options={busStops}
            style={{
                height: "100%",
                width: "100%",
            }}
            ListboxProps={{style: {maxHeight: '70vh'}}}
            getOptionLabel={(option) => `${option.n} ${option.p[0].x} ${option.p[0].y}`}
            renderOption={(props, option) => {
                return (
                    <>
                        <div className={classes.autocomplete}
                             onMouseEnter={(event => {
                                 setCurrentId(event.target.id)
                                 setShowBtn(true);
                             })}
                             key={nanoid()}
                        >
                            <div>
                                {option.n}
                                <p><i style={{fontSize: "12px"}}>{option.p[0].x} {option.p[0].y}</i></p>
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