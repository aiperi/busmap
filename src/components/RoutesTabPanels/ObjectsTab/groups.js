import {Grid, Typography} from "@mui/material";
import Checkbox from "./checkbox";
import {useStyles} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    assignGroupsToRoutes, assignUnitsToRouteRequest,
    assignUnitsToRoutes,
    fetchRoutesGroupsRequest,
    fetchRoutesUnitsRequest, openAssignSaveButton, setGlobalId, showUnitsCount
} from "../../../store/actions/routesActions";


export const Group = () => {
    const dispatch = useDispatch()
    const classes = useStyles();

    const label = {inputProps: {'aria-label': 'Checkbox demo'}};
    const groups = useSelector((state) => state.routes.groups)
    const units = useSelector((state) => state.routes.units)
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [isCounts, setIsCounts] = useState([]);
    const [isUnits, setIsUnits] = useState([])

//show units change groups id
    const changeUnits = (id) => {
        const unite = units.filter(unit => unit.groupid === id)
        setIsUnits(unite)
    }

    useEffect(() => {
        dispatch(fetchRoutesGroupsRequest())
        dispatch(fetchRoutesUnitsRequest())
    },[])

    useEffect(() => {
        const unite = units.filter(unit => unit.groupid === 1)
        setIsUnits(unite)
    },[])

    const handleSelectAll = id => {
        const groupes = groups.filter(group => group.id === id).map(item => item.id)
        const unites = units.filter(unit => unit.groupid === id)
        const asUnits = unites.map(item => item.id)
        dispatch(assignUnitsToRoutes(asUnits))
        dispatch(assignGroupsToRoutes(groupes))
        dispatch(assignUnitsToRouteRequest(unites))
        dispatch(showUnitsCount({groupid: id, unites: unites}))
        setIsUnits(unites)
        dispatch(setGlobalId(id))
        dispatch(openAssignSaveButton())
        setIsCheckAll(!isCheckAll);
        setIsCheck(isCheck.filter(item => item == id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    return (
        <div style={{display:"block", margin:"0 0px" }}>
            <div style={{display:"flex"}}>
                <Grid item sx={{width:'25%', color: 'darkgray', padding: "10px", backgroundColor: "whitesmoke"}}>
                    <Typography variant={'subtitle1'} sx={{fontSize: "14px"}}>Группы обьектов: {groups.length}</Typography>
                </Grid>
                <Grid item sx={{width:'75%', color: 'darkgray', padding: "10px", backgroundColor: "whitesmoke"}}>
                    {isCounts && <Typography variant={'subtitle1'} sx={{fontSize: "14px"}}>Найдено
                        элементов: {isUnits.length}</Typography>}
                </Grid>
            </div>
            <div >
                <div className={classes.listBox}>
                    <Grid
                        item
                        // width={'20%'}
                        sx={{ overflow: 'auto', height: '80vh', backgroundColor: 'whitesmoke' }}
                    >
                        {groups && groups.map((group, index) => (
                            <div key={group.id}>
                                <div className={classes.prettyStopRow}>
                                    <div className={classes.left}>
                                        <div
                                            className={`${classes.prettyBorder} ${
                                                index === 0 && classes.first
                                            }`}
                                        >
                                            <div
                                                className={`${classes.circle} ${
                                                    index === 0 && classes.first
                                                }`}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className={classes.right}>
                                        <div className={classes.row}>
                                            <Checkbox
                                                type="checkbox"
                                                name={group.name}
                                                id={group.id}
                                                handleClick={() => handleSelectAll(group.id)}
                                                isChecked={isCheck.includes(group.id)}
                                            />
                                            <Typography variant={"subtitle2"} className={classes.name}
                                                        onClick={() => changeUnits(group.id)}>
                                                {group.name} </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Grid>
                    <Grid className={classes.horizontalList}>
                        {isUnits && isUnits.map( (unit, index) => (
                            <div className={classes.row} key={unit.id}>
                                <Checkbox
                                    key={unit.groupid}
                                    type="checkbox"
                                    name={unit.name}
                                    id={unit.groupid}
                                    handleClick={handleClick}
                                    isChecked={isCheckAll}
                                />
                                <Typography variant={"subtitle2"} className={classes.name}>{unit.name} </Typography>
                            </div>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    )
}