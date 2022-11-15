import React, {useState} from 'react';
import {Button, Grid, TextField, Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {green} from "../../colors";
import {styled} from "@mui/material/styles";


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


const ApiKey = () => {

    const [show, setShow] = useState(false);
    const [key, setKey] = useState("");

    const onBtnClick = ()=>{
        setShow(true);
    }

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setKey(value);
    }



    return (
        <Grid sx={{backgroundColor: "whitesmoke"}}>
            <Grid container
                  sx={{borderBottom: "1px solid lightgrey", backgroundColor: "white", padding: "10px",}}
                  justifyContent={"space-between"}
            >
                <Typography
                    variant={"h6"}
                >
                    API ключи
                </Typography>
                <Tooltip title="Создать ключ" arrow>
                    <Button onClick={onBtnClick}>
                        <AddIcon sx={{fontSize: "16px", color: green}}/>
                        <VpnKeyIcon sx={{fontSize: "25px", color: green}}/>
                    </Button>
                </Tooltip>

            </Grid>

            <Grid
                container
                component="form"
                alignItems="center"
                sx={{padding: "2px 10px", backgroundColor: "white", marginTop: "5px"}}
            >
                {show && (
                    <div style={{width:"1200px", margin:"0 auto"}}>
                        <Grid item container justifyContent={"space-between"}
                              sx={{padding: "25px 15px", backgroundColor: "white", border: "1px solid lightgrey"}}>
                            <TextField
                                name="key"
                                variant={"outlined"}
                                placeholder={"Ключ"}
                                value={key}
                                onChange={onChangeHandler}
                                sx={{
                                    width: "100%",
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

                        </Grid>
                        <Grid item container justifyContent={"space-between"}
                              sx={{backgroundColor: "#15416c", padding: ' 10px 15px'}}>
                            <div>
                                <ColorButton variant={"contained"}>Отменить</ColorButton>
                                <ColorButton variant={"contained"}>Сохранить</ColorButton>
                            </div>
                        </Grid>
                    </div>
                )}

            </Grid>
        </Grid>
    );
};

export default ApiKey;