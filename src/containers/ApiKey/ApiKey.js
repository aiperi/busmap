import React, {useState} from 'react';
import {Button, Grid, IconButton, TextField, Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {green} from "../../colors";
import {styled} from "@mui/material/styles";
import {useDispatch} from "react-redux";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';


const ColorButton = styled(Button)(() => ({
    color: 'white',
    textTransform: "capitalize",
    margin: "5px",
    backgroundColor: "#19538CFF",
    boxShadow: "none",
    '&:hover': {
        backgroundColor: "#2267ab",
    },
}));

const ColorButton2 = styled(Button)(() => ({
    color: 'white',
    textTransform: "capitalize",
    margin: "5px",
    backgroundColor: "#608a34",
    boxShadow: "none",
    '&:hover': {
        backgroundColor: "#619d1d",
    },
}));


const ApiKey = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [key, setKey] = useState("");

    const onBtnClick = () => {
        setShow(true);
    }

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setKey(value);
    }

    const onCancel = () => {
        setKey("");
        setShow(false)
    }


    const onSave = () => {

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

                <div style={{
                    backgroundColor: "whitesmoke",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    border: "1px solid lightgrey",
                    padding: "10px"
                }}>
                    <div>
                        <Typography variant={"subtitle1"}>Новый ключ</Typography>
                    </div>
                    <div>
                        <IconButton
                            sx={{border: "1px solid lightgrey", borderRadius: "0", marginRight: "10px"}}
                        >
                            <ContentCopyIcon sx={{fontSize: "18px"}}/>
                        </IconButton>
                        <IconButton
                            sx={{border: "1px solid lightgrey", borderRadius: "0"}}
                        >
                            <DeleteIcon sx={{fontSize: "18px"}}/>
                        </IconButton>
                    </div>
                </div>

                {show && (
                    <div style={{width: "1000px", margin: "20px auto 10px"}}>
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
                                <ColorButton variant={"contained"} onClick={onCancel}>Отменить</ColorButton>
                                <ColorButton2 variant={"contained"}>Сохранить</ColorButton2>
                            </div>
                        </Grid>
                    </div>
                )}

            </Grid>
        </Grid>
    );
};

export default ApiKey;