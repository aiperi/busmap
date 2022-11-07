import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TextField from "@mui/material/TextField";
import {makeStyles} from "@mui/styles";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import Typography from "@mui/material/Typography";
import {TabsContainer} from "../../assets/styles/tabs/tabs";
import TableComponent from "../../components/TableComponent/TableComponent";


const useStyles = makeStyles(theme => ({
    autocomplete:{
        fontSize:"14px",
        borderBottom: "1px solid #DFDFDF",
        padding:"5px",
        width:"90%"
    },

    streetsBox:{
        padding:"15px",
    }

}));

const Reports = () => {
const classes=useStyles();
const [open,setOpen] = useState(false);
const [openEl,setOpenEl] = useState(false);

    const streets = [
        {name:'Рейсы объекта'},
        {name:'Рейсы маршрута'},
        {name:'Рейсы объекта (детализированные)'},
        {name:'Рейсы маршрута (детализированные)'},
        {name:'Рейсы комплексного маршрута'},
        {name:'Рейсы группы объектов'},
    ]



    const elements = [
        {name:'01KG032KFC'},
        {name:'08KG532AGC'},
        {name:'02KG032AFC'},
        {name:'01KG032AFC'},
        {name:'05KG122AFC'},
        {name:'01KG032NNC'},
    ]


    const [periodDate, setPeriodDate] = useState(
        {
            from: null,
            to: null,
        });
    const [searchData, setSearchData] = useState({
        user: false,
        date: false,
        search: true,
    });


    return (
        <Grid sx={{ backgroundColor:"whitesmoke"}}>
            <Typography
                variant={"h6"}
                sx={{borderBottom:"1px solid lightgrey", backgroundColor:"white", padding:"10px"}}
            >
                Выберите параметры отсчета
            </Typography>

                <Grid
                    container
                    component="form"
                    alignItems="center"
                    // justifyContent="space-around"
                    sx={{padding:"2px 10px", backgroundColor: "white", marginTop:"5px"}}
                >
                    <Grid item xs={12} sm={4} md={3}>
                        <Autocomplete
                            id="combo-box-demo"
                            open={open}
                            onOpen={() => {
                                setOpen(true);
                            }}
                            onClose={() => {
                                setOpen(false);
                            }}
                            options={streets}
                            // sx={{
                            //     height:"20px",
                            //     width:"20px"
                            // }}
                            ListboxProps={{ style: { maxHeight: '30vh' } }}
                            getOptionLabel={(option) => `${option.name}`}
                            renderOption={(props, option)=> {
                                return (
                                    <div className={classes.autocomplete}>
                                        <p>
                                            {option.name}
                                            <p><i style={{fontSize:"12px"}}>{option.location}</i></p>
                                        </p>
                                    </div>
                                );
                            }}
                            sx={{ width: 300 }}
                            renderInput={
                                (params) => <TextField {...params}  sx={{input: {color: 'black', height:"10px"}}}label={'Тип отсчета'} />}
                        />
                    </Grid>


                    <Grid item xs={12} sm={4} md={3}>
                        <Autocomplete
                            id="combo-box-demo"
                            open={openEl}
                            onOpen={() => {
                                setOpenEl(true);
                            }}
                            onClose={() => {
                                setOpenEl(false);
                            }}
                            options={elements}
                            // sx={{
                            //     height:"20px",
                            //     width:"20px"
                            // }}
                            ListboxProps={{ style: { maxHeight: '30vh' } }}
                            getOptionLabel={(option) => `${option.name}`}
                            renderOption={(props, option)=> {
                                return (
                                    <div className={classes.autocomplete}>
                                        <p>
                                            {option.name}
                                            <p><i style={{fontSize:"12px"}}>{option.location}</i></p>
                                        </p>
                                    </div>
                                );
                            }}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params}sx={{input: {color: 'black', height:"10px"}}} label={'Элемент'} />}
                        />
                    </Grid>


                    <Grid item xs={12} sm={4} md={2}>
                        <LocalizationProvider dateAdapter={AdapterMoment} >
                            <DatePicker
                                // mask={maskMap['ru']}
                                label="от"
                                openTo="month"
                                views={['year', 'month', 'day']}
                                value={periodDate.from}
                                // onChange={(newValue) => {
                                //     setPeriodDate(prevState => ({
                                //         ...prevState,
                                //         from: newValue,
                                //     }));
                                //     setSearchData(prevState => ({
                                //         ...prevState,
                                //         date: true,
                                //         search: false,
                                //     }));
                                // }}
                                renderInput={(params) => <TextField {...params} sx={{input: {color: 'black', height:"10px"}}}/>}
                            />
                        </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} sm={4} md={2}>
                        <LocalizationProvider dateAdapter={AdapterMoment} >
                            <DatePicker
                                // mask={maskMap['ru']}
                                label="до"
                                openTo="month"
                                views={['year', 'month', 'day']}
                                value={periodDate.from}
                                // onChange={(newValue) => {
                                //     setPeriodDate(prevState => ({
                                //         ...prevState,
                                //         from: newValue,
                                //     }));
                                //     setSearchData(prevState => ({
                                //         ...prevState,
                                //         date: true,
                                //         search: false,
                                //     }));
                                // }}
                                renderInput={(params) => <TextField {...params} sx={{input: {color: 'black', height:"10px"}}}/>}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6} lg={6}>
                                <Button
                                    // startIcon={<SearchIcon/>}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    style={{ backgroundColor: "whitesmoke", marginLeft:"5px" }}
                                    // className={classes.submit}
                                    // loading={loading}
                                    sx={{
                                        margin: {
                                            xs: '15px 0',
                                        },
                                    }}
                                >
                                    Найти
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            <div style={{height:"75vh", overflowY:'auto', padding:"10px"}}>
           <TableComponent/>
            </div>
        </Grid>

    );
};

export default Reports;