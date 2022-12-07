import React from 'react';
import {Checkbox, Grid, IconButton, TextField, Typography} from "@mui/material";
import {TabsButton} from "../../../assets/styles/tabs/tabs";
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(theme => ({
    input: {
        height: "40px",
    },
    listBox:{
        display:"grid",
        gridTemplateRows: "36px auto",
        fontSize:"15px"
    },
    horizontalList: {
        alignContent: "flex-start",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        overflowX: "auto",
        padding: "10px 20px 5px 20px",
        height: "60vh",

    },
    row: {
        alignItems: "center",
        display: "flex",
        height: "32px",
        padding: "5px 20px 5px 0",
        width: "270px",
    }
}));


const ObjectsTab = () => {
    const classes = useStyles();
    const label = {inputProps: {'aria-label': 'Checkbox demo'}};
    const objectNumbers = [
        '01KG032AFC', '01KG682LHT', '01KG987FFC',
        '01KG032AFC', '01KG682LHT', '01KG987FFC',
        "01KG032AFC", '01KG987FFC', '01KG682LHT',
        "01KG032AFC", '01KG987FFC', '01KG682LHT',
        "01KG032AFC", '01KG987FFC', '01KG682LHT',
        "01KG032AFC", '01KG987FFC', '01KG682LHT',
        "01KG032AFC", '01KG987FFC', '01KG682LHT',
        "01KG032AFC", '01KG987FFC', '01KG682LHT',
        "01KG032AFC", '01KG987FFC', '01KG682LHT',
        "01KG032AFC", '01KG987FFC', '01KG682LHT',
        "01KG032AFC", '01KG987FFC', '01KG682LHT',
        "01KG032AFC", '01KG987FFC', '01KG682LHT',
        "01KG032AFC", '01KG987FFC', '01KG682LHT',
    ]

    return (
        <Grid>
            <Grid container>
                <div style={{width: "31%", display: 'flex', alignItems: "center", justifyContent: "space-between"}}>
                    <Typography variant={'subtitle2'}>
                        <b>Привязка объектов к маршруту</b>
                    </Typography>
                </div>
                <div style={{width: "31%", color: "gray", display: "flex", alignItems: "center"}}>
                    <Checkbox {...label} disabled checked/>
                    <Typography variant={"subtitle2"}>Автоматическое назначение объектов </Typography>
                </div>
                <div style={{width: "33%", display: "flex", justifyContent: "right"}}>
                    <TabsButton variant="outlined">Объекты</TabsButton>
                    <TabsButton variant="outlined">Группы</TabsButton>
                    <TextField
                        id="standard-bare"
                        variant="outlined"
                        defaultValue="Поиск"
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchIcon/>
                                </IconButton>
                            ),
                            className: classes.input
                        }}
                        sx={{input: {color: 'darkgray'}}}
                    />
                </div>
            </Grid>
            <Grid item sx={{color: 'darkgray', padding: "10px", backgroundColor: "whitesmoke"}}>
                <Typography variant={'subtitle1'} sx={{fontSize: "14px"}}>Найдено
                    элементов: {objectNumbers.length + 1}</Typography>
            </Grid>
            <div className={classes.listBox}>
                <div className={classes.horizontalList}>
                    {objectNumbers.map(obj=>(
                        <div className={classes.row}>
                            <Checkbox {...label} disabled />
                            <Typography variant={"subtitle2"}>{obj} </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </Grid>
    );
};

export default ObjectsTab;