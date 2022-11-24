import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {nanoid} from "nanoid";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import {makeStyles} from "@mui/styles";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";


const useStyles = makeStyles(() => ({
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

const CustomAutoComplete = () => {
    const stops = useSelector(state => state.stops.stops);
    const classes = useStyles();
    const [value, setValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = stops.filter(option => option.n.toLowerCase().includes(value.toLowerCase()))

    const autocompleteRef = useRef();

    useEffect(() => {
        const handleClick = (event) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
                setShowSuggestions(false)
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSuggestionClick = (suggetion) => {
        setValue(suggetion);
        setShowSuggestions(false);
    }





    return (
        <div className="autocomplete" ref={autocompleteRef}>
            <input
                value={value}
                onChange={handleChange}
                placeholder="Search"
                onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && (
                <div className="suggestions">
                    {suggestions.map(suggestion => (

                        <div className={classes.autocomplete} onClick={() => handleSuggestionClick(suggestion)}
                             key={nanoid()}
                        >
                            {suggestion.n}
                            <p><i style={{fontSize: "12px"}}>{suggestion.p[0].x}, {suggestion.p[0].y}</i></p>
                            <DirectionsBusIcon
                                sx={{
                                    color: "green",
                                    fontSize: "12px",
                                }}
                            />
                            {/*<div style={{position: "absolute", top: "0", right: "0"}}>*/}
                            {/*    <IconButton aria-label="edit">*/}
                            {/*        <ModeEditIcon sx={style}/>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton aria-label="delete">*/}
                            {/*        <DeleteIcon sx={style}/>*/}
                            {/*    </IconButton>*/}
                            {/*</div>*/}
                        </div>
                    ))}

                </div>
            )
            }
        </div>
    )
}

export default CustomAutoComplete;
