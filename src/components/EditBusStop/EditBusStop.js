import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Grid, TextField, Tooltip, Typography} from "@mui/material";
import {blue, green, yellow} from "../../colors";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import {styled} from "@mui/material/styles";
import {editStopRequest} from "../../store/actions/stopsActions";
import {useDispatch} from "react-redux";


const style = {
    fontSize: "22px",
}

const ColorButton = styled(Button)(() => ({
    color: 'white',
    textTransform: "capitalize",
    margin: "5px",
    backgroundColor: "#295b8d",
    boxShadow: "none",
    '&:hover': {
        backgroundColor: "#19538c",
    },
}));

const EditBusStop = ({onCancel, radius, changeRadius, position, id, onEdit, singleStop, center}) => {
    const dispatch = useDispatch();
    const [type, setType] = useState({
        bus: singleStop.tp === 1 && true || singleStop.tp === 4 && true || singleStop.tp === 5 && true || singleStop.tp === 6 && true || false,
        trolleybus:  singleStop.tp === 2 && true || singleStop.tp === 4 && true || singleStop.tp === 5 && true || singleStop.tp === 7 && true || false,
        taxi:  singleStop.tp === 3 && true || singleStop.tp === 5 && true || singleStop.tp === 6 && true || singleStop.tp === 7 && true || false,
    })

    // useEffect(()=>{
    //     if(singleStop.tp === 1){
    //         setType(prevState => ({
    //             ...prevState,
    //             bus: true
    //         }))
    //     }else if(singleStop.tp === 2){
    //         setType(prevState => ({
    //             ...prevState,
    //             trolleybus: true
    //         }))
    //     }else if(singleStop.tp === 3){
    //         setType(prevState => ({
    //             ...prevState,
    //             taxi: true
    //         }))
    //     }else if(singleStop.tp === 4){
    //         setType(prevState => ({
    //             ...prevState,
    //             bus:true,
    //             trolleybus: true
    //         }))
    //     }else if(singleStop.tp === 5){
    //         setType(prevState => ({
    //             ...prevState,
    //             trolleybus: true,
    //             bus: true,
    //             taxi: true,
    //         }))
    //     }else if(singleStop.tp === 6){
    //         setType(prevState => ({
    //             ...prevState,
    //             bus: true,
    //             taxi: true,
    //         }))
    //     }else if(singleStop.tp === 7){
    //         setType(prevState => ({
    //             ...prevState,
    //             trolleybus: true,
    //             taxi: true,
    //         }))
    //     }
    //
    //
    //
    // },[singleStop])


    const [stop, setStop] = useState(
        {
            n: singleStop.n || "",
            tp: singleStop.tp || 0,
            d: singleStop.d || "",
            sh: 0,
        });

    const handleChange = (e) => {
        const name = e.target.name
        setType(prevState => ({
            ...prevState,
            [name]: e.target.checked
        }))
    }

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setStop(prev => ({
            ...prev,
            [name]: value,
            p:[{
                x:center ? center.lng : position.lng,
                y:center ? center.lat : position.lat,
                r:radius
            }]
        }));
    }


    useEffect(()=>{

        let typeF = 0;

        for (let key in type) {
            if(type["bus"] === true && type["trolleybus"] === false && type["taxi"] === false){
                typeF = 1;
            }else if(type["bus"] === false && type["trolleybus"] === true && type["taxi"] === false){
                typeF = 2;
            }else if(type["bus"] === false && type["trolleybus"] === false && type["taxi"] === true){
                typeF = 3;
            }else if(type["bus"] === true && type["trolleybus"] === true && type["taxi"] === false){
                typeF = 4;
            }else if(type["bus"] === true && type["trolleybus"] === true && type["taxi"] === true){
                typeF = 5;
            }else if(type["bus"] === true && type["trolleybus"] === false && type["taxi"] === true){
                typeF = 6;
            }else if(type["bus"] === false && type["trolleybus"] === true && type["taxi"] === true){
                typeF = 7;
            } else{
                typeF = 0;
            }
        }


        setStop(prev => ({
            ...prev,
            tp:typeF,
            p:[{
                x:center ? center.lng : position.lng,
                y:center ? center.lat : position.lat,
                r:radius
            }]
        }));
    },[radius, position, type, center])

    const SubmitEdittedStop =  () => {
        dispatch(editStopRequest({id: id, obj:{...stop}}))

        setStop({
            n: "Новая остановка",
            tp: 0,
            d: "",
            sh: 0,
        })
        setType({
            bus: false,
            trolleybus: false,
            taxi: false,
        })

        onEdit()

    }

    return (
        <Grid container>
            <Grid item container justifyContent={"space-between"}
                  sx={{padding: "25px 15px", backgroundColor: "white", border: "1px solid grey"}}>
                <TextField
                    name="n"
                    variant={"outlined"}
                    placeholder={"Название"}
                    value={stop.n}
                    onChange={onChangeHandler}
                    sx={{
                        width: "33%",
                        border: "1px solid lightgrey",
                        fontSize: "12px",
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": {
                                border: "none"
                            }
                        }
                    }}
                    inputProps={{style: {height: "2px"}}}
                />
                <TextField
                    name="d"
                    variant={"outlined"}
                    placeholder={"Описание"}
                    value={stop.d}
                    onChange={onChangeHandler}
                    sx={{
                        width: "37%",
                        border: "1px solid lightgrey",
                        fontSize: "12px",
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": {
                                border: "none"
                            }
                        }
                    }}
                    inputProps={{style: {height: "2px"}}}
                />

                <Grid container item width={"25%"} justifyContent={"space-evenly"} alignItems={"center"}>
                    <label style={{color: "grey", caretColor: "transparent"}}>Тип</label>
                    <Tooltip title="Автобусы" arrow>
                        <Checkbox
                            name="bus"
                            checked={type.bus}
                            onChange={handleChange}
                            inputProps={{'aria-label': 'controlled'}}
                            icon={<DirectionsBusFilledIcon
                                sx={{...style, color: "darkgrey"}}/>}
                            checkedIcon={<DirectionsBusFilledIcon sx={{...style, color: green}}/>}
                            sx={{backgroundColor: "whitesmoke", "&:hover": {backgroundColor: 'lightgrey'}}}
                        />
                    </Tooltip>

                    <Tooltip title="Тролейбусы" arrow>
                        <Checkbox
                            name="trolleybus"
                            checked={type.trolleybus}
                            onChange={handleChange}
                            inputProps={{'aria-label': 'controlled'}}
                            icon={<DirectionsTransitIcon
                                sx={{...style, color: "darkgrey"}}/>}
                            checkedIcon={<DirectionsTransitIcon sx={{...style, color: blue}}/>}
                            sx={{backgroundColor: "whitesmoke", "&:hover": {backgroundColor: 'lightgrey'}}}
                        />
                    </Tooltip>


                    <Tooltip title="Маршрутные такси" arrow>
                        <Checkbox
                            name='taxi'
                            checked={type.taxi}
                            onChange={handleChange}
                            inputProps={{'aria-label': 'controlled'}}
                            icon={<LocalTaxiIcon
                                sx={{...style, color: "darkgrey"}}/>}
                            checkedIcon={<LocalTaxiIcon sx={{...style, color: yellow}}/>}
                            sx={{backgroundColor: "whitesmoke", "&:hover": {backgroundColor: 'lightgrey'}}}
                        />
                    </Tooltip>
                </Grid>


            </Grid>
            <Grid item container justifyContent={"space-between"}
                  sx={{backgroundColor: "#15416c", padding: ' 10px 15px'}}>
                <div style={{display: "flex", alignItems: "center", color: 'white'}}>
                    <Typography variant={"subtitle1"}>Радиус</Typography>
                    <TextField type={"number"}
                               value={radius}
                               onChange={changeRadius}
                               inputProps={{style: {color: "white"}}}
                               sx={{
                                   border: "1px solid white",
                                   margin: "0 10px",
                                   width: "80px",
                                   fontSize: "12px",
                                   "& .MuiOutlinedInput-root": {
                                       "& > fieldset": {
                                           border: "none"
                                       }
                                   }
                               }}

                    />
                    <Typography variant={"subtitle1"}>м</Typography>

                </div>
                <div>
                    <ColorButton variant={"contained"} onClick={onCancel}>Отменить</ColorButton>
                    <ColorButton variant={"contained"} onClick={SubmitEdittedStop}>Сохранить</ColorButton>
                </div>
            </Grid>
        </Grid>
    );
};

export default EditBusStop;