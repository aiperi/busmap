import React, {useState} from 'react';
import {Button, Checkbox, Grid, TextField, Tooltip, Typography} from "@mui/material";
import {blue, green, pink, yellow} from "../../colors";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import TramIcon from "@mui/icons-material/Tram";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import {styled} from "@mui/material/styles";
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

const AddBusStop = ({onCancel, radius, changeRadius, position}) => {

    const [stop, setStop] = useState(
        {
            name: "",
            description: "",
            bus: false,
            trolleybus: false,
            tram: false,
            taxi: false,
            radius: 50,
            position: ""
        });


    const handleChange = (e) => {
        const name = e.target.name
        setStop(prevState => ({
            ...prevState,
            [name]: e.target.checked
        }))
    };

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setStop(prev => ({
            ...prev,
            [name]: value
        }));
    }


    const submitNewStop = () => {

        setStop(prev => ({
            ...prev,
            radius: radius,
            position: position
        }));

    }

    console.log(stop)
    return (
        <Grid container>
            <Grid item container justifyContent={"space-between"}
                  sx={{padding: "25px 15px", backgroundColor: "white", border: "1px solid grey"}}>
                <TextField
                    name="name"
                    variant={"outlined"}
                    placeholder={"Название"}
                    value={stop.name}
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
                    name="description"
                    variant={"outlined"}
                    placeholder={"Описание"}
                    value={stop.description}
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
                            checked={stop.bus}
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
                            checked={stop.trolleybus}
                            onChange={handleChange}
                            inputProps={{'aria-label': 'controlled'}}
                            icon={<DirectionsTransitIcon
                                sx={{...style, color: "darkgrey"}}/>}
                            checkedIcon={<DirectionsTransitIcon sx={{...style, color: blue}}/>}
                            sx={{backgroundColor: "whitesmoke", "&:hover": {backgroundColor: 'lightgrey'}}}
                        />
                    </Tooltip>

                    <Tooltip title="Трамваи" arrow>
                        <Checkbox
                            name="tram"
                            checked={stop.tram}
                            onChange={handleChange}
                            inputProps={{'aria-label': 'controlled'}}
                            icon={<TramIcon
                                sx={{...style, color: "darkgrey"}}/>}
                            checkedIcon={<TramIcon sx={{...style, color: pink}}/>}
                            sx={{backgroundColor: "whitesmoke", "&:hover": {backgroundColor: 'lightgrey'}}}
                        />
                    </Tooltip>

                    <Tooltip title="Маршрутные такси" arrow>
                        <Checkbox
                            name='taxi'
                            checked={stop.taxi}
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
                    <ColorButton variant={"contained"} onClick={submitNewStop}>Сохранить</ColorButton>
                </div>
            </Grid>
        </Grid>
    );
};

export default AddBusStop;