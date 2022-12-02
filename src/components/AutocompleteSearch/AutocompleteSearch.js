import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {makeStyles} from "@mui/styles";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";
import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "react-redux";
import {
    deleteStopRequest,
    fetchSingleStopRequest,
    getStopIdToEdit,
    showEditOpen
} from "../../store/actions/stopsActions";
import {blue, green, yellow} from "../../colors";
import AppWindow from "../UI/AppWindow/AppWindow";


const useStyles = makeStyles(theme => ({
    autocomplete: {
        fontSize: "16px",
        borderBottom: "1px solid #DFDFDF",
        padding: "10px",
        width: "98%",
        position: "relative",
        overflow: "visible",
        cursor:'pointer'
    },

    // streetsBox: {
    //     padding: "15px",
    // },
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
    const dispatch = useDispatch()
    const classes = useStyles();
    const [showBtn, setShowBtn] = useState(null);
    const [currentId, setCurrentId] = useState(null);
    const [currentOptionId, setCurrentOptionId] = useState(null);
    const stops = useSelector(state => state.stops.stops);
    const singleStop = useSelector(state => state.stops.singleStop);
    const [open, setOpen] = useState(false);
    const [deleteElement, setDeleteElement] = useState('');

    const onClose = ()=>{
        setOpen(false);
        setDeleteElement(prevState => {
            prevState = '';
            return prevState
        });
    }
    const onStopClick =(e,id)=>{
        dispatch(fetchSingleStopRequest(id))
        if(parseInt(e.currentTarget.id) === id){
            setShowBtn(id)
        }
    }

    // const showBtns =  (e,id)=>{
    //     console.log("current target id ", e.currentTarget.id)
    //     console.log("option id", id)
    //     if(parseInt(e.currentTarget.id) === id){
    //         setShowBtn(id)
    //     }
    //     console.log("show btn id",showBtn)
    // }


    const onDelete = (id)=>{
        dispatch(deleteStopRequest(id))
        setOpen(false);
        setDeleteElement(prevState => {
            prevState = '';
            return prevState
        });
    }


    return (
        <>
            {stops && (
                <Autocomplete
                    id="combo-box-demo"
                    open={true}
                    options={stops}
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                    ListboxProps={{style: {maxHeight: '70vh'}}}
                    getOptionLabel={(option) => `${option.n} ${option.p[0]?.x} ${option.p[0]?.y}`}
                    renderOption={(props, option) => {
                        return (
                            <>
                                <div
                                    className={classes.autocomplete}
                                   onClick={(e)=>onStopClick(e,option.id)}
                                     key={nanoid()}
                                    id={option.id}
                                >
                                    <div>
                                        {option.n}
                                        <p><i style={{fontSize: "12px"}}>{option.p[0].x} , {option.p[0].y}</i></p>
                                        <DirectionsBusIcon
                                            sx={{
                                                color: option.tp === 2 && blue ||
                                                    option.tp===3 && yellow ||
                                                    option.tp===0 && blue ||
                                                    green,
                                                fontSize: "12px",
                                            }}/>
                                    </div>

                                    {option.id === showBtn  && (
                                        <div style={{position: "absolute", bottom: "0", right: "0"}}>
                                        <IconButton aria-label="edit"
                                        onClick={()=>{
                                            dispatch(getStopIdToEdit(showBtn));
                                            dispatch(showEditOpen())
                                        }}
                                        >
                                            <ModeEditIcon sx={style}/>
                                        </IconButton>
                                        <IconButton aria-label="delete"
                                                    onClick={()=> {
                                                        setOpen(true)
                                                        setDeleteElement(prevState => {
                                                            prevState = option.id;
                                                            return prevState
                                                        });
                                                    }}>
                                            <DeleteIcon sx={style}/>
                                        </IconButton>
                                    </div>
                                    )}

                                </div>
                            </>
                        );
                    }}
                    sx={{}}
                    renderInput={(params) => <TextField {...params} label="Улица"/>}
                />
            )}
            {open && (
                <AppWindow open={open} onClose={onClose} confirm={()=>onDelete(deleteElement)}/>
            )}
        </>

    );
};

export default AutocompleteSearch;