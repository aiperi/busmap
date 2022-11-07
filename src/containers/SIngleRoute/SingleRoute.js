import React from 'react';
import {Grid, IconButton, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import {blue, yellow} from "../../colors";
import {BusNumberWrapper} from "../../assets/styles/trackingWrapper/trackingWrapper";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";
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
    const label = {inputProps: {'aria-label': 'Switch demo'}};

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid sx={{backgroundColor: "whitesmoke"}} spacing={1}>
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
                    <p>102</p>
                </BusNumberWrapper>
                <Typography variant={'h5'} sx={{paddingBottom: "5px"}}>
                    ул. Абакир уулу Торобек — ул. Абакир уулу Торобек
                </Typography>
                <Switch {...label} defaultChecked sx={{marginLeft: "5%"}}/>
            </Box>
            <Grid item>
                <Box sx={{width: '100%', typography: 'body1', backgroundColor:"white"}}>
                    <TabContext value={value} >
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <TabList
                                onChange={handleChange}
                                aria-label="table_report"
                                // indicatorColor="red"
                                // textColor={pr}
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
                                    label={<StyledBadge badgeContent={8} color="primary">Объекты </StyledBadge>}
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