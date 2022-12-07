import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {makeStyles} from "@mui/styles";
import Switch from '@mui/material/Switch';
import {useNavigate} from "react-router-dom";
import {singleRoute} from "../../paths";
import {useStyles} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {fetchStopsRequest} from "../../store/actions/stopsActions";
import {fetchAllRoutesRequest, fetchRoutesStopsRequest} from "../../store/actions/routesActions";
import {Link} from "react-router-dom";

const AutocompleteRoutes = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const streets = useSelector((state) => state.routes.stops);

    useEffect(() => {
        dispatch(fetchRoutesStopsRequest())
    }, []);

  const r = streets.map(item => item.st.map(i => i.st_rt_id))


    // const label = {inputProps: {'aria-label': 'Switch demo'}};
    // return (
    //     <Autocomplete
    //         id="combo-box-demo"
    //         open={true}
    //         options={streets}
    //         style={{
    //             height: "100%",
    //             width: "100%",
    //
    //         }}
    //         ListboxProps={{style: {maxHeight: '60vh'}}}
    //         // getOptionLabel={(option) => `${option.st[0].n} ${option.start} ${option.end}`}
    //         renderOption={(props, option) => {
                return (
                    <>
                        {streets.map((item) => (
                            <Link to={`${item.id}`} key={item.id} className={classes.autocomplete} >
                                <div
                                    style={
                                        {
                                            display: "flex",
                                            width: '6%',
                                            justifyContent: 'space-between',
                                            alignItems: "center"
                                        }}
                                >
                                    <DirectionsBusIcon
                                        sx={{
                                            color: "white",
                                            fontSize: "18px",
                                            borderRadius: "50%",
                                            backgroundColor: 'green'
                                        }}/>
                                    <div style={{width: "50px", border: "1px solid lightgrey", textAlign: 'center'}}>
                                        {item.n}
                                    </div>
                                </div>
                                {item.st.map(i => (
                                    <p style={{fontSize: "18px"}}>{i.id.n}</p>
                                    ))}
                            </Link>
                        ))}
                    </>
            //     );
            // }}
        //     sx={{width: 300}}
        //     renderInput={(params) => <TextField {...params} label="Поиск"/>}
        // />
    );
};

export default AutocompleteRoutes;