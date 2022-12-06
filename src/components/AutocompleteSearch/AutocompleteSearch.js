import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {makeStyles} from "@mui/styles";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Checkbox, Grid, IconButton, Tooltip, Typography, Button, FormControlLabel, FormGroup} from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "react-redux";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import {
    deleteSelectedStopRequest,
    deleteStopRequest,
    fetchSingleStopRequest, fetchStopInRoutesRequest,
    getStopIdToEdit,
    showEditOpen, showOverlay
} from "../../store/actions/stopsActions";
import {blue, green, yellow} from "../../colors";
import AppWindow from "../UI/AppWindow/AppWindow";
import ModalComponent from "../UI/ModalComponent/ModalComponent";


const useStyles = makeStyles(theme => ({
    autocomplete: {
        fontSize: "16px",
        borderBottom: "1px solid #DFDFDF",
        padding: "10px",
        width: "98%",
        position: "relative",
        overflow: "visible",
        cursor: 'pointer'
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
    const dispatch = useDispatch()
    const classes = useStyles();
    const stops = useSelector(state => state.stops.stops);
    const typeOfTransport = useSelector(state => state.stops.transportTypes)
    const routesCount = useSelector(state => state.stops.routesCountInStop);
    const [showBtn, setShowBtn] = useState(null);

    const [open, setOpen] = useState(false);
    const [deleteElement, setDeleteElement] = useState('');

    const [showCheckbox, setShowCheckbox] = useState(false)

    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [openSelectedDelete, setOpenSelectedDelete] = useState(false);

    const [showRoutesInStop, setShowRoutesInStop] = useState(false)


    const onClose = () => {
        setOpen(false);
        setDeleteElement(prevState => {
            prevState = '';
            return prevState
        });
    }


    const onStopClick = (e, id) => {
        if (showCheckbox === true) {
            e.stopPropagation();
        } else {
            dispatch(fetchSingleStopRequest(id))
            dispatch(fetchStopInRoutesRequest(id))
            if (parseInt(e.currentTarget.id) === id) {
                setShowBtn(id)
            }
        }
    }

    const onDelete = (id) => {
        dispatch(deleteStopRequest(id))
        setOpen(false);
        setDeleteElement(prevState => {
            prevState = '';
            return prevState
        });
    }

    const deleteSelected = () => {
        dispatch(deleteSelectedStopRequest(isCheck));
        setOpenSelectedDelete(false);
        setIsCheck([])
        dispatch(showOverlay())
    }


    const deleteSelectedClose = () => {
        setOpenSelectedDelete(false);
        setIsCheck([])

    }


    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(stops.map(stop => stop.id));
        if (isCheckAll) {
            setIsCheck([]);
        }

    };

    const handleClick = e => {
        const {id, checked} = e.target;
        setIsCheck([...isCheck, parseInt(id)]);
        if (checked === false) {
            setIsCheck(isCheck.filter(item => item !== parseInt(id)));
        }
    };


    return (
        <>
            <Grid container justifyContent={"space-between"}>
                <Grid item>
                    <Typography variant={"subtitle1"}
                                sx={{color: "#166767", fontWeight: "bold"}}>{typeOfTransport}</Typography>
                </Grid>
                <Grid item>

                    <Tooltip title="Импортировать остановки из файла" arrow>
                        <IconButton
                        >
                            <DriveFolderUploadIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Выбрать элементы">
                        <IconButton
                            onClick={() => {
                                setShowCheckbox(!showCheckbox)
                                dispatch(showOverlay())
                            }}
                        >
                            <ListIcon/>
                        </IconButton>
                    </Tooltip>
                </Grid>

            </Grid>
            {showCheckbox && (
                <Grid container justifyContent={"space-between"}>

                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox
                                id={"all"}
                                onChange={handleSelectAll}
                                checked={isCheckAll}/>}
                            label="Выбрать все"
                        />
                    </FormGroup>
                    <IconButton aria-label="delete"
                                onClick={() => {
                                    setOpenSelectedDelete(true)
                                }}>

                        <DeleteIcon sx={{fontSize: "25px"}}/>
                    </IconButton>
                </Grid>
            )}

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
                                    onClick={(e) => onStopClick(e, option.id)}
                                    key={nanoid()}
                                    id={option.id}
                                >
                                    {showCheckbox && (


                                        <div
                                            id={option.id}
                                            style={{
                                                position: "absolute",
                                                top: "0", right: "0",
                                                zIndex: "123",
                                            }}>
                                            {/*<Checkbox*/}
                                            {/*    key={option.id}*/}
                                            {/*    type="checkbox"*/}
                                            {/*    id={option.id}*/}
                                            {/*    onChange={handleClick}*/}
                                            {/*    checked={isCheck.includes(option.id)}*/}
                                            {/*/>*/}
                                            <input
                                                type="checkbox"
                                                id={option.id}
                                                checked={isCheck.includes(option.id)}
                                                onChange={handleClick}
                                            />
                                        </div>
                                    )}

                                    <div>
                                        {option.n}
                                        <p><i style={{fontSize: "12px"}}>{option.p[0].x} , {option.p[0].y}</i></p>
                                        <DirectionsBusIcon
                                            sx={{
                                                color: option.tp === 2 && blue ||
                                                    option.tp === 3 && yellow ||
                                                    option.tp === 0 && blue ||
                                                    green,
                                                fontSize: "12px",
                                            }}/>
                                    </div>

                                    {option.id === showBtn && !showCheckbox && (
                                        <div style={{position: "absolute", bottom: "0", right: "0"}}>
                                            <IconButton aria-label="edit"
                                                        onClick={() => {
                                                            dispatch(getStopIdToEdit(showBtn));
                                                            dispatch(showEditOpen())
                                                        }}
                                            >
                                                <ModeEditIcon sx={style}/>
                                            </IconButton>
                                            <IconButton aria-label="delete"
                                                        onClick={() => {
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

                                    {option.id === showBtn && !showCheckbox && (
                                        <div style={{position: "absolute", top: "0", right: "0"}}>
                                            <Tooltip title={"Эта остановка задействованна в "+routesCount+" маршрутах"} arrow>
                                            <IconButton aria-label="delete"
                                                        onClick={()=>setShowRoutesInStop(!showRoutesInStop)}
                                            >
                                                <AccountTreeIcon sx={style}/>
                                                <b style={{fontSize:"14px", paddingLeft:'3px'}}>{routesCount}</b>
                                            </IconButton>
                                            </Tooltip>
                                        </div>
                                    )}

                                </div>
                            </>
                        );
                    }}
                    sx={{}}
                    renderInput={(params) => <TextField {...params} label="Поиск"/>}
                />
            )}
            {open && (
                <AppWindow open={open} onClose={onClose} confirm={() => onDelete(deleteElement)}/>
            )}

            {openSelectedDelete && (
                <AppWindow open={openSelectedDelete} onClose={deleteSelectedClose} confirm={deleteSelected}/>
            )}

            {showRoutesInStop && (
                <ModalComponent open={showRoutesInStop} onClose={()=>setShowRoutesInStop(false)}/>
            )}
        </>

    );
};

export default AutocompleteSearch;