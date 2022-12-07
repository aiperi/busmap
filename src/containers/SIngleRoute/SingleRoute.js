import React, {useEffect} from 'react';
import {Grid, IconButton, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import {blue, yellow} from "../../colors";
import {BusNumberWrapper} from "../../assets/styles/trackingWrapper/trackingWrapper";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate, useParams} from "react-router-dom";
import {routes} from "../../paths";
import Switch from "@mui/material/Switch";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {styled} from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import StopsTab from "../../components/RoutesTabPanels/StopsTab/StopsTab";
import ScheduleTab from "../../components/RoutesTabPanels/ScheduleTab/ScheduleTab";
import ObjectsTab from "../../components/RoutesTabPanels/ObjectsTab/ObjectsTab";
import {useDispatch, useSelector} from "react-redux";
import {ColorButton} from "../../components/RoutesTabPanels/StopsTab/style";
import {
    fetchRoutesGroupsRequest,
    fetchRoutesUnitsRequest,
    fetchSingleRoutesRequest
} from "../../store/actions/routesActions";
import {assignUnitsToRoute, assignUnitsToRouteSagas} from "../../store/sagas/routesSagas";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -15,
        top: 1,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor:blue,
        width:"25px",
    },
}));

const SingleRoute = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {id} = useParams()
    const label = {inputProps: {'aria-label': 'Switch demo'}};
    const [value, setValue] = React.useState('1');
    const [uCount, setUCount] = React.useState(0);
    const assign = useSelector((state) => state.routes.assign)
    const globalId = useSelector((state) => state.routes.globalID)
    const single = useSelector((state) => state.routes.singleRoutes)
    const unit = useSelector((state) => state.routes.assignUnits)
    const group = useSelector((state) => state.routes.assignGroups)
    const saveButton = useSelector((state) => state.routes.save)

    console.log(assign)
    useEffect(() => {
        dispatch(fetchSingleRoutesRequest(id))
    },[])

    useEffect(() => {
        let total = 0
        if(assign.length > 1){
            for(let i = 0; i<assign.length; i++){
             total += assign[i] && assign[i].length
            }
        } else {
           total = assign[globalId-1] && assign[globalId-1].length
        }

        setUCount(total)
    }, [assign])


    const SaveAssignUnitsToRoute = () => {
        dispatch(assignUnitsToRoute({route:[id], unit:[...unit], group:[...group]}))
    }

    const onCancel = () => {

    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid sx={{backgroundColor: "whitesmoke"}} spacing={1}>
            {single && (
                <Box sx={{
                    backgroundColor: "white",
                    padding: '10px',
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid lightgrey",
                    marginBottom: "20px"
                }}>
                    <IconButton variant="outlined" onClick={() => navigate(routes)}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <DirectionsBusIcon
                        sx={{
                            color: yellow,
                            fontSize: "30px",
                            width: '60px'
                        }}/>
                    <BusNumberWrapper>
                        <p>{single.n}</p>
                    </BusNumberWrapper>
                    <Typography variant={'h5'} sx={{paddingBottom: "5px"}}>
                        {/*<p>{single.st[0].id.n} - {single.st[single.st.length - 1].id.n}</p>*/}
                    </Typography>
                    <Switch {...label} defaultChecked sx={{marginLeft: "5%"}} sx={{marginLeft: "300px"}}/>
                    {/*{saveButton && (*/}
                    <div style={{display: "flex "}}>
                        <ColorButton style={{margin:"5px"}} variant={'contained'} onClick={onCancel}>
                            Отменить
                        </ColorButton>
                        <ColorButton style={{margin:"5px"}} variant={'contained'} onClick={SaveAssignUnitsToRoute}>
                            Сохранить
                        </ColorButton>
                    </div>
                    {/*)}*/}
                </Box>
            )}
            <Grid item>
                <Box sx={{width: '100%', typography: 'body1', backgroundColor:"white"}}>
                    <TabContext value={value}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <TabList
                                onChange={handleChange}
                                aria-label="table_report"
                                TabIndicatorProps={{
                                    sx: {
                                        backgroundColor: blue,
                                    },
                                }}
                            >
                                <Tab
                                    sx={{paddingRight:"35px"}}
                                    label={<StyledBadge badgeContent={10} color="primary">Остановки </StyledBadge>}
                                    value="1"
                                />
                                <Tab
                                    sx={{paddingRight:"35px"}}
                                    label={<StyledBadge badgeContent={22} color="primary">Расписание </StyledBadge>}
                                    value="2"
                                />
                                <Tab
                                    sx={{paddingRight:"35px"}}
                                    label={<StyledBadge badgeContent={uCount} color="primary">Объекты </StyledBadge>}
                                    value="3"
                                />
                            </TabList>
                        </Box>
                        <TabPanel value="1" sx={{padding:'10px'}}>
                            <StopsTab/>
                        </TabPanel>
                        <TabPanel value="2" sx={{padding:'10px'}}>
                            <ScheduleTab/>
                        </TabPanel>
                        <TabPanel value="3" sx={{padding:'10px'}}>
                            <ObjectsTab/>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SingleRoute;