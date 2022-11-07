import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(theme => ({
    autocomplete:{
       fontSize:"16px",
        borderBottom: "1px solid #DFDFDF",
        padding:"10px",
        width:"90%",
        position: "relative",
        overflow:"visible"
    },

    streetsBox:{
        padding:"15px",
    },
    popoverBox:{
        position: "absolute",
        top:'0',
        right:'-100px',
        border:'1px solid black',
        padding:'10px',
        zIndex:"555555",
    },


}));

const AutocompleteSearch = () => {
    const classes = useStyles();


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        // const target = event.target;
        // console.log(target)
        // const parent = target.parentElement;
        // console.log(parent)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const streets = [
        {name:'Ахунбаева', location:" 74.0050 65.000565"},
        {name:'Исанова',location:" 74.0050 65.000565"},
        {name:'Горький',location:" 74.0050 65.000565"},
        {name:"Ауэзова",location:" 74.0050 65.000565"},
        {name:"Турусбекова",location:" 74.0050 65.000565"},
        {name:"Ленина",location:" 74.0050 65.000565"},
        {name:"Пушкина",location:" 74.0050 65.000565"},
        {name:"Манаса",location:" 74.0050 65.000565"},
        {name:"Советская",location:" 74.0050 65.000565"},
        {name:"Абдрахманова",location:" 74.0050 65.000565"},
    ]

    return (
        <Autocomplete
            id="combo-box-demo"
            open={true}
            options={streets}
            style={{
                height:"100%",
                width:"100%",
            }}
            ListboxProps={{ style: { maxHeight: '60vh' } }}
            getOptionLabel={(option) => `${option.name} ${option.location}`}
            renderOption={(props, option)=> {
                return (
<>
                    <div className={classes.autocomplete}>
                        <div>
                            {option.name}
                            <p><i style={{fontSize:"12px"}}>{option.location}</i></p>
                            <DirectionsBusIcon
                                sx={{
                                    color: "green",
                                    fontSize:"12px",
                                    // borderRadius: "50%"
                                }}/>
                        </div>
                        {/*<div className={classes.popoverBox}>*/}
                        {/*    {option.name}*/}
                        {/*</div>*/}
                    </div>
</>
                );
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Улица" />}
        />
    );
};

export default AutocompleteSearch;